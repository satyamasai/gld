import React from 'react'
import HomeTopBox from '../Components/HomeTopBox/HomeTopBox'
import FlightBooking from '../Components/FlightBooking/FlightBooking'
import BestPackages from '../Components/BestPackage/BestPackages'

import IslandStays from '../Components/IslandStays/IslandStays'
import OurClients from '../Components/OurClients/OurClients'



const Home = () => {
  return (
    <div className='home'>
    <HomeTopBox/>
    <FlightBooking/>
    <BestPackages/>
    <IslandStays/>
    <OurClients/>
    </div>
  )
}

export default Home