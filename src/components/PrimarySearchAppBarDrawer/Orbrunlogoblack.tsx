import * as React from 'react'
import svgLogo from './Images/Orbrunlogoblack.svg'

const Orbrunlogoblack: React.FC = (): JSX.Element => {
  return (
    <div className='App'>
      <img
        src={svgLogo}
        alt='Logo'
        width='30%'
        height='30%'
        style={{
          minWidth: `60px`
        }}
      />
    </div>
  )
}
export default Orbrunlogoblack
