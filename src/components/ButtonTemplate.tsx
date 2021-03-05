/** @format */

import React from 'react'

function buttonClicked() {}

export const Button: React.FC = (): React.ReactElement => {
  return (
    <div className='Button'>
      {}
      <button onClick={buttonClicked}>Button</button>
    </div>
  )
}
