import React from 'react'
import {Link} from 'react-router-dom'
import './Menu.css'

function Menu({visibilidad}) {
  return (
    <div className={visibilidad ? 'menu-box' : 'menu-box-not-visible'}>
        <Link to="/home" className='menu-off-decoration'><h3>Leo R.</h3></Link>
        <Link to="/dje" className='menu-off-decoration'><h3>Carlos R.</h3></Link>
    </div>
  )
}

export default Menu