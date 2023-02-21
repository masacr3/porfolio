import React from 'react'
import './Logo.css'
import ovni from '../../assets/ovni.png'


function Logo() {

  return (
    <div className='container-logo'>
        <img src={ovni} alt="" />
    </div>
  )
}

export default Logo