import React, { useState, useRef } from 'react'
import Hamburger from 'hamburger-react'
import {Link} from 'react-router-dom'
import {CSSTransition, SwitchTransition} from 'react-transition-group'
import './Nvar.css'
import Icono from '../icono/Icono'

function MenuItem({visibilidad}) {
  return (
    <div className={visibilidad ? 'box' : 'box-not-visible'}>
        <Link to="/" className='off-decoration'>Home</Link>
        <Link to="/" className='off-decoration'>Bio</Link>
        <Link to="/" className='off-decoration'>Work</Link>
    </div>
  )
}

function Nvar() {
  const [visible, setVisible] = useState(false)
  return (
    <div className='container-nvar'>
      <div className='row'>
        <Link to='/' className='container-nvar-link off-decoration'>
          <Icono />
          <h2>Leonel Rolon</h2>
        </Link>
        {/* <Hamburger onToggle={ toggled => {
            if(toggled){
              setVisible(true)
            }
            else{
              setVisible(false)
            }
          }}
        /> */}
        <Hamburger />
      </div>
      <>
        <MenuItem visibilidad={visible} />
      </>
        

    </div>
  )
}

export default Nvar