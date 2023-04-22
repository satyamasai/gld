import React from 'react'
import "./AdminDashboard.css"
import { Box } from '@chakra-ui/react'
import HeroImageModal from '../../Components/Modal/HeroImageModal'

const AdminDashboard = () => {
  return (
    <div className='admin_dashboard'>
    
    <Box bg={'black'} border={'1px solid black'} w={'100%'} h={'100vh'}>
    <Box mt={'80px'} w={'240px'} h={'100vh'} >
    <HeroImageModal/>
    </Box>
    
    </Box>
    
    
    </div>
  )
}

export default AdminDashboard