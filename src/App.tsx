import './App.css'
import Footer from "./components/footer"
import Navbar from './components/navbar'

import Home from './pages/home'
import Incident from './pages/incidents'
import Login from './pages/login'
import Register from './pages/register'

import { Routes, Route } from "react-router-dom"

export default function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/incident" element={<Incident />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="*" element={<h1>404</h1>} />
      </Routes>
      <Footer />
    </>
  );
}
