import * as React from 'react'
import Slider from '@material-ui/core/Slider'
import { experimentalStyled as styled } from '@material-ui/core/styles'
import Typography from '@material-ui/core/Typography'
import Tooltip from '@material-ui/core/Tooltip'

const Root = styled('div')(
  ({ theme }) => `
  width: calc(300px + ${theme.spacing(6)});
`
)

const Separator = styled('div')(
  ({ theme }) => `
  height: ${theme.spacing(3)};
`
)

interface Props {
  children: React.ReactElement
  value: number
}

function ValueLabelComponent(props: Props) {
  const { children, value } = props

  return (
    <Tooltip enterTouchDelay={0} placement='top' title={value}>
      {children}
    </Tooltip>
  )
}

export default function CustomizedSlider() {
  return (
    <Root>
      <Typography gutterBottom>Slider with tooltip value label</Typography>
      <Slider
        valueLabelDisplay='auto'
        components={{
          ValueLabel: ValueLabelComponent
        }}
        aria-label='slider with tooltip label'
        defaultValue={20}
      />
      <Separator />
      <Typography gutterBottom>Airbnb</Typography>
      <Slider
        valueLabelDisplay='auto'
        components={{
          ValueLabel: ValueLabelComponent
        }}
        getAriaLabel={(index) =>
          index === 0 ? 'Minimum price' : 'Maximum price'
        }
        defaultValue={[20, 40]}
      />
    </Root>
  )
}
