import Contenedor from '../contenedor/Contenedor'
import Logo from '../logo/Logo'
import Nvar from '../nvar/Nvar'
import './Layout.css'
import MedicalCard from '../medicalCard/MedicalCard'
import FiubaCard from '../fiubaCard/FiubaCard'
import TodoList from '../todoList/TodoList'
import { useEffect } from 'react'

function Layout() {
  
  let articulos = ['papa','leche','nose']

  useEffect( () => localStorage.setItem("listaArticulos", JSON.stringify(articulos)), [])


  let registro = [
    { tipo : "vacuna", fecha: "3 / mar"},
    { tipo : "medico", fecha: "27 / mar"}
  ]

  let infoFacultad = [
    {
      fecha : "02 / mar",
      descripcion : "🔥 Prioridad (98) 14:30h",
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
        <TodoList />
    </div>
  )
}

export default Layout