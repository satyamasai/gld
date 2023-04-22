import React from 'react'
import "./AdminDashboard.css"
import Login from "../SignupandLogin/Login"
import { Box } from '@chakra-ui/react'
const AdminLogin = () => {
  return (
    <div className='admin_login'>
    <Box>Login to access dashboard</Box>
    <Box>Admin only!</Box>
    <Login />
    
    </div>
  )
}

export default AdminLogin