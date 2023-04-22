import React from "react";
import "./BlackBox.css";
import { Box, Flex } from "@chakra-ui/react";
const BlackBox = () => {
  return (
    <div className="blackbox">
      <Flex alignItems="center" textAlign={"center"} justify={"space-around"}>
        <Box
          mt={"30px"}
          display={"flex"}
          flexDirection={"column"}
          justifyContent={"space-around"}
          w={"45%"}
          h="190px"
        >
          <div
            style={{
              fontSize: "32px",
              fontWeight: "bolder",
              color: "white",
              textAlign: "left",
            }}
          >
            Download Our App
          </div>
          <p style={{ color: "white", textAlign: "left" }}>
            The best travel in the world
          </p>
          <img
            style={{ width: "184.17px", height: "53.91px" }}
            src="https://www.seekmed.care/assets/get-on-google-play.webp?v1"
            alt=""
          />
        </Box>
        <Box mt={"30px"} w={"220px"} h="190px" >
          <div className="mobile_circle">
          <img src="https://static.vecteezy.com/system/resources/previews/008/850/474/original/3d-render-mobile-phone-png.png" alt="mobile" /></div>
        </Box>
      </Flex>
    </div>
  );
};

export default BlackBox;
