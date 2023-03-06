import React, { useEffect, useLayoutEffect, useRef } from 'react'
import { useState } from 'react'
import {v4 as uuidv4} from 'uuid'
import Hamburger from 'hamburger-react'
import './TodoList.css'
import TodoMenu from '../todoListMenu/todoMenu'
import TodoGrid from '../todoGrid/TodoGrid'
import Footer from '../footer/Footer'


function TodoList() {
  
  const [eligioDb, setEligioDb] = useState(false)
  const [db, setDb] = useState([])
  const [dbcurrent, setDbcurrent] = useState({})
  const [isActived, setIsActived] = useState(true)

  return (
    <div className='todolist-container'>
      <div className='header'>
        <p> <span>💖</span>Con mucho amor para 
        el mejor papa del mundo <span>🌎</span></p> 
      </div>
      <div className='box-container'>
        <TodoMenu 
          elegirDb={setEligioDb} 
          databd={db}
          getdb={setDb}
          datacurrent={dbcurrent}
          getcurrent={setDbcurrent}
          activado={setIsActived} 
          />
        { eligioDb && !isActived && 
          <TodoGrid 
            eligioDb={eligioDb}
            databd={db}
            getdb={setDb}
            datacurrent={dbcurrent}
            getcurrent={setDbcurrent}
            /> 
          }
      </div>
      <Footer />
    </div>
    
  )
}

export default TodoList