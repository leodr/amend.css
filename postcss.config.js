const postcssPresetEnv = require("postcss-preset-env");
const tailwindCSS = require("tailwindcss");
const postcssNesting = require("postcss-nesting");
const cssnano = require("cssnano");
const postcssImport = require("postcss-import");

module.exports = {
    plugins: [
        postcssImport(),
        postcssNesting(),
        tailwindCSS(),
        postcssPresetEnv({ stage: 1 }),
        process.env.NODE_ENV === "production" &&
            cssnano({
                presets: [
                    "default",
                    {
                        discardComments: "all",
                    },
                ],
            }),
    ].filter(Boolean),
};
