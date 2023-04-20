import React from "react";
import "./HomeTopBox.css";
import { Box, Button } from "@chakra-ui/react";
import { AttachmentIcon } from "@chakra-ui/icons";
import girl from "./girl.jpg";
const HomeTopBox = () => {
  return (
    <div className="hometop">
      <Box
        display={{ sm: "flex", md: "flex" }}
       
        m={"auto"}
        w="99%"
        h="100%"
      >
        <Box  w="50%" h="80%" mt="10%">
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
          mt="10%"
        >
          <Box className="right_img">
            <img src={girl} alt="" />
          </Box>
        </Box>
      </Box>
    </div>
  );
};

export default HomeTopBox;
