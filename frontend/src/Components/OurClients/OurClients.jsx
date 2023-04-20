import React from "react";
import "./OurClients.css";
import { Box } from "@chakra-ui/react";
import SocialProfileWithImage from "../UserProfileCard";
let users = [
  {
    name: "Satyam Gupta",
    location: "Toronto , CANADA",
    review:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque efficitur ac quam in congue.",
    avatar:
      "https://lh3.googleusercontent.com/a/AGNmyxbBMIKOlFTH_7nSr4jbVb4yiidj3h3nzWr6PNXyIQ=s288",
  },
  {
    name: "John Doe",
    location: "Texas, USA",
    review:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque efficitur ac quam in congue.",
    avatar:
      "https://images.unsplash.com/photo-1599566150163-29194dcaad36?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80",
  },
  {
    name: "kareena smith",
    location: "London, UK",
    review:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque efficitur ac quam in congue.",
    avatar:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8YXZhdGFyfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
  },
];

const OurClients = () => {
  return (
    <div className="ourclients">
      <div className="clients_heading">What Our Clients Says About Us</div>

      <Box display={{ sm: "grid", md: "flex" }} justifyContent={"space-around"}>
        {users.map((user) => (
          <SocialProfileWithImage user={user} />
        ))}
      </Box>
    </div>
  );
};

export default OurClients;
