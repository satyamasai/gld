import React from "react";
import { Route, Routes } from "react-router-dom";

import Home from "./Home";
import Signup from "./SignupandLogin/Signup";
import Login from "./SignupandLogin/Login";
import AdminDashboard from "./Admin/AdminDashboard";
import { Box } from "@chakra-ui/react";
import AdminLogin from "./Admin/AdminLogin";
import PrivateRoute from "./Private/PrivateRoute";




const AllRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/login" element={<Login />} />
      <Route path="/admindashboard" element={<PrivateRoute>
        <AdminDashboard />
        </PrivateRoute>
      } /> 
      <Route path="/admin/login" element={<AdminLogin />} /> 
      <Route path="*" element={<Box w='100vw' mt={200} h={'400px'} >Page not found....</Box>} /> 
      
     
    </Routes>
  );
};

export default AllRoutes;
