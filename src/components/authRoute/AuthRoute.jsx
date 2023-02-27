import React from 'react'
import { Navigate, Outlet } from 'react-router-dom'

function AuthRoute({redirectTo,children}) {
  
  let token = localStorage.getItem('token')
  if(!token) return <Navigate to={redirectTo} />

  return children ? children : <Outlet />
}

export default AuthRoute