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
    type: `light`,
    background: PaletteBackgroundStyle,
    primary: PalettePrimaryStyle,
    secondary: PaletteSecondaryStyle
  },
  overrides: {
    MuiAppBar: {
      root: {
        // TODO add white to transparent gradient and backdrop blur    color: "transparent",
        boxShadow: `none`
      }
    },
    MuiButton: {
      root: ButtonRootStyle,
      containedPrimary: ButtonPrimaryStyle,
      containedSecondary: ButtonSecondaryStyle
    },
    MuiCssBaseline: {
      '@global': {
        '@font-face': AsapFont
      }
    },
    MuiFormHelperText: {
      root: FormHelperRootTextStyle
    },
    MuiIconButton: {
      root: ButtonIconRootStyle,
      colorInherit: ButtonIconInheritStyle,
      colorPrimary: ButtonPrimaryStyle,
      colorSecondary: ButtonSecondaryStyle
    },
    MuiInputBase: {
      root: InputBaseRootStyle
    },
    MuiInputLabel: {
      root: InputLabelRootStyle
    },
    MuiNativeSelect: {
      root: NativeSelectRootStyle
    },
    MuiPaper: {
      root: PaperRootStyle
    },
    MuiSelect: {
      root: SelectRootStyle
    },
    MuiSwitch: {
      root: SwitchRootStyle
    }
  }
})

export default MegaTheme
