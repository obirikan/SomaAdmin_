import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import CompleteSignUp from "./pages/CompleteSignUp";
import Login from "./pages/Login";
import DashboardWrapper from "./components/DashboardWrapper/DashboardWrapper";
import Home from "./pages/Home";
import Activation from "./pages/Activation";
import Integrations from "./pages/Integrations";
import Billings from "./pages/Billings";
import Logs from "./pages/Logs";
import Update from './pages/Update'
import Settings from "./pages/Settings";
import {AuthProvider} from './context/authContext'

function App() {
  return (
  <BrowserRouter>
    <AuthProvider>
      <Routes>
        {/* <Route path="/complete-signup" element={<CompleteSignUp />} /> */}
        <Route path="/" element={<Login />} />
        <Route element={<DashboardWrapper />}>
          <Route path="/home" element={<Home />} />
          <Route path="/activation" element={<Activation />} />
          <Route path="/update" element={<Update />} />
          <Route path="/integrations" element={<Integrations />} />
          <Route path="/billing" element={<Billings />} />
          <Route path="/logs" element={<Logs />} />
          <Route path="/settings" element={<Settings />} />
        </Route>
      </Routes>
    </AuthProvider>
  </BrowserRouter>
  );
}

export default App;
