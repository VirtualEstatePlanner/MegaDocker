/** @format */

//  ButtonTemplate.tsx
//  MegaDocker
//  a React Button Component template to facilitate creating new buttons
//  Created by George Georgulas IV on 3/17/19.
//  Copyright © 2019-2021 The MegaDocker Group. All rights reserved.

import React from 'react'

function buttonClicked() {}

export const ButtonTemplate: React.FC = (): React.ReactElement => {
  return (
    <div className='Button'>
      {}
      <button onClick={buttonClicked}>Button</button>
    </div>
  )
}
