import React from "react";
import { Route, Routes } from "react-router-dom";

import Home from "./Home";
import Signup from "./SignupandLogin/Signup";
import Login from "./SignupandLogin/Login";
import AdminDashboard from "./Admin/AdminDashboard";
import { Box } from "@chakra-ui/react";




const AllRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/login" element={<Login />} />
      <Route path="/admin" element={<AdminDashboard />} /> 
      <Route path="*" element={<Box w='100vw' mt={200} h={'400px'} >Error 404....</Box>} /> 
      
     
    </Routes>
  );
};

export default AllRoutes;
