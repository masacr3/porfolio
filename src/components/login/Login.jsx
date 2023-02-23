import React, { useState } from 'react'
import './Login.css'
import axios from 'axios'

function Login() {

  const [email, setEmail] = useState('')

  const handlerInput = (e) =>{
    setEmail(e.target.value)
  }

  const handlerSubmit = (e) =>{
    e.preventDefault()
  }

  const submitBoton = (e) =>{
    const config = {
        headers : {
            'Authorization' : 'Bearer ' + localStorage.getItem('token')
        }
    }

    axios.get("http://localhost:3000/private", config)
        .then(res => {
            console.log( res.data )
        })
  }

  return (
    <div className='container-login'>
        <div className='item-login jc-c'>JWT SESSION</div>
        <div className='item-login jc-sa m20'>
            <form onSubmit={e => handlerSubmit(e)}>
                <input 
                    type="text" 
                    placeholder='email' value={email}
                    onChange={e => handlerInput(e)}
                    />
            </form>
            <button type='submit' onClick={e => submitBoton(e)}>Enviar</button>
        </div>
        
    </div>
  )
}

export default Login