import colors from "tailwindcss/colors";

export const THEME = {
  COLORS: {
    PRIMARY: colors.emerald[500],
    GRAY_900: "#161819",
    GRAY_600: "#1C1D21",
    GRAY_500: "#29282D",
    GRAY_400: "#313135",
    GRAY_300: "#A0A0A7",
    GRAY_200: "#D5D4D9",
    OVERLAY: "rgba(0, 0, 0, 0.5)",
  },

  FONTS: {
    FAMILY: {
      PRIMARY: {
        NORMAL: "Roboto_400Regular",
        MEDIUM: "Roboto_500Medium",
        BOLD: "Roboto_700Bold",
        EXTRA_BOLD: "Roboto_900Black",
      },
    },

    SIZE: {
      XS: 12,
      SM: 14,
      MD: 16,
      LG: 18,
      XL: 20,
      XXL: 24,
      XXXL: 32,
    },
  },
};
