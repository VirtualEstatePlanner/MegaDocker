import * as React from 'react'
import { ToggleButton, ToggleButtonGroup } from '@material-ui/core'
import FormatAlignCenterIcon from '@material-ui/icons/FormatAlignCenter'
import FormatAlignJustifyIcon from '@material-ui/icons/FormatAlignJustify'
import FormatAlignLeftIcon from '@material-ui/icons/FormatAlignLeft'
import FormatAlignRightIcon from '@material-ui/icons/FormatAlignRight'

const ToggleButtonExclusiveBlock: React.FC = (): JSX.Element => {
  const [alignment, setAlignment] = React.useState<string | null>('left')

  const handleAlignment = (
    event: React.MouseEvent<HTMLElement>,
    newAlignment: string | null
  ) => {
    setAlignment(newAlignment)
  }

  return (
    <ToggleButtonGroup
      value={alignment}
      exclusive
      onChange={handleAlignment}
      aria-label='text alignment'>
      <ToggleButton value='left' aria-label='left aligned'>
        <FormatAlignLeftIcon />
      </ToggleButton>
      <ToggleButton value='center' aria-label='centered'>
        <FormatAlignCenterIcon />
      </ToggleButton>
      <ToggleButton value='right' aria-label='right aligned'>
        <FormatAlignRightIcon />
      </ToggleButton>
      <ToggleButton value='justify' aria-label='justified' disabled>
        <FormatAlignJustifyIcon />
      </ToggleButton>
    </ToggleButtonGroup>
  )
}

export default ToggleButtonExclusiveBlock
