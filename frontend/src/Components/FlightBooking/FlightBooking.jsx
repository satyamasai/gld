import React from "react";
import "./FlightBooking.css";
import { Button, Input } from "@chakra-ui/react";
const FlightBooking = () => {
  return (
    <div className="flight_booking">
      <div className="flightbookintext">Where are you flying</div>
      <div className="input_box_div">
        <Input placeholder="From - To" />
        <Input placeholder="Trip" />
        <Input placeholder="Deport Return" />
        <Input placeholder="Passenger Class" />
      </div>
      <div className="show_flight_btn_div">
      <Button>Add Promo Code</Button>
      <button className="show_flights_btn">Show Flights</button>
      </div>
    </div>
  );
};

export default FlightBooking;
