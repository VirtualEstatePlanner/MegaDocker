/** @format */

//  ButtonUploadMobFile.tsx
//  MEGADocker
//  a React Button Component that loads a mob file in progress
//  Created by George Georgulas IV on 2/22/22.
//  Copyright © 2022 The MegaDocker Group. All rights reserved.

import * as React from 'react'
import { Button } from '@mui/material'
import { MegaContext } from './MegaContext'
import { IMegaDockerState } from '../interfaces/stateManagement/IMegaDockerState'
import { IMegaDockerAction } from '../interfaces/stateManagement/IMegaDockerAction'
import { runningInTauri } from '../functions/utility/runningInTauri'
import { unpackDotMobFile } from '../functions/data/unpackDotMobFile'
import { IMob } from '../interfaces/objectInterfaces/IMob'

export const ButtonUploadMobFile: React.FC = (): React.ReactElement => {
  const inputFileRef = React.useRef<HTMLInputElement>(null)
  const {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    state,
    dispatch
  }: {
    state: IMegaDockerState
    dispatch: React.Dispatch<IMegaDockerAction>
  } = React.useContext(MegaContext)

  const uploadButtonClicked = () => {
    if (inputFileRef.current === null) return
    inputFileRef.current.click()
  }

  const handleChangeFile = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (inputFileRef.current === null) return
    if (inputFileRef.current.files === null) return
    const fileReader = new FileReader()
    fileReader.readAsText(inputFileRef.current.files[0])
    fileReader.onload = handleLoadFile.bind(null, fileReader)
  }

  const handleLoadFile = (fileReader: FileReader) => {
    if (fileReader.result) {
      if (typeof fileReader.result == `string`) {
        const mobJSON: IMob = JSON.parse(fileReader.result)
        const mobState: IMegaDockerState = unpackDotMobFile(mobJSON)
        if (runningInTauri()) {
          dispatch({ type: `UPLOAD_MOB_FILE_TAURI`, payload: mobState })
        } else {
          dispatch({ type: `UPLOAD_MOB_FILE_BROWSER`, payload: mobState })
        }
      }
    }
    return fileReader.result
  }

  return (
    <>
      <Button variant='contained' onClick={uploadButtonClicked}>
        Load .mob file
      </Button>
      <input type='file' accept='.mob' hidden={true} ref={inputFileRef} onChange={handleChangeFile} />
    </>
  )
}
