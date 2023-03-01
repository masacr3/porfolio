import React, { useState } from 'react'
import './Login.css'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import Flash from '../flash/Flash'

function Login() {

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [response, setResponse] = useState('')
  const [consulto, setConsulto] = useState(false)

  const navigateTo = useNavigate()

  const submitBoton = () =>{
    // axios.post("http://localhost:3333/token", { email, password })
    //   .then(res => {
    //     if (res.data.role === "invitado"){
    //       setResponse(false)
    //       setConsulto(true)
    //       localStorage.clear()
    //       setResponse('error')
    //       setTimeout( () => setConsulto(false), 2000)
    //     }
    //     else{
    //       localStorage.setItem('token', res.data.token)
    //       navigateTo("/home")
    //     }
    //   })
    
    //desactivated AUTH for moments
    localStorage.setItem('token', "asdaaAJlsdJAsd")
    navigateTo("/home")
  }

  return (
    <div className='container-login'>
        <div className='item-login jc-c'>Login</div>
        <div className='item-login jc-sa'>
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
        <div className="item-logic jc-c">
            {consulto && 
                <Flash estado={response}>
                    Usuario invalido
                </Flash>}
        </div>
    </div>
  )
}

export default Login