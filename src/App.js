import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import CompleteSignUp from "./pages/CompleteSignUp";
import Login from "./pages/Login";
import DashboardWrapper from "./components/DashboardWrapper/DashboardWrapper";
import Home from "./pages/Home";
import Activation from "./pages/Activation";
import Category from "./pages/Category";
import Billings from "./pages/Billings";
import Logs from "./pages/Logs";
import Update from './pages/Update'
import Settings from "./pages/Settings";
import {AuthProvider} from './context/authContext'
import Partners from './pages/Partners'
import Detail from "./pages/Detail";


function App() {
  return (
  <BrowserRouter>
    <AuthProvider>
      <Routes>
        {/* <Route path="/complete-signup" element={<CompleteSignUp />} /> */}
        <Route path="/" element={<Login />} />
        <Route element={<DashboardWrapper />}>
          <Route path="/home" element={<Home />} />
          <Route path="/details/:id" element={<Detail/>}/>
          <Route path="/activation" element={<Activation />} />
          <Route path="/update" element={<Update />} />
          <Route path="/Category" element={<Category />} />
          <Route path="/billing" element={<Billings />} />
          <Route path="/logs" element={<Logs />} />
          <Route path="/settings" element={<Settings />} />
          <Route path="/Partners" element={<Partners />} />
        
        </Route>
      </Routes>
    </AuthProvider>
  </BrowserRouter>
  );
}

export default App;
