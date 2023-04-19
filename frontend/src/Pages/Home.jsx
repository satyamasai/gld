import React from 'react'
import HomeTopBox from '../Components/HomeTopBox/HomeTopBox'
import FlightBooking from '../Components/FlightBooking/FlightBooking'



const Home = () => {
  return (
    <div className='home'>
    <HomeTopBox/>
    <FlightBooking/>
    </div>
  )
}

export default Home