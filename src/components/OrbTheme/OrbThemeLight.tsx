import { createMuiTheme, Theme } from '@material-ui/core'
import AccordionExpandedStyle from '../../stylesLight/AccordionExpandedStyle'
import AccordionRootStyle from '../../stylesLight/AccordionRootStyle'
import AlertRootStyle from '../../stylesLight/AlertRootStyle'
import AppBarRootStyle from '../../stylesLight/AppBarRootStyle'
import AsapFont from '../../fonts/Asap'
import AutocompleteOptionStyle from '../../stylesLight/AutocompleteOptionStyle'
import AutocompletePaperStyle from '../../stylesLight/AutocompletePaperStyle'
import BottomNavigationActionRootStyle from '../../stylesLight/BottomNavigationActionRootStyle'
import BottomNavigationRootStyle from '../../stylesLight/BottomNavigationRootStyle'
import ButtonIconRootStyle from '../../stylesLight/ButtonIconRootStyle'
import ButtonPrimaryStyle from '../../stylesLight/ButtonPrimaryStyle'
import ButtonSecondaryStyle from '../../stylesLight/ButtonSecondaryStyle'
import ButtonRootStyle from '../../stylesLight/ButtonRootStyle'
import CardRootStyle from '../../stylesLight/CardRootStyle'
import CheckboxRootStyle from '../../stylesLight/CheckboxRootStyle'
import CircularProgressPrimaryStyle from '../../stylesLight/CircularProgressPrimaryStyle'
import CircularProgressRootStyle from '../../stylesLight/CircularProgressRootStyle'
import ContainerRootStyle from '../../stylesLight/ContainerRootStyle'
import DialogPaperStyle from '../../stylesLight/DialogPaperStyle'
import DialogRootStyle from '../../stylesLight/DialogRootStyle'
import DrawerPaperStyle from '../../stylesLight/DrawerPaperStyle'
import DrawerRootStyle from '../../stylesLight/DrawerRootStyle'
import FabRootStyle from '../../stylesLight/FabRootStyle'
import FormControlLabelRootStyle from '../../stylesLight/FormControlLabelRootStyle'
import FormControlRootStyle from '../../stylesLight/FormControlRootStyle'
import FormHelperTextRootStyle from '../../stylesLight/FormHelperTextRootStyle'
import IconRootStyle from '../../stylesLight/IconRootStyle'
import ImageListRootStyle from '../../stylesLight/ImageListRootStyle'
import ImageListItemBarRootStyle from '../../stylesLight/ImageListItemBarRootStyle'
import InputAdornmentRootStyle from '../../stylesLight/InputAdornmentRootStyle'
import InputBaseFocusedStyle from '../../stylesLight/InputBaseFocusedStyle'
import InputBaseRootStyle from '../../stylesLight/InputBaseRootStyle'
import InputLabelRootStyle from '../../stylesLight/InputLabelRootStyle'
import InputOutlinedRootStyle from '../../stylesLight/InputOutlinedRootStyle'
import ListItemRootStyle from '../../stylesLight/ListItemRootStyle'
import ListRootStyle from '../../stylesLight/ListRootStyle'
import ListSubheaderStyle from '../../stylesLight/ListSubheaderStyle'
import MenuRootStyle from '../../stylesLight/MenuRootStyle'
import MobileStepperDotActiveStyle from '../../stylesLight/MobileStepperDotActiveStyle'
import MobileStepperDotStyle from '../../stylesLight/MobileStepperDotStyle'
import MobileStepperProgressStyle from '../../stylesLight/MobileStepperProgressStyle'
import NativeSelectOutlinedStyle from '../../stylesLight/InputOutlinedRootStyle'
import NativeSelectRootStyle from '../../stylesLight/NativeSelectRootStyle'
import OutlinedInputMultilineStyle from '../../stylesLight/OutlinedInputMultilineStyle'
import PaperRootStyle from '../../stylesLight/PaperRootStyle'
import RadioRootStyle from '../../stylesLight/RadioRootStyle'
import SelectMenuRootStyle from '../../stylesLight/SelectMenuRootStyle'
import SelectRootStyle from '../../stylesLight/SelectRootStyle'
import SliderMarkActiveStyle from '../../stylesLight/SliderMarkActiveStyle'
import SliderMarkStyle from '../../stylesLight/SliderMarkStyle'
import SliderRailStyle from '../../stylesLight/SliderRailStyle'
import SliderRootStyle from '../../stylesLight/SliderRootStyle'
import SliderThumbStyle from '../../stylesLight/SliderThumbStyle'
import SliderTrackStyle from '../../stylesLight/SliderTrackStyle'
import SliderValueLabelStyle from '../../stylesLight/SliderValueLabelStyle'
import SpeedDialRootStyle from '../../stylesLight/FabRootStyle'
import SpeedDialFabStyle from '../../stylesLight/SpeedDialFabStyle'
import StepIconRootStyle from '../../stylesLight/StepIconRootStyle'
import StepIconActiveStyle from '../../stylesLight/StepIconActiveStyle'
import StepIconCompletedStyle from '../../stylesLight/StepIconCompletedStyle'
import SwitchRootStyle from '../../stylesLight/SwitchRootStyle'
import TabLabelIconStyle from '../../stylesLight/TabLabelIconStyle'
import TablePaginationItemRootStyle from '../../stylesLight/TablePaginationItemRootStyle'
import TablePaginationRootStyle from '../../stylesLight/TablePaginationItemRootStyle'
import TablePaginationSelectRootStyle from '../../stylesLight/TablePaginationSelectRootStyle'
import TabRootStyle from '../../stylesLight/TabRootStyle'
import TabSelectedStyle from '../../stylesLight/TabSelectedStyle'
import TabsRootStyle from '../../stylesLight/TabsRootStyle'
import ToggleButtonGroupRootStyle from '../../stylesLight/ToggleButtonGroupRootStyle'
import ToggleButtonRootStyle from '../../stylesLight/ToggleButtonRootStyle'
import TextFieldRootStyle from '../../stylesLight/TextFieldRootStyle'

