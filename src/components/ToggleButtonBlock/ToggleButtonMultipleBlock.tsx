import * as React from 'react'
import { ToggleButton, ToggleButtonGroup } from '@material-ui/core'
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown'
import FormatBoldIcon from '@material-ui/icons/FormatBold'
import FormatColorFillIcon from '@material-ui/icons/FormatColorFill'
import FormatItalicIcon from '@material-ui/icons/FormatItalic'
import FormatUnderlinedIcon from '@material-ui/icons/FormatUnderlined'

const ToggleButtonMultipleBlock: React.FC = (): JSX.Element => {
  const [formats, setFormats] = React.useState(() => ['bold', 'italic'])

  const handleFormat = (
    event: React.MouseEvent<HTMLElement>,
    newFormats: string[]
  ) => {
    setFormats(newFormats)
  }

  return (
    <ToggleButtonGroup
      value={formats}
      onChange={handleFormat}
      aria-label='text formatting'>
      <ToggleButton value='bold' aria-label='bold'>
        <FormatBoldIcon />
      </ToggleButton>
      <ToggleButton value='italic' aria-label='italic'>
        <FormatItalicIcon />
      </ToggleButton>
      <ToggleButton value='underlined' aria-label='underlined'>
        <FormatUnderlinedIcon />
      </ToggleButton>
      <ToggleButton value='color' aria-label='color' disabled>
        <FormatColorFillIcon />
        <ArrowDropDownIcon />
      </ToggleButton>
    </ToggleButtonGroup>
  )
}

export default ToggleButtonMultipleBlock
