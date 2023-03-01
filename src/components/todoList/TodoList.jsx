import React, { useEffect } from 'react'
import { useState } from 'react'
import {v4 as uuidv4} from 'uuid'
import Hamburger from 'hamburger-react'
import './TodoList.css'

function TodoList() {
  
  const [lista, setLista] = useState([])
  const [inputAdd, setInputAdd] = useState('')
  const [visible, setVisible] = useState(false)
  

  const handleAgregar = () =>{

    if(inputAdd === "") return 

    const nuevoArticulo = {
        "id" : uuidv4(),
        "descripcion" : inputAdd
    }

    setLista ( [...lista, nuevoArticulo])
    setInputAdd("")
  }

  const handleEliminar = (id) =>{
    setLista( lista.filter( item => item.id !== id))
  }

  function Menu (){
    const [datadb, setDatadb] = useState([])
    const [inputMenu, setInputMenu] = useState('')

    useEffect(() => {
      let databases = localStorage.getItem('arraysDb')
      if(!databases){
        localStorage.setItem('arraysDb',JSON.stringify([]))
        return
      }
      databases = JSON.parse(databases)
      console.log(databases)
      setDatadb([...datadb, ...databases])
      }
      ,[])

    const agregarDB = () =>{
      if(inputMenu === "") return
      let data = {
        id : uuidv4(),
        db : inputMenu
      }
      setDatadb([...datadb, data])
      let databases = localStorage.getItem('arraysDb')
      databases = JSON.parse(databases)
      let newDb = [ ...databases , data]

      localStorage.setItem('arraysDb', JSON.stringify(newDb))
      setInputMenu('')

    }

    const handlerEliminarMenu = (id) =>{
      setDatadb( datadb.filter(item => item.id !== id))
      let newDb = datadb.filter(item => item.id !== id)
      localStorage.setItem('arraysDb', JSON.stringify(newDb))
    }

    return (
      <div className='menu-container'>
        {datadb.map(data => <div className='menu jc-saa' key={data.id}>
          <p>{data.db}</p>
          <div className="opt">
            <button className='mr-30'>Usar</button>
            <button onClick={e => handlerEliminarMenu(data.id)}>Eliminar</button>
          </div>
        </div>)}
        <div className='menu jc-c'>
          <input 
            type="text"
            onChange={e => setInputMenu(e.target.value)}
            value={inputMenu} 
          />
          <div className="opt">
            <button onClick={e => agregarDB()}>Crear</button>
          </div>
      
        </div>
      </div>
    )
  }
   
  return (
    <div className='box-container'>
        <div className='item jc-saa'>
            <p>Lista articulos</p>
            <Hamburger onToggle={ toggled => {
                if(toggled){
                  setVisible(true)
                }
                else{
                  setVisible(false)
                }
              }}
            />
        </div>
        {visible && <Menu />}
        <div className="item jc-end pa">
            <input 
                type="text" 
                onChange={ e => setInputAdd(e.target.value)}
                value={inputAdd}
            />
            <button onClick={e => handleAgregar()}>Agregar</button>
        </div>
        { lista.map( articulo => 
            <div className="item jc-sa" key={articulo.id}>
                <p>{articulo.descripcion}</p>
                <div className='opt'>
                    <button>ok</button>
                    <button onClick={e => handleEliminar(articulo.id)}>eliminar</button>
                </div>
            </div>
        ) }
    </div>
  )
}

export default TodoList