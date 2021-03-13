/** @format */

//  ManikinIcon.tsx
//  MegaDocker
//  a React Component that
//  Created by George Georgulas IV on 3/17/19.
//  Copyright © 2019-2021 The MegaDocker Group. All rights reserved.

import React from 'react'
import defaultIcon from '../images/manikin-icons/defaultIcon.png'

export const ManikinIcon: React.FC = (props: any): React.ReactElement => {
  return (
    <div className='ManikinIcon'>
      {props.children}
      <img src={defaultIcon} alt='' height='15' width='15' />
    </div>
  )
}
