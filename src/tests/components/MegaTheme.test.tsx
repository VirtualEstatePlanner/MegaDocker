/** @format */

//  MegaTheme.test.tsx
//  MegaDocker
//  an automated test
//  Created by George Georgulas IV on 3/12/21.
//  Copyright © 2020-2021 The MegaDocker Group. All rights reserved.

import { MegaTheme } from '../../components/MegaTheme'
import { render } from '@testing-library/react'
import { ThemeProvider } from '@material-ui/core'
import { ButtonTemplate } from '../../components/ButtonTemplate'

test('renders the MegaTheme component', () => {
  render(
    <div>
      <ThemeProvider theme={MegaTheme}>
        <ButtonTemplate />
      </ThemeProvider>
    </div>
  )
})
