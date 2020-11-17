import {
    createMuiTheme,
    Theme,
  } from "@material-ui/core";
  import { grey, lightBlue } from "@material-ui/core/colors";
  import { BaseCSSProperties, CSSProperties } from "@material-ui/styles";
  import 'fontsource-asap';
  
  const primaryStyle: CSSProperties = {
    boxShadow: `5px 5px 10px #D8D8DB, -5px -5px 10px white`,
    color: `#000000`,
      "&:hover": {
      backgroundColor: `#F0F0F3`,
      color: `#000000`,
      boxShadow: `inset -3px -3px 7px #ffffff, inset 3px 3px 5px #D8D8DB`
    }
  }
  
  const secondaryStyle: CSSProperties = {
    boxShadow: `5px 5px 10px #D8D8DB, -5px -5px 10px white`,
    color: `#000000`,
      "&:hover": {
      backgroundColor: lightBlue[200],
      color: `#000000`,
      boxShadow: `inset -3px -3px 7px #ffffff, inset 3px 3px 5px #D8D8DB`
    }
  }
  
  const asapFont: BaseCSSProperties = {
    fontFamily: 'Asap',
    fontWeight: 300,
  }
  
  const inputFocused: CSSProperties = {
    borderRadius: `24px`,
    color: `black`,
    boxShadow: `7px 7px 15px #c2c2c5, -3px -3px 7px white`
  }

  const MegaTheme: Theme = createMuiTheme({

    typography: {
      fontFamily: 'Montserrat',
    },

    palette: {
      type: `light`,
      background: {
        default: `#F0F0F3`,
        paper: `#F0F0F3`
      },

      primary: {
        main: `#F0F0F3`,
        light: `#F0F0F3`,
        dark: `#d8d8da`,
        contrastText: grey[900]
      },

      secondary: {
        main: lightBlue[200],
        light: lightBlue[200],
        dark: lightBlue[400],
        contrastText: grey[900]
      }
    }
  });
  
  MegaTheme.overrides = {
    MuiCssBaseline: {
      '@global': {
        '@font-face': asapFont
      },
    },

    MuiPaper: {
      root: {
        paddingLeft: `50px`,
        paddingRight: `50px`,
        paddingTop: `25px`,
        paddingBottom: `25px`
      }
    },

    MuiAppBar: {
      root: {
  // TODO add white to transparent gradient and backdrop blur    color: "transparent",
        boxShadow: `none`
      }
    },

    MuiInputBase: {
      root: {
        color: `black`,
        borderRadius: `24px`,
        boxShadow: `inset -3px -3px 7px #ffffff, inset 3px 3px 5px #D8D8DB`,
        "&:hover": inputFocused,
        "&:focus": inputFocused
      }
    },

    MuiInputLabel: {
      root: {
        color: grey[700],
        marginLeft: `12px`
      }
      
    },

    MuiFormHelperText: {
      root: {
        color: grey[700],
      }
    },

    MuiNativeSelect: {
      root: {
        marginLeft: `12px`,
      }
    },

    MuiSelect: {
      root: {
        marginLeft: `12px`,
      }
    },

    MuiSwitch: {
      root: {
        switch: {
          padding: 10,
        }
      }
    },

    MuiButton: {
      root: {
        borderRadius: `24px`,
        textTransform: `uppercase`,
          "&:hover": {
           textTransform: `uppercase`,
          }
        },
      containedPrimary: primaryStyle,
      containedSecondary: secondaryStyle,
    },
  
    MuiIconButton: {
      root: {
        borderRadius: `24px`,
        textTransform: `uppercase`,
          "&:hover": {
           textTransform: `uppercase`,
          }
      },
      colorInherit: {
        boxShadow: `5px 5px 10px #D8D8DB, -5px -5px 10px white`,
          "&:hover": {
          backgroundColor: `#F0F0F3`,
          color: `#000000`,
          boxShadow: `inset -3px -3px 7px #ffffff, inset 3px 3px 5px #D8D8DB`
        }
      },
      colorPrimary: primaryStyle,
      colorSecondary: secondaryStyle
    }
  }
  
  export default MegaTheme;
  