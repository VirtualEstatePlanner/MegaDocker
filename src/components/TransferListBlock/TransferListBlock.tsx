import * as React from 'react'
import {
  Button,
  Card,
  CardHeader,
  Checkbox,
  Divider,
  Grid,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Theme,
  createStyles,
  makeStyles
} from '@material-ui/core'

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      margin: 'auto'
    },
    cardHeader: {
      padding: theme.spacing(1, 2)
    },
    list: {
      width: 175,
      height: 230,
      margin: theme.spacing(2),
      overflow: 'auto'
    },
    button: {
      margin: theme.spacing(2, 1)
    }
  })
)

const not: Function = (a: number[], b: number[]): number[] =>
  a.filter((value) => b.indexOf(value) === -1)

const intersection: Function = (a: number[], b: number[]): number[] =>
  a.filter((value) => b.indexOf(value) !== -1)

const union: Function = (a: number[], b: number[]): number[] => [
  ...a,
  ...not(b, a)
]

const TransferListBlock: React.FC = (): JSX.Element => {
  const classes = useStyles()
  const [checked, setChecked] = React.useState<number[]>([])
  const [left, setLeft] = React.useState<number[]>([0, 1, 2, 3])
  const [right, setRight] = React.useState<number[]>([4, 5, 6, 7])

  const leftChecked = intersection(checked, left)
  const rightChecked = intersection(checked, right)

  const handleToggle = (value: number) => () => {
    const currentIndex = checked.indexOf(value)
    const newChecked = [...checked]

    if (currentIndex === -1) {
      newChecked.push(value)
    } else {
      newChecked.splice(currentIndex, 1)
    }

    setChecked(newChecked)
  }

  const numberOfChecked = (items: number[]) =>
    intersection(checked, items).length

  const handleToggleAll = (items: number[]) => () => {
    if (numberOfChecked(items) === items.length) {
      setChecked(not(checked, items))
    } else {
      setChecked(union(checked, items))
    }
  }

  const handleCheckedRight = () => {
    setRight(right.concat(leftChecked))
    setLeft(not(left, leftChecked))
    setChecked(not(checked, leftChecked))
  }

  const handleCheckedLeft = () => {
    setLeft(left.concat(rightChecked))
    setRight(not(right, rightChecked))
    setChecked(not(checked, rightChecked))
  }

  const customList = (title: React.ReactNode, items: number[]) => (
    <Card>
      <CardHeader
        className={classes.cardHeader}
        avatar={
          <Checkbox
            onClick={handleToggleAll(items)}
            checked={
              numberOfChecked(items) === items.length && items.length !== 0
            }
            indeterminate={
              numberOfChecked(items) !== items.length &&
              numberOfChecked(items) !== 0
            }
            disabled={items.length === 0}
            inputProps={{
              'aria-label': 'all items selected'
            }}
          />
        }
        title={title}
        subheader={`${numberOfChecked(items)}/${items.length} selected`}
      />
      <Divider />
      <List className={classes.list} dense component='div' role='list'>
        {items.map((value: number) => {
          const labelId = `transfer-list-all-item-${value}-label`

          return (
            <ListItem
              key={value}
              role='listitem'
              button
              onClick={handleToggle(value)}>
              <ListItemIcon>
                <Checkbox
                  checked={checked.indexOf(value) !== -1}
                  tabIndex={-1}
                  disableRipple
                  inputProps={{
                    'aria-labelledby': labelId
                  }}
                />
              </ListItemIcon>
              <ListItemText id={labelId} primary={`List item ${value + 1}`} />
            </ListItem>
          )
        })}
        <ListItem />
      </List>
    </Card>
  )

  return (
    <Grid
      container
      spacing={2}
      justifyContent='center'
      alignItems='center'
      className={classes.root}>
      <Grid item>{customList('Choices', left)}</Grid>
      <Grid item>
        <Grid container direction='column' alignItems='center'>
          <Button
            variant='contained'
            size='small'
            className={classes.button}
            onClick={handleCheckedRight}
            disabled={leftChecked.length === 0}
            aria-label='move selected right'>
            &gt;
          </Button>
          <Button
            variant='contained'
            size='small'
            className={classes.button}
            onClick={handleCheckedLeft}
            disabled={rightChecked.length === 0}
            aria-label='move selected left'>
            &lt;
          </Button>
        </Grid>
      </Grid>
      <Grid item>{customList('Chosen', right)}</Grid>
    </Grid>
  )
}

export default TransferListBlock
