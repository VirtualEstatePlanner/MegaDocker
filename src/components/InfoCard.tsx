/** @format */

//  InfoCard.tsx
//  MegaDocker
//  a React Component that renders the information card for the MEGADocker application - deprecated
//  Created by George Georgulas IV on 3/17/19.
//  Copyright © 2019-2021 The MegaDocker Group. All rights reserved.

import React from 'react'

import Card from '@material-ui/core/Card'
import CardContent from '@material-ui/core/CardContent'
import { MegaContext } from './MegaContext'

export const InfoCard: React.FC = (): React.ReactElement => {
  const { state } = React.useContext(MegaContext)
  return (
    <Card className='ManikinInfo'>
      <CardContent>{state.infoContent}</CardContent>
    </Card>
  )
}
