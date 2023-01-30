import { createTheme } from "@mui/material/styles";

const theme = createTheme({
    palette: {
        primary: {
            main: "#01579b"
        },
    },
    breakpoints: {
        values: {
            xs: 0,
            sm: 600,
            md: 900,
            lg: 1250,
            xl: 1210

        }
    }
    ,
    typography: {
        button: {
            textTransform: "none",
        },
        h6: {
            fontWeight: "bolder",
            fontSize: "32px"
        }
    },
    components: {
        MuiInputLabel: {
            styleOverrides: {
                root: {
                    fontWeight: "600"
                }
            }
        },
    },
})

export default theme;