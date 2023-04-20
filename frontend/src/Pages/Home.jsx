import React from "react";
import HomeTopBox from "../Components/HomeTopBox/HomeTopBox";
import FlightBooking from "../Components/FlightBooking/FlightBooking";
import BestPackages from "../Components/BestPackage/BestPackages";

import IslandStays from "../Components/IslandStays/IslandStays";
import OurClients from "../Components/OurClients/OurClients";
import ReadyToExplore from "../Components/ReadyToExplore/ReadyToExplore";
import BlackBox from "../Components/BlackBox/BlackBox";

const Home = () => {
  return (
    <div className="home">
      <HomeTopBox />
      <FlightBooking />
      <BestPackages />
      <IslandStays />
      <ReadyToExplore />
      <OurClients />
      <BlackBox/>
    </div>
  );
};

export default Home;
