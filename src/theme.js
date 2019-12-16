import { createMuiTheme } from "@material-ui/core/styles";
import purple from "@material-ui/core/colors/purple";
import red from "@material-ui/core/colors/red";
import { fade } from "@material-ui/core/styles/colorManipulator";

export default createMuiTheme({
    typography: {
        fontFamily: [
            "BlinkMacSystemFont",
            '"Segoe UI"',
            "Roboto",
            '"Helvetica Neue"',
            "Arial",
            "sans-serif",
            '"Apple Color Emoji"',
            '"Segoe UI Emoji"',
            '"Segoe UI Symbol"'
        ].join(",")
    },
    palette: {
        type: "dark",
        background: {
            paper: fade("#000000", 0.1)
        },
        primary: {
            main: "#515151"
        },
        secondary: purple,
        error: red,
        contrastThreshold: 3,
        tonalOffset: 0.2
    }
});
