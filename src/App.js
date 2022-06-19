import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import SignUp from "./pages/SignUp";
import CompleteSignUp from "./pages/CompleteSignUp";
import Login from "./pages/Login";
import DashboardWrapper from "./components/DashboardWrapper/DashboardWrapper";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<SignUp />} />
        <Route path="/complete-signup" element={<CompleteSignUp />} />
        <Route path="/login" element={<Login />} />
        <Route path="/home" element={<DashboardWrapper />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
