import { createTheme } from '@mui/material';

const lightPalette = {
  primary: {
    main: '#66bb99',        // м’який ізумрудний (аналог #bfa5d6)
    light: '#d9f2e7',       // дуже світлий ізумрудний (аналог #e8daf5)
    dark: '#4c9b7c',        // темніший ізумрудний (аналог #9e79b0)
    contrastText: '#fff',
  },
  secondary: {
    main: '#a3decf',        // м'який бірюзово-зелений (аналог #d4c2fc)
    contrastText: '#3a3a3a',
  },
  background: {
    default: '#fcfaff',
    paper: '#ffffff',
  },
  text: {
    primary: '#1f1f1f',
    secondary: '#5c5c5c',
  },
  action: {
    hover: 'rgba(102, 187, 153, 0.08)',     // ізумрудний hover
    selected: 'rgba(102, 187, 153, 0.16)',  // ізумрудний selected
  },
};



const darkPalette = {
  primary: {
    main: 'rgba(255, 215, 0, 0.5)', // gold
    light: 'rgba(255, 215, 0, 0.6)',
    dark: '#bfa100',
    contrastText: '#000',
  },
  secondary: {
    main: '#8e8e8e',
    contrastText: '#fff',
  },
  background: {
    default: 'rgba(0, 0, 0, 0.9)',
    paper: 'rgba(0, 0, 0, 0.2)',
  },
  text: {
    primary: '#d1d1d1',
    secondary: '#a0a0a0',
  },
  action: {
    hover: 'rgba(255, 215, 0, 0.2)',
    selected: 'rgba(255, 215, 0, 0.2)',
  },
};


export const lightTheme = createTheme({
  palette: lightPalette,
  typography: {
    fontFamily: "'Poppins', 'Roboto', 'Arial', sans-serif",
    h3: {
      fontWeight: 700,
    },
    h5: {
      fontWeight: 600,
    },
    h6: {
      fontWeight: 600,
    },
  },
  shape: {
    borderRadius: 8,
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          textTransform: 'none',
          borderRadius: 8,
          boxShadow: 'none',
          '&:hover': {
            boxShadow: '0 2px 8px rgba(103, 58, 183, 0.25)',
          },
        },
        contained: {
          backgroundColor: lightPalette.primary.main,
          '&:hover': {
            backgroundColor: lightPalette.primary.dark,
          },
        },
        outlined: {
          borderColor: lightPalette.primary.main,
          '&:hover': {
            backgroundColor: 'rgba(103, 58, 183, 0.08)',
          },
        },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          boxShadow: '0 6px 16px rgba(0, 0, 0, 0.05)',
          borderRadius: 12,
        },
      },
    },
    MuiTab: {
      styleOverrides: {
        root: {
          textTransform: 'none',
          fontWeight: 500,
          fontSize: '1rem',
        },
      },
    },
  },
});

export const darkTheme = createTheme({
  palette: darkPalette,
  typography: {
    fontFamily: "'Poppins', 'Roboto', 'Arial', sans-serif",
    h3: {
      fontWeight: 700,
    },
    h5: {
      fontWeight: 600,
    },
    h6: {
      fontWeight: 600,
    },
  },
  shape: {
    borderRadius: 8,
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          textTransform: 'none',
          borderRadius: 8,
          boxShadow: 'none',
          '&:hover': {
            boxShadow: '0 2px 8px rgba(149, 117, 205, 0.35)',
          },
        },
        contained: {
          backgroundColor: darkPalette.primary.main,
          '&:hover': {
            backgroundColor: darkPalette.primary.dark,
          },
        },
        outlined: {
          borderColor: darkPalette.primary.main,
          '&:hover': {
            backgroundColor: 'rgba(149, 117, 205, 0.12)',
          },
        },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          backgroundColor: 'rgba(60, 60, 60, 0.1)',

          boxShadow: '0 6px 16px rgba(0, 0, 0, 0.2)',
          borderColor: darkPalette.primary.main,
        border: `2px solid ${darkPalette.primary.main}`,
          borderRadius: 12,
        },
      },
    },
    MuiPaper: {
      styleOverrides: {
        root: {
          backgroundColor: 'rgba(60, 60, 60, 0.2)',
          borderRadius: 12,
          boxShadow: '0 6px 16px rgba(0, 0, 0, 0.2)',
        },
      },
    },
    MuiTab: {
      styleOverrides: {
        root: {
          textTransform: 'none',
          fontWeight: 500,
          fontSize: '1rem',
        },
      },
    },
  },
});