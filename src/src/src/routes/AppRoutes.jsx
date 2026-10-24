import { Routes, Route } from "react-router-dom";

import Landing from "../pages/Landing";
import Dashboard from "../pages/Dashboard";
import Register from "../pages/Register";

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
        path="/dashboard" 
        element={<Dashboard />} 
      />

    </Routes>

  );

}
