import React from 'react'
import HomeTopBox from '../Components/HomeTopBox/HomeTopBox'
import FlightBooking from '../Components/FlightBooking/FlightBooking'
import BestPackages from '../Components/BestPackage/BestPackages'
import PackageSlicker from '../Components/PackageSlicker/PackageSlicker'



const Home = () => {
  return (
    <div className='home'>
    <HomeTopBox/>
    <FlightBooking/>
    <BestPackages/>
    
    </div>
  )
}

export default Home