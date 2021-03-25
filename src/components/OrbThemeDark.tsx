import { createMuiTheme, Theme } from '@material-ui/core'
import { grey } from '@material-ui/core/colors'
import AsapFont from '../fonts/Asap'
import AccordionExpandedStyleDark from '../styles/dark/AccordionExpandedStyleDark'
import AccordionRootStyleDark from '../styles/dark/AccordionRootStyleDark'
import AlertRootStyleDark from '../styles/dark/AlertRootStyleDark'
import AppBarRootStyleDark from '../styles/dark/AppBarRootStyleDark'
import AutocompleteOptionStyleDark from '../styles/dark/AutocompleteOptionStyleDark'
import AutocompletePaperStyleDark from '../styles/dark/AutocompletePaperStyleDark'
import BottomNavigationActionRootStyleDark from '../styles/dark/BottomNavigationActionRootStyleDark'
import BottomNavigationRootStyleDark from '../styles/dark/BottomNavigationRootStyleDark'
import ButtonIconInheritStyleDark from '../styles/dark/ButtonIconInheritStyleDark'
import ButtonIconRootStyleDark from '../styles/dark/ButtonIconRootStyleDark'
import ButtonPrimaryStyleDark from '../styles/dark/ButtonPrimaryStyleDark'
import ButtonRootStyleDark from '../styles/dark/ButtonRootStyleDark'
import ButtonSecondaryStyleDark from '../styles/dark/ButtonSecondaryStyleDark'
import CardRootStyleDark from '../styles/dark/CardRootStyleDark'
import CheckboxRootStyleDark from '../styles/dark/CheckboxRootStyleDark'
import CircularProgressPrimaryStyleDark from '../styles/dark/CircularProgressPrimaryStyleDark'
import CircularProgressRootStyleDark from '../styles/dark/CircularProgressRootStyleDark'
import ContainerRootStyleDark from '../styles/dark/ContainerRootStyleDark'
import DialogPaperStyleDark from '../styles/dark/DialogPaperStyleDark'
import DialogRootStyleDark from '../styles/dark/DialogRootStyleDark'
import DrawerPaperStyleDark from '../styles/dark/DrawerPaperStyleDark'
import DrawerRootStyleDark from '../styles/dark/DrawerRootStyleDark'
import FabRootStyleDark from '../styles/dark/FabRootStyleDark'
import FormControlLabelRootStyleDark from '../styles/dark/FormControlLabelRootStyleDark'
import FormControlRootStyleDark from '../styles/dark/FormControlRootStyleDark'
import FormHelperTextRootStyleDark from '../styles/dark/FormHelperTextRootStyleDark'
import IconRootStyleDark from '../styles/dark/IconRootStyleDark'
import ImageListItemBarRootStyleDark from '../styles/dark/ImageListItemBarRootStyleDark'
import ImageListRootStyleDark from '../styles/dark/ImageListRootStyleDark'
import InputAdornmentRootStyleDark from '../styles/dark/InputAdornmentRootStyleDark'
import InputBaseRootStyleDark from '../styles/dark/InputBaseRootStyleDark'
import InputLabelRootStyleDark from '../styles/dark/InputLabelRootStyleDark'
import InputOutlinedRootStyleDark from '../styles/dark/InputOutlinedRootStyleDark'
import ListItemRootStyleDark from '../styles/dark/ListItemRootStyleDark'
import ListRootStyleDark from '../styles/dark/ListRootStyleDark'
import MenuRootStyleDark from '../styles/dark/MenuRootStyleDark'
import MobileStepperDotActiveStyleDark from '../styles/dark/MobileStepperDotActiveStyleDark'
import MobileStepperDotStyleDark from '../styles/dark/MobileStepperDotStyleDark'
import MobileStepperProgressStyleDark from '../styles/dark/MobileStepperProgressStyleDark'
import NativeSelectRootStyleDark from '../styles/dark/NativeSelectRootStyleDark'
import OutlinedInputMultilineStyleDark from '../styles/dark/OutlinedInputMultilineStyleDark'
import PaletteBackgroundStyleDark from '../styles/dark/PaletteBackgroundStyleDark'
import PalettePrimaryStyleDark from '../styles/dark/PalettePrimaryStyleDark'
import PaletteSecondaryStyleDark from '../styles/dark/PaletteSecondaryStyleDark'
import PaperRootStyleDark from '../styles/dark/PaperRootStyleDark'
import RadioRootStyleDark from '../styles/dark/RadioRootStyleDark'
import SelectMenuRootStyleDark from '../styles/dark/SelectMenuRootStyleDark'
import SelectRootStyleDark from '../styles/dark/SelectRootStyleDark'
import SliderMarkActiveStyleDark from '../styles/dark/SliderMarkActiveStyleDark'
import SliderMarkStyleDark from '../styles/dark/SliderMarkStyleDark'
import SliderRailStyleDark from '../styles/dark/SliderRailStyleDark'
import SliderRootStyleDark from '../styles/dark/SliderRootStyleDark'
import SliderThumbStyleDark from '../styles/dark/SliderThumbStyleDark'
import SliderTrackStyleDark from '../styles/dark/SliderTrackStyleDark'
import SliderValueLabelStyleDark from '../styles/dark/SliderValueLabelStyleDark'
import SpeedDialIconRootStyleDark from '../styles/dark/SpeedDialIconRootStyleDark'
import StepIconActiveStyleDark from '../styles/dark/StepIconActiveStyleDark'
import StepIconCompletedStyleDark from '../styles/dark/StepIconCompletedStyleDark'
import StepIconRootStyleDark from '../styles/dark/StepIconRootStyleDark'
import SwitchRootStyleDark from '../styles/dark/SwitchRootStyleDark'
import TabLabelIconStyleDark from '../styles/dark/TabLabelIconStyleDark'
import TablePaginationRootStyleDark from '../styles/dark/TablePaginationItemRootStyleDark'
import TablePaginationItemRootStyleDark from '../styles/dark/TablePaginationItemRootStyleDark'
import TablePaginationSelectRootStyleDark from '../styles/dark/TablePaginationSelectRootStyleDark'
import TabRootStyleDark from '../styles/dark/TabRootStyleDark'
import TabSelectedStyleDark from '../styles/dark/TabSelectedStyleDark'
import TabsRootStyleDark from '../styles/dark/TabsRootStyleDark'
import TextAreaRootStyleDark from '../styles/dark/TextAreaRootStyleDark'
import ToggleButtonGroupRootStyleDark from '../styles/dark/ToggleButtonGroupRootStyleDark'
import ToggleButtonRootStyleDark from '../styles/dark/ToggleButtonRootStyleDark'
import TouchRippleRootStyleDark from '../styles/dark/TouchRippleRootStyleDark'


