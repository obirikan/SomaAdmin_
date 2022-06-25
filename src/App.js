import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import SignUp from "./pages/SignUp";
import CompleteSignUp from "./pages/CompleteSignUp";
import Login from "./pages/Login";
import DashboardWrapper from "./components/DashboardWrapper/DashboardWrapper";
import Home from "./pages/Home";
import Activation from "./pages/Activation";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<SignUp />} />
        <Route path="/complete-signup" element={<CompleteSignUp />} />
        <Route path="/login" element={<Login />} />
        <Route element={<DashboardWrapper />}>
          <Route path="/home" element={<Home />} />
          <Route path="/activation" element={<Activation />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
