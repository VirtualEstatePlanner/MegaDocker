import * as React from 'react'
import {
  Button,
  Paper,
  Step,
  StepLabel,
  StepContent,
  Stepper,
  Theme,
  Typography,
  createStyles,
  makeStyles
} from '@material-ui/core'

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      maxWidth: 400
    },
    button: {
      marginTop: theme.spacing(1),
      marginRight: theme.spacing(1)
    },
    actionsContainer: {
      marginBottom: theme.spacing(2)
    },
    resetContainer: {
      padding: theme.spacing(3)
    }
  })
)

const steps: { label: string; description: string }[] = [
  {
    label: 'Select campaign settings',
    description: `For each ad campaign that you create, you can control how much
              you're willing to spend on clicks and conversions, which networks
              and geographical locations you want your ads to show on, and more.`
  },
  {
    label: 'Create an ad group',
    description:
      'An ad group contains one or more ads which target a shared set of keywords.'
  },
  {
    label: 'Create an ad',
    description: `Try out different ad text to see what brings in the most customers,
              and learn how to enhance your ads using features like ad extensions.
              If you run into any problems with your ads, find out how to tell if
              they're running and how to resolve approval issues.`
  }
]

const StepperLinearVerticalBlock: React.FC = (): JSX.Element => {
  const classes = useStyles()
  const [activeStep, setActiveStep] = React.useState(0)

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1)
  }

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1)
  }

  const handleReset = () => {
    setActiveStep(0)
  }

  return (
    <div className={classes.root}>
      <Stepper activeStep={activeStep} orientation='vertical'>
        {steps.map((step, index) => (
          <Step key={step.label}>
            <StepLabel
              optional={
                index === 2 ? (
                  <Typography variant='caption'>Last step</Typography>
                ) : null
              }>
              {step.label}
            </StepLabel>
            <StepContent>
              <Typography>{step.description}</Typography>
              <div className={classes.actionsContainer}>
                <div>
                  <Button
                    variant='contained'
                    color='secondary'
                    onClick={handleNext}
                    className={classes.button}>
                    {activeStep === steps.length - 1 ? 'Finish' : 'Continue'}
                  </Button>
                  <Button
                    color='inherit'
                    disabled={activeStep === 0}
                    onClick={handleBack}
                    className={classes.button}>
                    Back
                  </Button>
                </div>
              </div>
            </StepContent>
          </Step>
        ))}
      </Stepper>
      {activeStep === steps.length && (
        <Paper square elevation={0} className={classes.resetContainer}>
          <Typography>All steps completed - you&apos;re finished</Typography>
          <Button
            variant='contained'
            color='primary'
            onClick={handleReset}
            className={classes.button}>
            Reset
          </Button>
        </Paper>
      )}
    </div>
  )
}

export default StepperLinearVerticalBlock
