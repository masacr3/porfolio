import React from 'react'
import './Contenedor.css'

function Contenedor({children}) {
  return (
    <div className='container-contenedor'>
        {children}
    </div>
  )
}

export default Contenedor
