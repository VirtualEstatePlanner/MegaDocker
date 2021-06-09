import * as React from 'react'
import { FormLabel, Rating, makeStyles } from '@material-ui/core'
import StarIcon from '@material-ui/icons/Star'

const labels: { [index: string]: string } = {
  0.5: 'Useless',
  1: 'Useless+',
  1.5: 'Poor',
  2: 'Poor+',
  2.5: 'Ok',
  3: 'Ok+',
  3.5: 'Good',
  4: 'Good+',
  4.5: 'Excellent',
  5: 'Excellent+'
}

const useStyles = makeStyles({
  root: {
    width: 200,
    display: 'flex',
    alignItems: 'center'
  }
})

const RatingBlock: React.FC = () => {
  const [value, setValue] = React.useState<number | null>(2)
  const [hover, setHover] = React.useState(-1)
  const classes = useStyles()

  return (
    <div className={classes.root}>
      <Rating
        name='hover-feedback'
        value={value}
        precision={0.5}
        onChange={(event, newValue) => {
          setValue(newValue)
        }}
        onChangeActive={(event, newHover) => {
          setHover(newHover)
        }}
        emptyIcon={<StarIcon style={{ opacity: 0.55 }} fontSize='inherit' />}
      />
      {value !== null && (
        <FormLabel style={{ marginInlineStart: '5px' }}>
          {labels[hover !== -1 ? hover : value]}
        </FormLabel>
      )}
    </div>
  )
}

export default RatingBlock
