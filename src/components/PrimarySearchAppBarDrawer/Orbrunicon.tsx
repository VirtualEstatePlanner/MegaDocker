import * as React from 'react'
import svgLogo from './Images/Orbrunicon.svg'

const Orbrunicon: React.FC = (): JSX.Element => {
  return (
    <div className='App'>
      <img
        src={svgLogo}
        alt='Logo Icon'
        style={{ paddingTop: `10%`, minWidth: `50px` }}
      />
    </div>
  )
}
export default Orbrunicon
