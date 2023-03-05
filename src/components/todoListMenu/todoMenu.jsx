import React, { useLayoutEffect, useState } from 'react'
import Hamburger from 'hamburger-react'
import {v4 as uuidv4} from 'uuid'
import InputMenu from '../todoInput/InputMenu'
import './todoMenu.css'

function todoMenu({elegirDb, databd, getdb, datacurrent, getcurrent, activado}) {
  const [visible, setVisible] = useState(false)

  useLayoutEffect( () =>{
    let bd = localStorage.getItem('db')
    if( !bd || bd.length === 0 ){
      localStorage.setItem('db',JSON.stringify([]))
      return
    }
    bd = JSON.parse(bd)
    getdb([...databd, ...bd])
  }
  ,[])

  function usarDB(db){
    // setDbcurrent(db)
    getcurrent(db)
    elegirDb(true)
  }

  function quitarDB(id){
    let nuevaDb = databd.filter(db => db.id !== id)
    getcurrent({})
    getdb(nuevaDb)
    localStorage.setItem('db',JSON.stringify(nuevaDb))
  }

  function limpiarDB(db){
    let current = { ...db , articulos : [] } //propagation SKILL
    let nuevaDB = databd.map(item => item.id === db.id ? current : item )
    getcurrent({})
    getdb(nuevaDB)
    localStorage.setItem('db', JSON.stringify(nuevaDB))
  }

  return (
    <div>
      <div className="row jc-sa todomenu">
        <p>Listado</p>
        <Hamburger onToggle={ toggled => { 
                                if(toggled){
                                    setVisible(true)
                                    activado(true)
                                }
                                else{
                                    setVisible(false)
                                    activado(false)
                                }
                              }}
        />
      </div>
      { visible && <InputMenu getData={getdb} data={databd}/> } 
      <div>
        {visible && databd.map( db => 
          <div className={db.database ===  datacurrent.database? 'row item jc-sb focus' : 'row item jc-sb'} key={db.id}>
            <p>{db.database}</p>
            <div className='opt'>
              <button onClick={e=> usarDB(db)}>Usar</button>
              <button onClick={e=> quitarDB(db.id)}>Quitar</button>
              <button onClick={e=> limpiarDB(db)}>Limpiar</button>
            </div>
          </div>
          )}
      </div>
    </div>
  )
}

export default todoMenu