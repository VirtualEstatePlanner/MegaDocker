import * as React from 'react'
import { Button } from '@material-ui/core'

const ButtonBlock: React.FC<any> = (props: any): JSX.Element => {
  return (
    <>
      <Button variant='contained' color='primary'>
        My Primary
      </Button>
      <Button variant='contained' color='secondary'>
        My Secondary
      </Button>
    </>
  )
}

export default ButtonBlock
