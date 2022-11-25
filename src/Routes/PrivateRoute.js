import React, { useContext } from 'react'
import { Navigate, useLocation } from 'react-router-dom'
import Loader from '../Component/Loader/Loader'
import { AuthContext } from '../contexts/AuthProvider'

const PrivateRoute = ({ children }) => {
  const { user, loading } = useContext(AuthContext)
  const location = useLocation()
  console.log(loading)
  if (loading) {
    return (
      <Loader/>
    )
  }

  if (user && user.uid) {
    return children
  }
  return <Navigate to='/login' state={{ from: location }} replace />
}

export default PrivateRoute