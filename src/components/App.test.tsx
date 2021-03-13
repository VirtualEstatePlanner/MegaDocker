/** @format */

//  App.test.tsx
//  MegaDocker
//  an automated test
//  Created by George Georgulas IV on 3/12/21.
//  Copyright © 2021 The MegaDocker Group. All rights reserved.

import { App } from './App'
import { render } from '@testing-library/react'

test('renders the App component', () => {
  render(
    <div className='App'>
      <App />
    </div>
  )
})
