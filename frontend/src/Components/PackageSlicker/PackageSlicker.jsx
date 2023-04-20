import Slider from "react-slick";
import "./PackageSlicker.css"
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import React from 'react'
import PackageCard from "../PackageCard/PackageCard";
let slickData=[
{
    name:"Indonasia",
    desc:"Explore t he beauty of the island for 3 nights and 2 days with our travel agancy..",
    img_url:"https://images.unsplash.com/photo-1507525428034-b723cf961d3e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8YmVhY2glMjBzZWF8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60"
},{
    name:"Indonasia",
    desc:"Explore t he beauty of the island for 3 nights and 2 days with our travel agancy..",
    img_url:"https://images.unsplash.com/photo-1527437934671-61474b530017?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
},{
    name:"Indonasia",
    desc:"Explore t he beauty of the island for 3 nights and 2 days with our travel agancy..",
    img_url:"https://images.unsplash.com/photo-1521139869420-edaae1bc7b9a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8c2VhJTIwc2hpcHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60"
},{
    name:"Indonasia",
    desc:"Explore t he beauty of the island for 3 nights and 2 days with our travel agancy..",
    img_url:"https://images.unsplash.com/photo-1510525009512-ad7fc13eefab?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTJ8fHNoaXB8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60"
},{
    name:"Indonasia",
    desc:"Explore t he beauty of the island for 3 nights and 2 days with our travel agancy..",
    img_url:"https://plus.unsplash.com/premium_photo-1677343210300-717fba46be17?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=388&q=80"
}]
const PackageSlicker = () => {


    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
        arrows:false,
    
      
      };
      return (
        <Slider className="slider" {...settings}>
          {slickData.map((data) => (
          <PackageCard data={data}/>
          ))}
        </Slider>
      );
}

export default PackageSlicker