export const OrbThemeDark: Theme = createMuiTheme({
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
        option: AutocompleteOptionStyleDark
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
        '@global': {
          '@font-face': AsapFont
        }
      }
    },
    MuiDialog: {
      styleOverrides: {
        paper: DialogPaperStyleDark,
        root: DialogRootStyleDark
      }
    },
    MuiDrawer: {
      styleOverrides: {
        paper: DrawerPaperStyleDark,
        root: DrawerRootStyleDark
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
        root: ButtonIconRootStyleDark,
        colorInherit: ButtonIconInheritStyleDark,
        colorPrimary: ButtonPrimaryStyleDark,
        colorSecondary: ButtonSecondaryStyleDark
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
        root: InputBaseRootStyleDark
      }
    },
    MuiInputLabel: {
      styleOverrides: {
        root: InputLabelRootStyleDark
      }
    },
    MuiList: {
      styleOverrides: {
        root: ListRootStyleDark
      }
    },
    MuiListItem: {
      styleOverrides: {
        root: ListItemRootStyleDark
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
        fab: ButtonPrimaryStyleDark
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
    background: PaletteBackgroundStyleDark,
    primary: PalettePrimaryStyleDark,
    secondary: PaletteSecondaryStyleDark,
    text: {
      primary: grey[300],
      secondary: grey[500],
      disabled: grey[700]
    }
  },
  typography: {
    fontFamily: 'Asap'
  }
})
