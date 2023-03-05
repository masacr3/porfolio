import './App.css'
import {HashRouter, Routes, Route} from 'react-router-dom'
import Layout from './components/layout/Layout'
import Login from './components/login/Login'
import AuthRoute from './components/authRoute/AuthRoute'
import Index from './components/index/Index'
import TodoList from './components/todoList/TodoList'

function App() {

  return (
    <div className='container-app'>
      <HashRouter>
        <Routes >
          {/* <Route path='/' index element={ <Login />}></Route>
          <Route element={<AuthRoute redirectTo="/" />}>
            <Route path='/home' element={<Layout />}></Route>
          </Route> */}
          <Route path='/' index element={ <Index />}></Route>
          <Route path='/home' element={<Layout />}></Route>
          <Route path='/dje' element={<TodoList />}></Route>
        </Routes>
      </HashRouter>
    </div>
  )
}

export default App
