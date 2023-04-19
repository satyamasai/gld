import React from "react";
import "./HomeTopBox.css";
import { Box, Button } from "@chakra-ui/react";
import { AttachmentIcon } from "@chakra-ui/icons";
import girl from "./girl.jpg"
const HomeTopBox = () => {
  return (
    <div className="hometop">
      <Box
        display={{ md: "flex" }}
        border={"1px"}
        borderColor={"green"}
        m={"auto"}
        w="95%"
        h="100%"
      >
        <Box border={"1px"} borderColor={"teal"} w="40%" h="80%" mt="10%">
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
        <Box border={"1px"} borderColor={"teal"} w="60%" h="80%" mt="10%">
        
        <Box className="right_img">
        
       </Box>
        
        </Box>
      </Box>
    </div>
  );
};

export default HomeTopBox;
