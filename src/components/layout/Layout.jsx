import Contenedor from '../contenedor/Contenedor'
import Logo from '../logo/Logo'
import Nvar from '../nvar/Nvar'
import './Layout.css'
import MedicalCard from '../medicalCard/MedicalCard'
import FiubaCard from '../fiubaCard/FiubaCard'
import TodoList from '../todoList/TodoList'
import { useEffect } from 'react'
import Materias from '../materias/Materias'
import Footer from '../footer/Footer'

function Layout() {

  let registro = [
    { tipo : "medico", fecha: "27 / mar"}
  ]

  let infoFacultad = [
    {
      fecha : "13 / mar",
      descripcion : "Inicio de clases."
    }
  ]

  let infoMaterias = [
    {
      materia : 'Analisis Matematico',
      fecha : 'martes - jueves',
      horario : '14 - 16 ~ 16 - 18'
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
        <Footer />
        {/* <Materias listadoMaterias={infoMaterias}/> */}
    </div>
  )
}

export default Layout