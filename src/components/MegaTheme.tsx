/** @format */

import AsapFont from '../fonts/Asap'
import { createMuiTheme, Theme } from '@material-ui/core'
import InputBaseRootStyle from '../styles/InputBaseRootStyle'
import ButtonPrimaryStyle from '../styles/ButtonPrimaryStyle'
import ButtonSecondaryStyle from '../styles/ButtonSecondaryStyle'
import PaletteBackgroundStyle from '../styles/PaletteBackgroundStyle'
import PalettePrimaryStyle from '../styles/PalettePrimaryStyle'
import PaletteSecondaryStyle from '../styles/PaletteSecondaryStyle'
import InputLabelRootStyle from '../styles/InputLabelRootStyle'
import PaperRootStyle from '../styles/PaperRootStyle'
import FormHelperTextRootStyle from '../styles/FormHelperTextRootStyle'
import NativeSelectRootStyle from '../styles/NativeSelectRootStyle'
import SelectRootStyle from '../styles/SelectRootStyle'
import ButtonRootStyle from '../styles/ButtonRootStyle'
import ButtonIconInheritStyle from '../styles/ButtonIconInheritStyle'
import SwitchRootStyle from '../styles/SwitchRootStyle'
import ListItemRootStyle from '../styles/ListItemRootStyle'
import ButtonIconRootStyle from '../styles/ButtonIconRootStyle'
import CardRootStyle from '../styles/CardRootStyle'
import TablePaginationRootStyle from '../styles/TablePaginationRootStyle'
import MenuRootStyle from '../styles/MenuRootStyle'
import FabRootStyle from '../styles/FabRootStyle'
import AppBarRootStyle from '../styles/AppBarRootStyle'
import DrawerRootStyle from '../styles/DrawerRootStyle'
import DrawerPaperStyle from '../styles/DrawerPaperStyle'
import ListRootStyle from '../styles/ListRootStyle'
import SpeedDialRootStyle from '../styles/FabRootStyle'
import RadioRootStyle from '../styles/RadioRootStyle'
import CheckboxRootStyle from '../styles/CheckboxRootStyle'
import ImageListRootStyle from '../styles/ImageListRootStyle'
import ImageListItemBarRootStyle from '../styles/ImageListItemBarRootStyle'
import MuiInputAdornmentRootStyle from '../styles/MuiInputAdornmentRootStyle'
import NativeSelectOutlinedStyle from '../styles/InputOutlinedRootStyle'
import InputOutlinedRootStyle from '../styles/InputOutlinedRootStyle'
import FormControlLabelRootStyle from '../styles/FormControlLabelRootStyle'
import SliderRootStyle from '../styles/SliderRootStyle'

const MegaTheme: Theme = createMuiTheme({
  typography: {
    fontFamily: 'Asap',
  },
  palette: {
    background: PaletteBackgroundStyle,
    primary: PalettePrimaryStyle,
    secondary: PaletteSecondaryStyle,
  },
  components: {
    MuiAppBar: {
      styleOverrides: {
        root: AppBarRootStyle,
      },
    },
    MuiButton: {
      styleOverrides: {
        root: ButtonRootStyle,
        containedPrimary: ButtonPrimaryStyle,
        containedSecondary: ButtonSecondaryStyle,
      },
    },
    MuiCard: {
      styleOverrides: {
        root: CardRootStyle,
      },
    },
    MuiCssBaseline: {
      styleOverrides: {
        '@global': {
          '@font-face': AsapFont,
        },
      },
    },
    MuiDrawer: {
      styleOverrides: {
        root: DrawerRootStyle,
        paper: DrawerPaperStyle,
      },
    },
    MuiFormHelperText: {
      styleOverrides: {
        root: FormHelperTextRootStyle,
      },
    },
    MuiFormControlLabel: {
      styleOverrides: {
        root: FormControlLabelRootStyle,
      },
    },
    MuiIconButton: {
      styleOverrides: {
        root: ButtonIconRootStyle,
        colorInherit: ButtonIconInheritStyle,
        colorPrimary: ButtonPrimaryStyle,
        colorSecondary: ButtonSecondaryStyle,
      },
    },
    MuiInputAdornment: {
      styleOverrides: {
        root: MuiInputAdornmentRootStyle,
      },
    },
    MuiInputBase: {
      styleOverrides: {
        root: InputBaseRootStyle,
      },
    },
    MuiSlider: {
      styleOverrides: {
        root: SliderRootStyle,
      },
    },
    MuiOutlinedInput: {
      styleOverrides: {
        root: InputOutlinedRootStyle,
      },
    },
    MuiInputLabel: {
      styleOverrides: {
        root: InputLabelRootStyle,
      },
    },
    MuiNativeSelect: {
      styleOverrides: {
        root: NativeSelectRootStyle,
        filled: NativeSelectRootStyle,
        disabled: NativeSelectRootStyle,
        select: NativeSelectRootStyle,
        outlined: NativeSelectOutlinedStyle,
      },
    },
    MuiPaper: {
      styleOverrides: {
        root: PaperRootStyle,
      },
    },
    MuiSelect: {
      styleOverrides: {
        root: SelectRootStyle,
      },
    },
    MuiSwitch: {
      styleOverrides: {
        root: SwitchRootStyle,
      },
    },
    MuiList: {
      styleOverrides: {
        root: ListRootStyle,
      },
    },
    MuiListItem: {
      styleOverrides: {
        root: ListItemRootStyle,
      },
    },
    MuiTablePagination: {
      styleOverrides: {
        root: TablePaginationRootStyle,
      },
    },
    MuiMenu: {
      styleOverrides: {
        paper: MenuRootStyle,
      },
    },
    MuiSpeedDial: {
      styleOverrides: {
        root: SpeedDialRootStyle,
      },
    },
    MuiFab: {
      styleOverrides: {
        root: FabRootStyle,
      },
    },
    MuiRadio: {
      styleOverrides: {
        root: RadioRootStyle,
      },
    },
    MuiCheckbox: {
      styleOverrides: {
        root: CheckboxRootStyle,
      },
    },
    MuiImageList: {
      styleOverrides: {
        root: ImageListRootStyle,
      },
    },
    MuiImageListItemBar: {
      styleOverrides: {
        root: ImageListItemBarRootStyle,
      },
    },
  },
})

export default MegaTheme
