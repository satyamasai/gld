import React from 'react'
import HomeTopBox from '../Components/HomeTopBox/HomeTopBox'
import FlightBooking from '../Components/FlightBooking/FlightBooking'
import BestPackages from '../Components/BestPackage/BestPackages'
import PackageSlicker from '../Components/PackageSlicker/PackageSlicker'
import IslandStays from '../Components/IslandStays/IslandStays'



const Home = () => {
  return (
    <div className='home'>
    <HomeTopBox/>
    <FlightBooking/>
    <BestPackages/>
    <IslandStays/>
    
    </div>
  )
}

export default Home