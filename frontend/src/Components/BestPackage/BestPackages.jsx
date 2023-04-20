import React from 'react'
import "./BestPackages.css"
import { Box } from '@chakra-ui/react'
import PackageSlicker from '../PackageSlicker/PackageSlicker'
const BestPackages = () => {
  return (
    <div className='bestpackages'>
    <div className='best_package_heading'>
    
    <h1>Best Packages For 
    You</h1>
    <p>This is unique experience on ship, sea and land, exploring diffrentcoral island of Lakshdweep</p>
    </div>

    <Box display={{sm:"flex", md:"flex"}} className='pack_type'>
    <Box color='white' backgroundColor="#3282AD">Maldives</Box>
    <Box color='#3282AD'>Samundram</Box>
    <Box display={{sm:"none", md:"flex"}} color='#3282AD'>Cordelia</Box>
    <Box display={{sm:"none", md:"flex"}} color='#3282AD'>Agatti</Box>
    <Box color='#3282AD'>More</Box>

    </Box>
    <PackageSlicker/>

    <button className='download_more'>Download more</button>
    
    </div>
  )
}

export default BestPackages