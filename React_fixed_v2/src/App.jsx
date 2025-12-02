import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Dashboard from "./pages/Dashboard";



export default function App() {
  return (
    // this wrapper is redundant for background now, but keeps layout consistent
    <div className="min-h-screen w-full bg-transparent">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/details" element={<Details />} />
          <Route path="/settings" element={<Settings />} />
          <Route path="/transactions" element={<Transactions />} />

        </Routes>
      </BrowserRouter>
    </div>
  );
}
