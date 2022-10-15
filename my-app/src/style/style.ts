import { createTheme } from "@mui/material";

const theme = createTheme({
  components: {
    MuiTypography: {
      styleOverrides: {
        h1: {
          fontWeight: "bold",
        },
        h3: {
          fontWeight: "bold",
        },
        h4: {
          fontWeight: "bold",
        },
      },
    },
    MuiAppBar: {
      styleOverrides: {
        colorPrimary: {
          backgroundColor: "#E996FA",
          /* backgroundColor: "#FF69B4", */
        },
      },
    },
    MuiBottomNavigation: {
      styleOverrides: {
        root: {
          backgroundColor: "#E996FA",
        },
      },
    },
    MuiBottomNavigationAction: {
      styleOverrides: {
        root: {
          color: "#FFE4F8",
        },
      },
    },
    MuiDivider: {
      styleOverrides: {
        root: {
          backgroundColor: "#bd74dc",
          color: "#FFE4F8",
        },
      },
    },
  },
});

export default theme;
