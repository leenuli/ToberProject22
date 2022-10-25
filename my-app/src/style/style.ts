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
    MuiStepper: {
      styleOverrides: {
        root: {
          color: "#fff",
          padding: "10px",
          alignItems: "center",
        },
      },
    },
    MuiButton: {
      styleOverrides: {
        root: {
          backgroundColor: "hotpink",
          color: "#fff",
        },
        contained: {
          backgroundColor: "hotpink",
        },
      },
    },

    MuiStep: {
      styleOverrides: {
        root: {
          color: "#fff",
        },
        completed: {
          color: "hotpink",
        },
        alternativeLabel: {
          color: "hotpink",
        },
      },
    },

    MuiStepIcon: {
      styleOverrides: {
        root: {
          color: "hotpink",
        },
        active: {
          color: "hotpink",
        },
        completed: {
          color: "hotpink",
        },
        error: {
          color: "hotpink",
        },
      },
    },
  },
});

export default theme;
