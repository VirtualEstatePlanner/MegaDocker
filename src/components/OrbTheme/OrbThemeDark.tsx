import { createMuiTheme, Theme } from '@material-ui/core'
import AccordionExpandedStyleDark from '../../stylesDark/AccordionExpandedStyleDark'
import AccordionRootStyleDark from '../../stylesDark/AccordionRootStyleDark'
import AlertRootStyleDark from '../../stylesDark/AlertRootStyleDark'
import AppBarRootStyleDark from '../../stylesDark/AppBarRootStyleDark'
//import Arciform from '../../fonts/Arciform.woff2'
import AutocompleteOptionStyleDark from '../../stylesDark/AutocompleteOptionStyleDark'
import AutocompletePaperStyleDark from '../../stylesDark/AutocompletePaperStyleDark'
import BottomNavigationActionRootStyleDark from '../../stylesDark/BottomNavigationActionRootStyleDark'
import BottomNavigationRootStyleDark from '../../stylesDark/BottomNavigationRootStyleDark'
import ButtonIconRootStyleDark from '../../stylesDark/ButtonIconRootStyleDark'
import ButtonPrimaryStyleDark from '../../stylesDark/ButtonPrimaryStyleDark'
import ButtonRootStyleDark from '../../stylesDark/ButtonRootStyleDark'
import ButtonSecondaryStyleDark from '../../stylesDark/ButtonSecondaryStyleDark'
import CardRootStyleDark from '../../stylesDark/CardRootStyleDark'
import CheckboxRootStyleDark from '../../stylesDark/CheckboxRootStyleDark'
import CircularProgressRootStyleDark from '../../stylesDark/CircularProgressRootStyleDark'
import CircularProgressPrimaryStyleDark from '../../stylesDark/CircularProgressPrimaryStyleDark'
import ContainerRootStyleDark from '../../stylesDark/ContainerRootStyleDark'
import DialogRootStyleDark from '../../stylesDark/DialogRootStyleDark'
import DialogPaperStyleDark from '../../stylesDark/DialogPaperStyleDark'
import DrawerRootStyleDark from '../../stylesDark/DrawerRootStyleDark'
import DrawerPaperStyleDark from '../../stylesDark/DrawerPaperStyleDark'
import FabRootStyleDark from '../../stylesDark/FabRootStyleDark'
import FormControlRootStyleDark from '../../stylesDark/FormControlRootStyleDark'
import FormControlLabelRootStyleDark from '../../stylesDark/FormControlLabelRootStyleDark'
import FormHelperTextRootStyleDark from '../../stylesDark/FormHelperTextRootStyleDark'
import IconRootStyleDark from '../../stylesDark/IconRootStyleDark'
import ImageListRootStyleDark from '../../stylesDark/ImageListRootStyleDark'
import ImageListItemBarRootStyleDark from '../../stylesDark/ImageListItemBarRootStyleDark'
import InputAdornmentRootStyleDark from '../../stylesDark/InputAdornmentRootStyleDark'
import InputBaseInputStyleDark from '../../stylesDark/InputBaseInputStyleDark'
import InputBaseRootStyleDark from '../../stylesDark/InputBaseRootStyleDark'
import InputLabelRootStyleDark from '../../stylesDark/InputLabelRootStyleDark'
import InputOutlinedRootStyleDark from '../../stylesDark/InputOutlinedRootStyleDark'
import ListItemRootStyleDark from '../../stylesDark/ListItemRootStyleDark'
import ListItemSelectedStyleDark from '../../stylesDark/ListItemSelectedStyleDark'
import ListRootStyleDark from '../../stylesDark/ListRootStyleDark'
import ListSubheaderStyleDark from '../../stylesDark/ListSubheaderStyleDark'
import MenuRootStyleDark from '../../stylesDark/MenuRootStyleDark'
import MobileStepperDotActiveStyleDark from '../../stylesDark/MobileStepperDotActiveStyleDark'
import MobileStepperDotStyleDark from '../../stylesDark/MobileStepperDotStyleDark'
import MobileStepperProgressStyleDark from '../../stylesDark/MobileStepperProgressStyleDark'
import MontserratFont from '../../fonts/Montserrat'
import NativeSelectRootStyleDark from '../../stylesDark/NativeSelectRootStyleDark'
import OutlinedInputMultilineStyleDark from '../../stylesDark/OutlinedInputMultilineStyleDark'
import PaperRootStyleDark from '../../stylesDark/PaperRootStyleDark'
import RadioRootStyleDark from '../../stylesDark/RadioRootStyleDark'
import SelectRootStyleDark from '../../stylesDark/SelectRootStyleDark'
import SelectMenuRootStyleDark from '../../stylesDark/SelectMenuRootStyleDark'
import SliderRootStyleDark from '../../stylesDark/SliderRootStyleDark'
import SliderMarkActiveStyleDark from '../../stylesDark/SliderMarkActiveStyleDark'
import SliderMarkStyleDark from '../../stylesDark/SliderMarkStyleDark'
import SliderRailStyleDark from '../../stylesDark/SliderRailStyleDark'
import SliderThumbStyleDark from '../../stylesDark/SliderThumbStyleDark'
import SliderTrackStyleDark from '../../stylesDark/SliderTrackStyleDark'
import SliderValueLabelStyleDark from '../../stylesDark/SliderValueLabelStyleDark'
import SpeedDialIconRootStyleDark from '../../stylesDark/SpeedDialIconRootStyleDark'
import SpeedDialFabStyleDark from '../../stylesDark/SpeedDialFabStyleDark'
import StepIconActiveStyleDark from '../../stylesDark/StepIconActiveStyleDark'
import StepIconCompletedStyleDark from '../../stylesDark/StepIconCompletedStyleDark'
import StepIconRootStyleDark from '../../stylesDark/StepIconRootStyleDark'
import SwitchRootStyleDark from '../../stylesDark/SwitchRootStyleDark'
import TabLabelIconStyleDark from '../../stylesDark/TabLabelIconStyleDark'
import TablePaginationItemRootStyleDark from '../../stylesDark/TablePaginationItemRootStyleDark'
import TablePaginationRootStyleDark from '../../stylesDark/TablePaginationItemRootStyleDark'
import TablePaginationSelectRootStyleDark from '../../stylesDark/TablePaginationSelectRootStyleDark'
import TabRootStyleDark from '../../stylesDark/TabRootStyleDark'
import TabSelectedStyleDark from '../../stylesDark/TabSelectedStyleDark'
import TabsRootStyleDark from '../../stylesDark/TabsRootStyleDark'
import TextAreaRootStyleDark from '../../stylesDark/TextAreaRootStyleDark'
import ToggleButtonGroupRootStyleDark from '../../stylesDark/ToggleButtonGroupRootStyleDark'
import ToggleButtonRootStyleDark from '../../stylesDark/ToggleButtonRootStyleDark'
import TouchRippleRootStyleDark from '../../stylesDark/TouchRippleRootStyleDark'

