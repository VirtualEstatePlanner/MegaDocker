import { createMuiTheme, Theme } from '@material-ui/core'
import AsapFont from '../fonts/Asap'
import AccordionExpandedStyle from '../styles/light/AccordionExpandedStyle'
import AccordionRootStyle from '../styles/light/AccordionRootStyle'
import AlertRootStyle from '../styles/light/AlertRootStyle'
import AppBarRootStyle from '../styles/light/AppBarRootStyle'
import AutocompleteOptionStyle from '../styles/light/AutocompleteOptionStyle'
import AutocompletePaperStyle from '../styles/light/AutocompleteRootStyle'
import BottomNavigationActionRootStyle from '../styles/light/BottomNavigationActionRootStyle'
import BottomNavigationRootStyle from '../styles/light/BottomNavigationRootStyle'
import ButtonIconInheritStyle from '../styles/light/ButtonIconInheritStyle'
import ButtonIconRootStyle from '../styles/light/ButtonIconRootStyle'
import ButtonPrimaryStyle from '../styles/light/ButtonPrimaryStyle'
import ButtonRootStyle from '../styles/light/ButtonRootStyle'
import ButtonSecondaryStyle from '../styles/light/ButtonSecondaryStyle'
import CardRootStyle from '../styles/light/CardRootStyle'
import CheckboxRootStyle from '../styles/light/CheckboxRootStyle'
import CircularProgressPrimaryStyle from '../styles/light/CircularProgressPrimaryStyle'
import CircularProgressRootStyle from '../styles/light/CircularProgressRootStyle'
import ContainerRootStyle from '../styles/light/ContainerRootStyle'
import DialogPaperStyle from '../styles/light/DialogPaperStyle'
import DialogRootStyle from '../styles/light/DialogRootStyle'
import DrawerPaperStyle from '../styles/light/DrawerPaperStyle'
import DrawerRootStyle from '../styles/light/DrawerRootStyle'
import FabRootStyle from '../styles/light/FabRootStyle'
import FormControlLabelRootStyle from '../styles/light/FormControlLabelRootStyle'
import FormControlRootStyle from '../styles/light/FormControlRootStyle'
import FormHelperTextRootStyle from '../styles/light/FormHelperTextRootStyle'
import IconRootStyle from '../styles/light/IconRootStyle'
import ImageListItemBarRootStyle from '../styles/light/ImageListItemBarRootStyle'
import ImageListRootStyle from '../styles/light/ImageListRootStyle'
import InputAdornmentRootStyle from '../styles/light/InputAdornmentRootStyle'
import InputBaseRootStyle from '../styles/light/InputBaseRootStyle'
import InputLabelRootStyle from '../styles/light/InputLabelRootStyle'
import InputOutlinedRootStyle from '../styles/light/InputOutlinedRootStyle'
import ListItemRootStyle from '../styles/light/ListItemRootStyle'
import ListRootStyle from '../styles/light/ListRootStyle'
import MenuRootStyle from '../styles/light/MenuRootStyle'
import MobileStepperDotActiveStyle from '../styles/light/MobileStepperDotActiveStyle'
import MobileStepperDotStyle from '../styles/light/MobileStepperDotStyle'
import MobileStepperProgressStyle from '../styles/light/MobileStepperProgressStyle'
import NativeSelectRootStyle from '../styles/light/NativeSelectRootStyle'
import OutlinedInputMultilineStyle from '../styles/light/OutlinedInputMultilineStyle'
import PaletteBackgroundStyle from '../styles/light/PaletteBackgroundStyle'
import PalettePrimaryStyle from '../styles/light/PalettePrimaryStyle'
import PaletteSecondaryStyle from '../styles/light/PaletteSecondaryStyle'
import PaperRootStyle from '../styles/light/PaperRootStyle'
import RadioRootStyle from '../styles/light/RadioRootStyle'
import SelectMenuRootStyle from '../styles/light/SelectMenuRootStyle'
import SelectRootStyle from '../styles/light/SelectRootStyle'
import SliderMarkActiveStyle from '../styles/light/SliderMarkActiveStyle'
import SliderMarkStyle from '../styles/light/SliderMarkStyle'
import SliderRailStyle from '../styles/light/SliderRailStyle'
import SliderRootStyle from '../styles/light/SliderRootStyle'
import SliderThumbStyle from '../styles/light/SliderThumbStyle'
import SliderTrackStyle from '../styles/light/SliderTrackStyle'
import SliderValueLabelStyle from '../styles/light/SliderValueLabelStyle'
import SpeedDialIconRootStyle from '../styles/light/SpeedDialIconRootStyle'
import StepIconActiveStyle from '../styles/light/StepIconActiveStyle'
import StepIconCompletedStyle from '../styles/light/StepIconCompletedStyle'
import StepIconRootStyle from '../styles/light/StepIconRootStyle'
import SwitchRootStyle from '../styles/light/SwitchRootStyle'
import TabLabelIconStyle from '../styles/light/TabLabelIconStyle'
import TablePaginationItemRootStyle from '../styles/light/TablePaginationItemRootStyle'
import TablePaginationSelectRootStyle from '../styles/light/TablePaginationSelectRootStyle'
import TableRowRootStyle from '../styles/light/TableRowRootStyle'
import TableRowSelectedStyle from '../styles/light/TableRowSelectedStyle'
import TabRootStyle from '../styles/light/TabRootStyle'
import TabSelectedStyle from '../styles/light/TabSelectedStyle'
import TabsRootStyle from '../styles/light/TabsRootStyle'
import TextFieldRootStyle from '../styles/light/TextFieldRootStyle'
import ToggleButtonGroupRootStyle from '../styles/light/ToggleButtonGroupRootStyle'
import ToggleButtonRootStyle from '../styles/light/ToggleButtonRootStyle'


export const OrbThemeLight: Theme = createMuiTheme({
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
        option: AutocompleteOptionStyle
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
        '@global': {
          '@font-face': AsapFont
        }
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
        root: ButtonIconRootStyle,
        colorInherit: ButtonIconInheritStyle,
        colorPrimary: ButtonPrimaryStyle,
        colorSecondary: ButtonSecondaryStyle
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
        root: InputBaseRootStyle
      }
    },
    MuiInputLabel: {
      styleOverrides: {
        root: InputLabelRootStyle
      }
    },
    MuiList: {
      styleOverrides: {
        root: ListRootStyle
      }
    },
    MuiListItem: {
      styleOverrides: {
        root: ListItemRootStyle
      }
    },
    MuiMenu: {
      styleOverrides: {
        paper: MenuRootStyle
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
        outlined: NativeSelectRootStyle
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
        selectMenu: SelectMenuRootStyle
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
        root: SpeedDialIconRootStyle,
        fab: ButtonPrimaryStyle
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
        root: TablePaginationItemRootStyle,
        selectRoot: TablePaginationSelectRootStyle
      }
    },
    MuiTableRow: {
      styleOverrides: {
        root: TableRowRootStyle,
        selected: TableRowSelectedStyle
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
    background: PaletteBackgroundStyle,
    primary: PalettePrimaryStyle,
    secondary: PaletteSecondaryStyle,
    action: {
      selected: `#C0C0C2`
    },
    text: {
      primary: `#000000`,
      secondary: `#646465`,
      disabled: `#818182`
    }
  },
  typography: {
    fontFamily: 'Asap'
  }
})
