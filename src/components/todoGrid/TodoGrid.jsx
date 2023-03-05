import React, { useLayoutEffect, useState } from 'react'
import TodoGridItem from '../todoGridItem/TodoGridItem'
import {v4 as uuidv4} from 'uuid'
import './TodoGrid.css'

function TodoGrid({eligioDb,databd,getdb,datacurrent,getcurrent}) {
  const [input , setInput] = useState('')

  function agregarItem(e){
    if(e.key === 'Enter'){
      let nuevoItem = {
        id : uuidv4(),
        item : input,
        estado : false
      }
  
      let dataItems = [ ...datacurrent.articulos, nuevoItem ]
      let nuevoCurrent = { ...datacurrent, articulos : dataItems }
      
      getcurrent( nuevoCurrent )
  
      let eliminoCurrentDb = databd.filter( db => db.id !== datacurrent.id )
      let nuevaDb = [ ...eliminoCurrentDb, nuevoCurrent ]
  
      getdb(nuevaDb)
  
      localStorage.setItem('db', JSON.stringify( nuevaDb ))
  
      setInput('')
    }
  }

  

  return (
    <div>
      <div className="row item title jc-c">
        <h3>{datacurrent.database}</h3>
      </div>
      <div className="row item extract jc-c">
        <input 
          type="text"
          onChange={e => setInput(e.target.value)}
          value={input}
          onKeyUp={e=> agregarItem(e)}
          placeholder="Agregar articulo..."
          />
      </div>
      {datacurrent.articulos.map(articulo =>
        <TodoGridItem body={articulo.item} id={articulo.id} key={articulo.id} estado={articulo.estado} datacurrent={datacurrent} getcurrent={getcurrent} databd={databd} getdb={getdb}/> 
      )}
    </div>
  )
}

export default TodoGrid