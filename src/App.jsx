import './App.css'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Layout from './components/layout/Layout'

function App() {

  return (
    <div className='container-app'>
      <BrowserRouter>
        <Routes >
          <Route path='/porfolio' index element={<Layout />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
