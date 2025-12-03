import { BrowserRouter, Routes, Route } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
<<<<<<< HEAD:React_fixed_v2/src/App.jsx
import Transactions from "./pages/Transactions";
import Settings from "./pages/Settings";
import Details from "./pages/Details";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/transactions" element={<Transactions />} />
        <Route path="/transactions/:id" element={<Details />} />
        <Route path="/settings" element={<Settings />} />
      </Routes>
    </BrowserRouter>
=======
import Details from "./pages/Details";
import Settings from "./pages/Settings";
import Transactions from "./pages/Transactions";




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
>>>>>>> 9d9e56bdaa012ac02655c64db92913202e91d96e:Frontend/src/App.jsx
  );
}