const OrbThemeDark: Theme = createMuiTheme({
  components: {
    MuiAccordion: {
      styleOverrides: {
        root: AccordionRootStyleDark,
        expanded: AccordionExpandedStyleDark
      }
    },
    MuiAlert: {
      styleOverrides: {
        root: AlertRootStyleDark
      }
    },
    MuiAppBar: {
      styleOverrides: {
        root: AppBarRootStyleDark
      }
    },
    MuiAutocomplete: {
      styleOverrides: {
        paper: AutocompletePaperStyleDark,
        option: AutocompleteOptionStyleDark,
        groupLabel: ListSubheaderStyleDark
      }
    },
    MuiBottomNavigation: {
      styleOverrides: {
        root: BottomNavigationRootStyleDark
      }
    },
    MuiBottomNavigationAction: {
      styleOverrides: {
        root: BottomNavigationActionRootStyleDark
      }
    },
    MuiButton: {
      styleOverrides: {
        root: ButtonRootStyleDark,
        containedPrimary: ButtonPrimaryStyleDark,
        containedSecondary: ButtonSecondaryStyleDark
      }
    },
    MuiCard: {
      styleOverrides: {
        root: CardRootStyleDark
      }
    },
    MuiCheckbox: {
      styleOverrides: {
        root: CheckboxRootStyleDark
      }
    },
    MuiChip: {
      styleOverrides: {
        root: ButtonPrimaryStyleDark
      }
    },
    MuiCircularProgress: {
      styleOverrides: {
        root: CircularProgressRootStyleDark,
        colorPrimary: CircularProgressPrimaryStyleDark
      }
    },
    MuiContainer: {
      styleOverrides: {
        root: ContainerRootStyleDark
      }
    },
    MuiCssBaseline: {
      styleOverrides: {
        '@font-face': MontserratFont
      }
    },
    MuiDialog: {
      styleOverrides: {
        root: DialogRootStyleDark,
        paper: DialogPaperStyleDark
      }
    },
    MuiDrawer: {
      styleOverrides: {
        root: DrawerRootStyleDark,
        paper: DrawerPaperStyleDark
      }
    },
    MuiFab: {
      styleOverrides: {
        root: FabRootStyleDark
      }
    },
    MuiFormControl: {
      styleOverrides: {
        root: FormControlRootStyleDark
      }
    },
    MuiFormControlLabel: {
      styleOverrides: {
        root: FormControlLabelRootStyleDark
      }
    },
    MuiFormHelperText: {
      styleOverrides: {
        root: FormHelperTextRootStyleDark
      }
    },
    MuiIconButton: {
      styleOverrides: {
        root: ButtonIconRootStyleDark
      }
    },
    MuiIcon: {
      styleOverrides: {
        root: IconRootStyleDark
      }
    },
    MuiImageList: {
      styleOverrides: {
        root: ImageListRootStyleDark
      }
    },
    MuiImageListItemBar: {
      styleOverrides: {
        root: ImageListItemBarRootStyleDark
      }
    },
    MuiInputAdornment: {
      styleOverrides: {
        root: InputAdornmentRootStyleDark
      }
    },
    MuiInputBase: {
      styleOverrides: {
        root: InputBaseRootStyleDark,
        input: InputBaseInputStyleDark
      }
    },
    MuiInputLabel: {
      styleOverrides: {
        root: InputLabelRootStyleDark
      }
    },
    MuiList: {
      styleOverrides: {
        root: ListRootStyleDark,
        subheader: ListSubheaderStyleDark
      }
    },
    MuiListItem: {
      styleOverrides: {
        root: ListItemRootStyleDark,
        selected: ListItemSelectedStyleDark
      }
    },
    MuiMenu: {
      styleOverrides: {
        paper: MenuRootStyleDark
      }
    },
    MuiMobileStepper: {
      styleOverrides: {
        dot: MobileStepperDotStyleDark,
        dotActive: MobileStepperDotActiveStyleDark,
        progress: MobileStepperProgressStyleDark
      }
    },
    MuiNativeSelect: {
      styleOverrides: {
        root: NativeSelectRootStyleDark,
        filled: NativeSelectRootStyleDark,
        select: NativeSelectRootStyleDark,
        outlined: NativeSelectRootStyleDark
      }
    },
    MuiOutlinedInput: {
      styleOverrides: {
        root: InputOutlinedRootStyleDark,
        multiline: OutlinedInputMultilineStyleDark
      }
    },
    MuiPaginationItem: {
      styleOverrides: {
        root: TablePaginationItemRootStyleDark
      }
    },
    MuiPaper: {
      styleOverrides: {
        root: PaperRootStyleDark
      }
    },
    MuiPopover: {
      styleOverrides: {
        paper: MenuRootStyleDark
      }
    },
    MuiRadio: {
      styleOverrides: {
        root: RadioRootStyleDark
      }
    },
    MuiSelect: {
      styleOverrides: {
        root: SelectRootStyleDark,
        selectMenu: SelectMenuRootStyleDark
      }
    },
    MuiSlider: {
      styleOverrides: {
        root: SliderRootStyleDark,
        thumb: SliderThumbStyleDark,
        valueLabel: SliderValueLabelStyleDark,
        track: SliderTrackStyleDark,
        rail: SliderRailStyleDark,
        mark: SliderMarkStyleDark,
        markActive: SliderMarkActiveStyleDark
      }
    },
    MuiSpeedDial: {
      styleOverrides: {
        root: SpeedDialIconRootStyleDark,
        fab: SpeedDialFabStyleDark
      }
    },
    MuiStepIcon: {
      styleOverrides: {
        root: StepIconRootStyleDark,
        active: StepIconActiveStyleDark,
        completed: StepIconCompletedStyleDark
      }
    },
    MuiSwitch: {
      styleOverrides: {
        root: SwitchRootStyleDark
      }
    },
    MuiTab: {
      styleOverrides: {
        root: TabRootStyleDark,
        selected: TabSelectedStyleDark,
        labelIcon: TabLabelIconStyleDark
      }
    },
    MuiTabs: {
      styleOverrides: {
        root: TabsRootStyleDark,
        indicator: TabSelectedStyleDark
      }
    },
    MuiTablePagination: {
      styleOverrides: {
        root: TablePaginationRootStyleDark,
        selectRoot: TablePaginationSelectRootStyleDark
      }
    },
    MuiTextField: {
      styleOverrides: {
        root: TextAreaRootStyleDark
      }
    },
    MuiToggleButton: {
      styleOverrides: {
        root: ToggleButtonRootStyleDark
      }
    },
    MuiToggleButtonGroup: {
      styleOverrides: {
        root: ToggleButtonGroupRootStyleDark
      }
    },
    MuiTouchRipple: {
      styleOverrides: {
        root: TouchRippleRootStyleDark
      }
    }
  },
  palette: {
    mode: 'dark',
    background: {
      default: `#131313`,
      paper: `#131313`
    },
    primary: {
      main: `#616161`,
      contrastText: `#e0e0e0`
    },
    secondary: {
      main: `#2196f3`,
      contrastText: `#ffffff`
    },
    contrastThreshold: 3,
    tonalOffset: 0.2,
    text: {
      primary: `#e0e0e0`,
      secondary: `#C1C1C1`,
      disabled: `#616161`
    }
  },
  typography: {
    fontFamily: ['Montserrat', 'Arciform'].join(','),
    body1: {
      color: `#C1C1C1`
    },
    body2: {
      color: `#C1C1C1`
    },
    caption: {
      color: `#9A9A9A`
    },
    h1: {
      color: `#FFFFFF`
    },
    h2: {
      color: `#FFFFFF`
    },
    h3: {
      color: `#E5E5E5`
    },
    h4: {
      color: `#E5E5E5`
    },
    h5: {
      color: `#E5E5E5`
    },
    h6: {
      color: `#E5E5E5`
    }
  }
})

export default OrbThemeDark
