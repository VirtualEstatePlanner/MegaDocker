/** @format */

import React from 'react'

import Card from '@material-ui/core/Card'
import CardContent from '@material-ui/core/CardContent'
import { MegaContext } from './MegaContext'
// import { IMegaDockerState } from "../interfaces/IMegaDockerState";
// import { IMegaDockerAction } from "../interfaces/IMegaDockerAction";
// import { megaReducer } from "../functions/reducers/megaReducer";

export const InfoCard: React.FC = (): React.ReactElement => {
  const { state } = React.useContext(MegaContext)
  return (
    <Card className='ManikinInfo'>
      <CardContent>{state.infoContent}</CardContent>
    </Card>
  )
}
