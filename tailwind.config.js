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
            boxShadow: (theme) => ({
                "outline-indigo": `0 0 0 3px ${theme("colors.indigo.500")}80`,
            }),
        },
        customForms: (theme) => ({
            default: {
                select: {
                    icon: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="-1 -1 22 22" fill="${theme(
                        "colors.gray.500"
                    )}"><path fill-rule="evenodd" d="M10 3a1 1 0 01.707.293l3 3a1 1 0 01-1.414 1.414L10 5.414 7.707 7.707a1 1 0 01-1.414-1.414l3-3A1 1 0 0110 3zm-3.707 9.293a1 1 0 011.414 0L10 14.586l2.293-2.293a1 1 0 011.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z" clip-rule="evenodd" /></svg>`,
                },
            },
        }),
    },
    variants: {
        backgroundColor: ({ after }) => after(["active"]),
    },
    plugins: [
        require("@tailwindcss/typography")({ modifiers: ["lg"] }),
        require("@tailwindcss/custom-forms"),
    ],
};
