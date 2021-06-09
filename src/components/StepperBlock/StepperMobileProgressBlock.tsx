import * as React from 'react'
import { Button, MobileStepper, makeStyles, useTheme } from '@material-ui/core'
import KeyboardArrowLeft from '@material-ui/icons/KeyboardArrowLeft'
import KeyboardArrowRight from '@material-ui/icons/KeyboardArrowRight'

const useStyles = makeStyles({
  root: {
    maxWidth: 400,
    flexGrow: 1
  }
})

const StepperMobileProgressBlock: React.FC = (): JSX.Element => {
  const classes = useStyles()
  const theme = useTheme()
  const [activeStep, setActiveStep] = React.useState(0)

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1)
  }

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1)
  }

  return (
    <MobileStepper
      variant='progress'
      steps={6}
      position='static'
      activeStep={activeStep}
      className={classes.root}
      nextButton={
        <Button
          variant='contained'
          color='secondary'
          size='small'
          onClick={handleNext}
          disabled={activeStep === 5}>
          Next
          {theme.direction === 'rtl' ? (
            <KeyboardArrowLeft />
          ) : (
            <KeyboardArrowRight />
          )}
        </Button>
      }
      backButton={
        <Button
          color='inherit'
          size='small'
          onClick={handleBack}
          disabled={activeStep === 0}>
          {theme.direction === 'rtl' ? (
            <KeyboardArrowRight />
          ) : (
            <KeyboardArrowLeft />
          )}
          Back
        </Button>
      }
    />
  )
}

export default StepperMobileProgressBlock
