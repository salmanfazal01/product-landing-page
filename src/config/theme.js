import { createMuiTheme } from "@material-ui/core/styles";

const darkColors = {
  blue: "#24aaff",
  white: "#fff",
  black: "#000",
  grey: "#c3cacd",
  orange: "#feaa25",
  red: "#f55767",
  green: "#40975f",
  yellow: "#ffcb00",

  background: "#0C0E19",
  bgRed: "rgba(245, 87, 102, 0.1)",
  bgBlue: "rgba(37, 99, 255, 0.1)",
  bgGreen: "rgba(64, 151, 95, 0.1)",
  bgYellow: "rgba(255, 203, 0, 0.1)",
};

const lightColors = {
  blue: "#2563ff",
  darkblue: "#09142e",
  white: "#eee",
  black: "#000",
  grey: "#e2eaed",
  darkgrey: "#626566",
  orange: "#feaa25",
  red: "#f55767",
  green: "#40975f",
  yellow: "#ffcb00",
  lightgrey: "#f2f3f5",

  background: "#fff",
  bgRed: "rgba(245, 87, 102, 0.1)",
  bgBlue: "rgba(37, 99, 255, 0.1)",
  bgGreen: "rgba(64, 151, 95, 0.1)",
  bgYellow: "rgba(255, 203, 0, 0.1)",
};

export const themes = {
  dark: {
    palette: {
      type: "dark",
      primary: {
        main: darkColors.white,
        text: darkColors.white,
        grey: darkColors.grey,
        blue: darkColors.blue,
        orange: darkColors.orange,
        black: darkColors.black,
        red: darkColors.red,
        green: darkColors.green,
        yellow: darkColors.yellow,
      },
      secondary: {
        main: darkColors.black,
        text: darkColors.black,
      },
      background: {
        main: darkColors.background,
        default: darkColors.background,
        red: darkColors.bgRed,
        blue: darkColors.bgBlue,
        green: darkColors.bgGreen,
        yellow: darkColors.bgYellow,
      },
    },
    typography: {
      fontFamily: `"Poppins", sans-serif`,
      fontSize: 14,
    },
  },
  light: {
    palette: {
      type: "light",
      primary: {
        main: lightColors.black,
        text: lightColors.black,
        grey: lightColors.grey,
        darkgrey: lightColors.darkgrey,
        blue: lightColors.blue,
        orange: lightColors.orange,
        black: lightColors.black,
        red: lightColors.red,
        green: lightColors.green,
        yellow: lightColors.yellow,
      },
      secondary: {
        main: lightColors.white,
        text: lightColors.white,
      },
      background: {
        main: lightColors.background,
        default: lightColors.background,
        red: lightColors.red,
        blue: lightColors.blue,
        darkblue: lightColors.darkblue,
        green: lightColors.green,
        yellow: lightColors.yellow,
        lightgrey: lightColors.lightgrey,

        redTransparent: lightColors.bgRed,
        blueTransparent: lightColors.bgBlue,
        greenTransparent: lightColors.bgGreen,
        yellowTransparent: lightColors.bgYellow,
      },
    },
    typography: {
      fontFamily: `"Poppins", sans-serif`,
      fontSize: 14,
    },
  },
};

export const getTheme = (mode) => {
  return createMuiTheme({ ...themes[mode] });
};

export default getTheme("light");
