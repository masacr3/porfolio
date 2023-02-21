import React from 'react'
import {Link} from 'react-router-dom'
import './Menu.css'

function Menu({visibilidad}) {
  return (
    <div className={visibilidad ? 'menu-box' : 'menu-box-not-visible'}>
        <Link to="/" className='menu-off-decoration'><h3>Home</h3></Link>
        <Link to="/" className='menu-off-decoration'><h3>Bio</h3></Link>
        <Link to="/" className='menu-off-decoration'><h3>Work</h3></Link>
    </div>
  )
}

export default Menu