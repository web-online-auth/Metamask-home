import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import Sign from './Pages/Sign';
import Damg from './Pages/Damg';
import EmailForm from './Pages/EmailForm';
import Verify from './Pages/Verify';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/sign" element={<Sign/>} />
        <Route path="/verify" element={<Verify/>} />
        <Route path="/Damg" element={<Damg/>} />


      </Routes>
    </BrowserRouter>
  );
}

export default App;
