import { Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import Login from "../pages/Login";
import Event from "../pages/Event";
import MainLayout from "../layouts/MainLayout";

function Router() {
    return (
      <Routes>
        <Route path="/" element={<MainLayout><Home /></MainLayout>} />
        <Route path="/login" element={<MainLayout><Login /></MainLayout>} />
        <Route path="/event" element={<MainLayout><Event /></MainLayout>} />
      </Routes>
    );
  }
  
  export default Router;
  