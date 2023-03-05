import React, { useState } from 'react'

function TodoGridItem({body, estado,id, databd,getdb,datacurrent,getcurrent}) {
    const [isChecked, setIsChecked] = useState(estado)

    function checking(){
        setIsChecked(!isChecked)

        let nuevoItem = {id : id, item : body, estado : !isChecked}

        let nuevoItemdb = datacurrent.articulos.map(item => item.id === id ? nuevoItem : item )

        let nuevoCurrent = { ...datacurrent, articulos : nuevoItemdb }

        getcurrent( nuevoCurrent )

        let eliminoCurrentDb = databd.filter( db => db.id !== datacurrent.id )
        let nuevaDb = [ ...eliminoCurrentDb, nuevoCurrent ]

        getdb(nuevaDb)

        localStorage.setItem('db', JSON.stringify( nuevaDb ))

    }

    function Eliminar(){
        let articulosFiltrados = datacurrent.articulos.filter(item => item.id !== id)
        let nuevoCurrent = { ...datacurrent, articulos : articulosFiltrados}
        getcurrent( nuevoCurrent )
        
        let eliminoCurrentDb = databd.filter( db => db.id !== datacurrent.id )
        let nuevaDb = [ ...eliminoCurrentDb, nuevoCurrent]
        getdb(nuevaDb)

        localStorage.setItem('db', JSON.stringify( nuevaDb ))
    }

    return (
    <div className={isChecked ?'row item grid tachado jc-sb':'row item grid jc-sb'}>
        {body}
        <div className='opt'>
            <button onClick={e => checking()}>
                {isChecked ? 'Cancel' : 'Ok'}
            </button>
            <button onClick={e=> Eliminar()}>Eliminar</button>
        </div>
    </div> 
  )
}

export default TodoGridItem