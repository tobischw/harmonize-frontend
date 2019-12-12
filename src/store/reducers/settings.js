import { createMuiTheme } from "@material-ui/core/styles";
import themeConfig from "../../theme";

const TOGGLE_THEME_MODE = "settings/TOGGLETHEMEMODE";

const defaultTheme = createMuiTheme(themeConfig);

const initState = {
  theme: defaultTheme,
  darkMode: true
};

export default function reducer(state = initState, action) {
  switch (action.type) {
    case TOGGLE_THEME_MODE:
      if (action.enableDark) {
        return {
          ...state,
          theme: createMuiTheme({
            ...themeConfig,
            palette: {
              ...themeConfig.palette,
              primary: state.theme.palette.primary,
              secondary: state.theme.palette.secondary,
              type: "dark"
            }
          }),
          darkMode: true
        };
      }
      return {
        ...state,
        theme: createMuiTheme({
          ...themeConfig,
          palette: {
            ...themeConfig.palette,
            primary: state.theme.palette.primary,
            secondary: state.theme.palette.secondary,
            type: "light"
          }
        }),
        darkMode: false
      };

    default:
      return state;
  }
}

export function toggleThemeMode(enableDark) {
  return {
    type: TOGGLE_THEME_MODE,
    enableDark
  };
}