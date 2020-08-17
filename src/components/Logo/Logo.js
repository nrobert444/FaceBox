import React from 'react'
import Tilt from 'react-tilt'
import './Logo.css'
import AiBrain from './AiBrain.png'

export const Logo = () => {
  return (
    <div className='ma4 mt0'>
      <Tilt
        className='Tilt br2 shadow-2'
        options={{ max: 35 }}
        style={{ height: 150, width: 150 }}
      >
        <div className='Tilt-inner pa3'>
          <img src={AiBrain} style={{ paddingTop: '5px' }} alt='logo' />
        </div>
      </Tilt>
    </div>
  )
}
export default Logo
