/** @format */

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
