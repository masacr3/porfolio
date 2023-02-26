import React, { useState } from 'react'
import './Login.css'
import axios from 'axios'

function Login() {

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const submitBoton = () =>{
    axios.post("http://localhost:3333/token", { email, password })
      .then(res => console.log(res.data.token, res.data.role))
  }

  return (
    <div className='container-login'>
        <div className='item-login jc-c'>Login</div>
        <div className='item-login jc-sa m20'>
            <form onSubmit={e => e.preventDefault()}>
                <input 
                    type="text" 
                    placeholder='email' value={email}
                    onChange={e => setEmail(e.target.value)}
                    />
                <input 
                  type="text"
                  placeholder='pass' value={password}
                  onChange={e => setPassword(e.target.value)}
                />
            </form>
            <button type='submit' onClick={submitBoton}>Enviar</button>
        </div>
        
    </div>
  )
}

export default Login