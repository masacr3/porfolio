import { useState } from 'react'
import {v4 as uuidv4} from 'uuid'

function InputMenu({getData, data}){
    const [inputDB, setInputDB] = useState('')

    const agregarDB = () =>{
        if(inputDB === "") return 
        let db = {
          id : uuidv4(),
          database : inputDB,
          articulos : []
        }
        localStorage.setItem('db',JSON.stringify([...data, db]))
        getData([...data, db])
        setInputDB('')
    }

    return(
      <div className="col">
          <div className="row item jc-sa inputmenu">
            <input 
              type="text" 
              onChange={e => setInputDB(e.target.value)}
              value={inputDB}
            />
            <button onClick={e=> agregarDB()}>Agregar</button>
          </div>
        </div>
    )
}

export default InputMenu