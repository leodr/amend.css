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
        postcssPresetEnv(),
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