const OrbThemeLight: Theme = createMuiTheme({
  components: {
    MuiAccordion: {
      styleOverrides: {
        root: AccordionRootStyle,
        expanded: AccordionExpandedStyle
      }
    },
    MuiAlert: {
      styleOverrides: {
        root: AlertRootStyle
      }
    },
    MuiAppBar: {
      styleOverrides: {
        root: AppBarRootStyle
      }
    },
    MuiAutocomplete: {
      styleOverrides: {
        paper: AutocompletePaperStyle,
        option: AutocompleteOptionStyle,
        groupLabel: ListSubheaderStyle
      }
    },
    MuiBottomNavigation: {
      styleOverrides: {
        root: BottomNavigationRootStyle
      }
    },
    MuiBottomNavigationAction: {
      styleOverrides: {
        root: BottomNavigationActionRootStyle
      }
    },
    MuiButton: {
      styleOverrides: {
        root: ButtonRootStyle,
        containedPrimary: ButtonPrimaryStyle,
        containedSecondary: ButtonSecondaryStyle
      }
    },
    MuiCard: {
      styleOverrides: {
        root: CardRootStyle
      }
    },
    MuiCheckbox: {
      styleOverrides: {
        root: CheckboxRootStyle
      }
    },
    MuiChip: {
      styleOverrides: {
        root: ButtonPrimaryStyle
      }
    },
    MuiCircularProgress: {
      styleOverrides: {
        root: CircularProgressRootStyle,
        colorPrimary: CircularProgressPrimaryStyle
      }
    },
    MuiContainer: {
      styleOverrides: {
        root: ContainerRootStyle
      }
    },
    MuiCssBaseline: {
      styleOverrides: {
        '@font-face': AsapFont
      }
    },
    MuiDialog: {
      styleOverrides: {
        root: DialogRootStyle,
        paper: DialogPaperStyle
      }
    },
    MuiDrawer: {
      styleOverrides: {
        root: DrawerRootStyle,
        paper: DrawerPaperStyle
      }
    },
    MuiFab: {
      styleOverrides: {
        root: FabRootStyle
      }
    },
    MuiFormControl: {
      styleOverrides: {
        root: FormControlRootStyle
      }
    },
    MuiFormControlLabel: {
      styleOverrides: {
        root: FormControlLabelRootStyle
      }
    },
    MuiFormHelperText: {
      styleOverrides: {
        root: FormHelperTextRootStyle
      }
    },
    MuiIconButton: {
      styleOverrides: {
        root: ButtonIconRootStyle
      }
    },
    MuiIcon: {
      styleOverrides: {
        root: IconRootStyle
      }
    },
    MuiImageList: {
      styleOverrides: {
        root: ImageListRootStyle
      }
    },
    MuiImageListItemBar: {
      styleOverrides: {
        root: ImageListItemBarRootStyle
      }
    },
    MuiInputAdornment: {
      styleOverrides: {
        root: InputAdornmentRootStyle
      }
    },
    MuiInputBase: {
      styleOverrides: {
        root: InputBaseRootStyle,
        focused: InputBaseFocusedStyle
      }
    },
    MuiInputLabel: {
      styleOverrides: {
        root: InputLabelRootStyle
      }
    },
    MuiList: {
      styleOverrides: {
        root: ListRootStyle,
        subheader: ListSubheaderStyle
      }
    },
    MuiListItem: {
      styleOverrides: {
        root: ListItemRootStyle
      }
    },
    MuiMenu: {
      styleOverrides: {
        paper: MenuRootStyle,
        list: ListRootStyle
      }
    },
    MuiMobileStepper: {
      styleOverrides: {
        dot: MobileStepperDotStyle,
        dotActive: MobileStepperDotActiveStyle,
        progress: MobileStepperProgressStyle
      }
    },
    MuiNativeSelect: {
      styleOverrides: {
        root: NativeSelectRootStyle,
        filled: NativeSelectRootStyle,
        select: NativeSelectRootStyle,
        outlined: NativeSelectOutlinedStyle
      }
    },
    MuiOutlinedInput: {
      styleOverrides: {
        root: InputOutlinedRootStyle,
        multiline: OutlinedInputMultilineStyle
      }
    },
    MuiPaginationItem: {
      styleOverrides: {
        root: TablePaginationItemRootStyle
      }
    },
    MuiPaper: {
      styleOverrides: {
        root: PaperRootStyle
      }
    },
    MuiPopover: {
      styleOverrides: {
        paper: MenuRootStyle
      }
    },
    MuiRadio: {
      styleOverrides: {
        root: RadioRootStyle
      }
    },
    MuiSelect: {
      styleOverrides: {
        root: SelectRootStyle,
//        selectMenu: SelectMenuRootStyle
      }
    },
    MuiSlider: {
      styleOverrides: {
        root: SliderRootStyle,
        thumb: SliderThumbStyle,
        valueLabel: SliderValueLabelStyle,
        track: SliderTrackStyle,
        rail: SliderRailStyle,
        mark: SliderMarkStyle,
        markActive: SliderMarkActiveStyle
      }
    },
    MuiSpeedDial: {
      styleOverrides: {
        root: SpeedDialRootStyle,
        fab: SpeedDialFabStyle
      }
    },
    MuiStepIcon: {
      styleOverrides: {
        root: StepIconRootStyle,
        active: StepIconActiveStyle,
        completed: StepIconCompletedStyle
      }
    },
    MuiSwitch: {
      styleOverrides: {
        root: SwitchRootStyle
      }
    },
    MuiTab: {
      styleOverrides: {
        root: TabRootStyle,
        selected: TabSelectedStyle,
        labelIcon: TabLabelIconStyle
      }
    },
    MuiTabs: {
      styleOverrides: {
        root: TabsRootStyle,
        indicator: TabSelectedStyle
      }
    },
    MuiTablePagination: {
      styleOverrides: {
        root: TablePaginationRootStyle,
        selectRoot: TablePaginationSelectRootStyle
      }
    },
    MuiTextField: {
      styleOverrides: {
        root: TextFieldRootStyle
      }
    },
    MuiToggleButton: {
      styleOverrides: {
        root: ToggleButtonRootStyle
      }
    },
    MuiToggleButtonGroup: {
      styleOverrides: {
        root: ToggleButtonGroupRootStyle
      }
    }
  },
  palette: {
    mode: 'light',
    background: {
      default: `#F0F0F3`,
      paper: `#F0F0F3`
    },
    primary: {
      main: `#8D8D8DE6`
    },
    secondary: {
      light: `#B3E5FC`,
      main: `#81D4FA`,
      dark: `#2AB6F6`,
      contrastText: `#202020`
    },
    contrastThreshold: 5,
    tonalOffset: 0.2,
    text: {
      primary: `#202020`,
      secondary: `#646465`,
      disabled: `#818182`
    }
  },
  typography: {
    fontFamily: ['Asap'].join(','),
    body1: {
      color: `#202020`
    },
    body2: {
      color: `#202020`
    },
    caption: {
      color: `#4E4E4E`
    },
    h1: {
      color: `#202020`
    },
    h2: {
      color: `#202020`
    },
    h3: {
      color: `#4E4E4E`
    },
    h4: {
      color: `#4E4E4E`
    },
    h5: {
      color: `#4E4E4E`
    },
    h6: {
      color: `#4E4E4E`
    }
  }
})

export default OrbThemeLight
