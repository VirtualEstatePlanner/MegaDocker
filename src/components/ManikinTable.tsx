/** @format */

//  ManikinTable.test.tsx
//  MegaDocker
//  a React Component that
//  Created by George Georgulas IV on 3/17/19.
//  Copyright © 2019-2021 The MegaDocker Group. All rights reserved.

import React from 'react'
import { Switch, Table, TableBody, TableCell, TableHead, TableRow } from '@material-ui/core'
import { Tooltip } from '@material-ui/core'
import { IManikin } from '../interfaces/IManikin'
import { IMegaDockerAction } from '../interfaces/IMegaDockerAction'
import { IMegaDockerState } from '../interfaces/IMegaDockerState'
import { MegaContext } from './MegaContext'

export const ManikinTable: React.FC = (): React.ReactElement => {
  const {
    state,
    dispatch,
  }: {
    state: IMegaDockerState
    dispatch: React.Dispatch<IMegaDockerAction>
  } = React.useContext(MegaContext)

  return (
    <Table className='ManikinTable' size='small' stickyHeader>
      <TableHead className='ManikinTableHeader'>
        <TableRow>
          <TableCell key='name'>Services</TableCell>
          <TableCell key='icon' />
          <TableCell key='isSelected' />
        </TableRow>
      </TableHead>
      <TableBody className='ManikinTableBody'>
        {state.manikinTable.map((eachManikin: IManikin) => (
          <Tooltip key={`${eachManikin.name}Row`} title={eachManikin.description}>
            <TableRow className={eachManikin.isCore ? 'CoreManikinRow' : 'ManikinRow'} hover={eachManikin.isCore ? false : true}>
              <TableCell key={`${eachManikin.name}NameCell`}>{eachManikin.name}</TableCell>
              <TableCell key={`${eachManikin.name}Icon`}>
                <img alt={eachManikin.name} src={eachManikin.manikinIcon} height='28vh' />
              </TableCell>
              <TableCell key={`${eachManikin.name}CheckboxCell`}>
                <Switch
                  key={`${eachManikin.name}Checkbox`}
                  checked={eachManikin.isSelected}
                  disabled={eachManikin.isCore ? true : false}
                  onClick={() =>
                    dispatch({
                      type: `TOGGLE_MANIKIN`,
                      payload: state.manikinTable.indexOf(eachManikin),
                    })
                  }
                />
              </TableCell>
            </TableRow>
          </Tooltip>
        ))}
      </TableBody>
    </Table>
  )
}
