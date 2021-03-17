/** @format */

//  MemoryCheckmark.test.tsx
//  MegaDocker
//  an automated test
//  Created by George Georgulas IV on 3/12/21.
//  Copyright © 2021 The MegaDocker Group. All rights reserved.

import { render } from '@testing-library/react'
import { MemoryValidationIcon } from '../../components/MemoryValidationIcon'
import { IMemory } from '../../interfaces/IMemory'

test('renders the MemoryValidationIcon component', () => {
  ;(memory: IMemory) => {
    render(<div>{MemoryValidationIcon(memory)}</div>)
  }
})
