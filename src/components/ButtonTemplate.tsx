/** @format */

//  ButtonTemplate.tsx
//  MEGADocker
//  a React Button Component that renders a button that does nothing.  This file is a template.
//  Created by George Georgulas IV on 3/17/19.
//  Copyright © 2019-2021 The MegaDocker Group. All rights reserved.

import * as React from 'react'

function buttonClicked() {}

export const ButtonTemplate: React.FC = (): React.ReactElement => {
  return (
    <div className='Button'>
      <button onClick={buttonClicked}>Button</button>
    </div>
  )
}
