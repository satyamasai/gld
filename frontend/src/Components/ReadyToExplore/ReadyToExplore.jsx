import React from 'react'
import "./ReadyToExplore.css"
import { Button } from '@chakra-ui/react'
const ReadyToExplore = () => {
  return (
    <div className='rtoe'>
    <img className='rtoe_img' src="https://w7.pngwing.com/pngs/155/502/png-transparent-world-map-map-world-map-miscellaneous-blue-color-thumbnail.png" alt="" />
    <div className='inner_rtoe'>
       <div className='rtoe_heading'>
       <div>Let’s Ready to Explore The World With Us.</div>
       <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
       Pellentesque efficitur ac quam in congue. </p>
       </div>
      <Button >Contact Us</Button>
    </div>
    </div>
  )
}

export default ReadyToExplore