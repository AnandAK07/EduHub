import React, { Suspense, lazy } from 'react'
import { Route, Routes } from 'react-router-dom'
import Loading from '../components/Loading'
import Signup from '../components/authentication/Signup'
import Login from '../components/authentication/Login'
import { PrivateRoute } from './PrivateRoute'
const Dashboard = lazy(() => import('../pages/Dashboard'))

const AllRoutes = () => {
  return (
    <Routes>
      <Route path='/' element={<PrivateRoute><Suspense fallback={<Loading />}><Dashboard /></Suspense></PrivateRoute>} />
      <Route path='/login' element={<Login />} />
      <Route path='/signup' element={<Signup />} />
    </Routes>
  )
}

export default AllRoutes