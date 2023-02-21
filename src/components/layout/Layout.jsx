import React from 'react'
import Contenedor from '../contenedor/Contenedor'
import Logo from '../logo/Logo'
import Nvar from '../nvar/Nvar'
import './Layout.css'
import MedicalCard from '../medicalCard/MedicalCard'

function Layout() {
  let registro = [
    { tipo : "medico", fecha: "24 / feb"},
    { tipo : "vacuna", fecha: "3 / mar"},
    { tipo : "medico", fecha: "3 / mar"}
  ]
  return (
    <div className='container-layout'>
        <Nvar />
        <Logo />
        <Contenedor>
          Hello, I'm an indie app developer based in Buenos Aires!
        </Contenedor>
        <MedicalCard registros={registro} />
    </div>
  )
}

export default Layout