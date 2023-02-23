import React from 'react'
import Contenedor from '../contenedor/Contenedor'
import Logo from '../logo/Logo'
import Nvar from '../nvar/Nvar'
import './Layout.css'
import MedicalCard from '../medicalCard/MedicalCard'
import FiubaCard from '../fiubaCard/FiubaCard'


function Layout() {
  let registro = [
    { tipo : "medico", fecha: "24 / feb"},
    { tipo : "vacuna", fecha: "3 / mar"},
    { tipo : "medico", fecha: "27 / mar"}
  ]

  let infoFacultad = [
    { 
      fecha : "17 / feb" ,
      descripcion : "Publicación de la Oferta Horaria. La misma se encontrará disponible en el SIU Guaraní y también puede acceder desde el siguiente link. ",
      link : "https://ofertahoraria.fi.uba.ar",
      mask : "Oferta horaria"
    },
    {
      fecha : "23 / feb",
      descripcion :  "Publicación de prioridades a través de SIU Guaraní, indicando el día y horario en el cual se habilitará la inscripción.",
      link : "https://guaraniautogestion.fi.uba.ar/g3w/",
      mask : "SIU Guarani"
    },
    {
      fecha : "27 / feb",
      descripcion : " Inicio de la inscripción a Asignaturas. La inscripción se habilitará entre las 8 y las 22 hs. El plazo máximo para la inscripción a asignaturas será el viernes 3 de marzo a las 11.59hs. "
    },
    {
      fecha : "13 / mar",
      descripcion : "Inicio de clases."
    }
  ]

  return (
    <div className='container-layout'>
        <Nvar />
        <Logo />
        <Contenedor>
          Hello, I'm an indie app developer based in Buenos Aires!
        </Contenedor>
        <MedicalCard registros={registro} />
        <FiubaCard registros={infoFacultad}/>
    </div>
  )
}

export default Layout