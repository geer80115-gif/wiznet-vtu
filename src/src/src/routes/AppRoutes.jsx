import { Routes, Route } from "react-router-dom";

import Landing from "../pages/Landing";
import Dashboard from "../pages/Dashboard";
import Register from "../pages/Register";
import Login from "../pages/Login";
import ForgotPassword from "../pages/ForgotPassword";
export default function AppRoutes(){

  return (

    <Routes>

      <Route 
        path="/" 
        element={<Landing />} 
      />
<Route
  path="/register"
  element={<Register />}
/>
      <Route
  path="/login"
  element={<Login />}
/>
      <Route
  path="/forgot-password"
  element={<ForgotPassword />}
/>
      <Route 
        path="/dashboard" 
        element={<Dashboard />} 
      />

    </Routes>

  );

}
