import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from "../components/Navbar";
import Login from "../pages/Login";
import Register from "../pages/Register";
import Dashboard from "../pages/Dashboard";
import Interview from "../pages/Interview";

function AppRoutes() {
  return (
    <BrowserRouter>
      <Navbar />

      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/interview" element={<Interview />} />
      </Routes>
    </BrowserRouter>
  );
}

export default AppRoutes;