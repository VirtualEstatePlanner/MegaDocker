import * as React from 'react'
import {
  Badge,
  ButtonGroup,
  Button,
  FormControlLabel,
  Switch,
  Theme,
  createStyles,
  makeStyles
} from '@material-ui/core'
import AddIcon from '@material-ui/icons/Add'
import RemoveIcon from '@material-ui/icons/Remove'
import MailIcon from '@material-ui/icons/Mail'

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      display: 'flex',
      flexDirection: 'column',
      '& > *': {
        marginBottom: theme.spacing(2)
      },
      '& .MuiBadge-root': {
        marginRight: theme.spacing(4)
      }
    }
  })
)

const BadgeBlock: React.FC = (): JSX.Element => {
  const classes = useStyles()
  const [count, setCount] = React.useState(1)
  const [invisible, setInvisible] = React.useState(false)

  const handleBadgeVisibility = () => {
    setInvisible(!invisible)
  }

  return (
    <div className={classes.root}>
      <div>
        <Badge color='secondary' badgeContent={count}>
          <MailIcon />
        </Badge>
        <ButtonGroup>
          <Button
            color='primary'
            variant='contained'
            aria-label='reduce'
            onClick={() => {
              setCount(Math.max(count - 1, 0))
            }}>
            <RemoveIcon fontSize='small' />
          </Button>
          <Button
            color='primary'
            variant='contained'
            aria-label='increase'
            onClick={() => {
              setCount(count + 1)
            }}>
            <AddIcon fontSize='small' />
          </Button>
        </ButtonGroup>
      </div>
      <div>
        <Badge color='secondary' variant='dot' invisible={invisible}>
          <MailIcon />
        </Badge>
        <FormControlLabel
          control={
            <Switch checked={!invisible} onChange={handleBadgeVisibility} />
          }
          label='Show Badge'
        />
      </div>
    </div>
  )
}

export default BadgeBlock
