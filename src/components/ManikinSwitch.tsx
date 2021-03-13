/** @format */

//  ManikinSwitch.test.tsx
//  MegaDocker
//  a React Component that renders the toggle switch for a Manikin
//  Created by George Georgulas IV on 3/17/19.
//  Copyright © 2019-2021 The MegaDocker Group. All rights reserved.

import React from 'react'
import Switch from '@material-ui/core/Switch'

export const ManikinSwitch: React.FC = (): React.ReactElement => {
  return (
    <div className='ManikinSwitch'>
      <Switch />
    </div>
  )
}
