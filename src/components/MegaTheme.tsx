import { createMuiTheme, Theme } from '@material-ui/core'
import AsapFont from '../fonts/Asap'
import InputBaseRootStyle from '../styles/InputBaseRootStyle'
import ButtonPrimaryStyle from '../styles/ButtonPrimaryStyle'
import ButtonSecondaryStyle from '../styles/ButtonSecondaryStyle'
import PaletteBackgroundStyle from '../styles/PaletteBackgroundStyle'
import PalettePrimaryStyle from '../styles/PalettePrimaryStyle'
import PaletteSecondaryStyle from '../styles/PaletteSecondaryStyle'
import InputLabelRootStyle from '../styles/InputLabelRootStyle'
import PaperRootStyle from '../styles/PaperRootStyle'
import FormHelperRootTextStyle from '../styles/FormHelperTextRootStyle'
import NativeSelectRootStyle from '../styles/NativeSelectRootStyle'
import SelectRootStyle from '../styles/SelectRootStyle'
import ButtonRootStyle from '../styles/ButtonRootStyle'
import ButtonIconRootStyle from '../styles/ButtonIconRootStyle'
import ButtonIconInheritStyle from '../styles/ButtonIconInheritStyle'
import SwitchRootStyle from '../styles/SwitchRootStyle'
import ListItemRootStyle from '../styles/ListItemRootStyle'

const MegaTheme: Theme = createMuiTheme({
  /*  props: {
    MuiTypography: {
      variantMapping: {
        h1: 'h2',
        h2: 'h2',
        h3: 'h2',
        h4: 'h2',
        h5: 'h2',
        h6: 'h2',
        subtitle1: 'h2',
        subtitle2: 'h2',
        body1: 'span',
        body2: 'span',
      },
    },
  }, */
  typography: {
    fontFamily: 'Montserrat'
  },
  palette: {
    background: PaletteBackgroundStyle,
    primary: PalettePrimaryStyle,
    secondary: PaletteSecondaryStyle
  },
  components: {
    MuiAppBar: {
      styleOverrides: {
      root: {
        boxShadow: `0 40px 20px -20px #F0F0F3`
      }
    }
    },
    MuiButton: {
      styleOverrides: {
        root: ButtonRootStyle,
      containedPrimary: ButtonPrimaryStyle,
      containedSecondary: ButtonSecondaryStyle
      }
    },
    MuiCssBaseline: {
      styleOverrides: {
        '@global': {
        '@font-face': AsapFont
      }
    }
    },
    MuiFormHelperText: {
      styleOverrides: {
        root: FormHelperRootTextStyle
      }
    },
    MuiIconButton: {
      styleOverrides: {
        root: ButtonIconRootStyle,
      colorInherit: ButtonIconInheritStyle,
      colorPrimary: ButtonPrimaryStyle,
      colorSecondary: ButtonSecondaryStyle
      }
    },
    MuiInputBase: {
      styleOverrides: {
      root: InputBaseRootStyle
      }
    },
    MuiInputLabel: {
      styleOverrides: {
        root: InputLabelRootStyle
      }
    },
    MuiNativeSelect: {
      styleOverrides: {
        root: NativeSelectRootStyle,
      filled: NativeSelectRootStyle,
      disabled: NativeSelectRootStyle,
      select: NativeSelectRootStyle
      }
    },
    MuiPaper: {
      styleOverrides: {
        root: PaperRootStyle
      }
    },
    MuiSelect: {
      styleOverrides: {
        root: SelectRootStyle
      }
    },
    MuiSwitch: {
      styleOverrides: {
        root: SwitchRootStyle
      }
    },
    MuiListItem: {
      styleOverrides: {
        root: ListItemRootStyle
      }
    }
  }
})

export default MegaTheme
