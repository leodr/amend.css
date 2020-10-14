const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
    future: {
        removeDeprecatedGapUtilities: true,
        purgeLayersByDefault: true,
        defaultLineHeights: true,
        standardFontWeights: true,
    },
    experimental: {
        applyComplexClasses: true,
        uniformColorPalette: true,
        extendedSpacingScale: true,
        extendedFontSizeScale: true,
    },
    purge: ["./website/**/*", "./src/**/*"],
    theme: {
        extend: {
            fontFamily: {
                sans: ["Inter var", "Inter", ...defaultTheme.fontFamily.sans],
                mono: ["JetBrains Mono", ...defaultTheme.fontFamily.mono],
            },
        },
    },
    variants: {},
    plugins: [require("@tailwindcss/typography")({ modifiers: ["lg"] })],
};
