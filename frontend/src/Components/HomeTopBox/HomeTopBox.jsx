import React, { useEffect, useState } from "react";
import "./HomeTopBox.css";
import { Box, Button } from "@chakra-ui/react";
import { AttachmentIcon } from "@chakra-ui/icons";
import girl from "./girl.jpg";
import axios from "axios";
const HomeTopBox = () => {
  const [heroURL, setHeroURL] = useState("");

 const getHeroImage=async()=> {
    await axios
      .get("http://localhost:3113/getHeroImage")
      .then((res) => {
        console.log(res.data.data[0].imageURL);
        setHeroURL(res.data.data[0].imageURL)
      })
      .catch((err) => {
        console.log(err);
      });
  }

  useEffect(()=>{
  getHeroImage()
  },[heroURL])

  return (
    <div className="hometop">
      <Box display={{ sm: "flex", md: "flex" }} m={"auto"} w="99%" h="100%">
        <Box w="50%" h="80%" mt="10%">
          <Box className="inner_left_div">
            <Box className="visit_btn_box">
              Visit <AttachmentIcon />
            </Box>
            <Box className="home_title">
              The Exotic <span>Lakshadweep</span> Islands
            </Box>
            <Button className="discover_btn">Discover Now</Button>
          </Box>
        </Box>
        <Box
          display={"flex"}
          alignItems={"center"}
          justifyContent={"center"}
          w="50%"
          h="80%"
          mt="5%"
        >
          <Box className="right_img">
            <img src={heroURL} alt="heroimg" />
          </Box>
        </Box>
      </Box>
    </div>
  );
};

export default HomeTopBox;
