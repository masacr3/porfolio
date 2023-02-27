import './App.css'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Layout from './components/layout/Layout'
import Login from './components/login/Login'
import AuthRoute from './components/authRoute/AuthRoute'

function App() {

  return (
    <div className='container-app'>
      <BrowserRouter basename='/porfolio/'>
        <Routes >
          <Route path='/' index element={ <Login />}></Route>
          <Route element={<AuthRoute redirectTo="/" />}>
            <Route path='/home' element={<Layout />}></Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
