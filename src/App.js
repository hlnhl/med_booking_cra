import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from './Components/Navbar/Navbar';
import Landing_Page from './Components/Landing_Page/Landing_Page';
import Sign_Up from './Components/Sign_Up/Sign_Up';
import Login from './Components/Login/Login';
import InstantConsultation from './Components/InstantConsultation/InstantConsultation';
import BookingConsultation from './Components/BookingConsultation/BookingConsultation';

function App() {
  return (
    <div className="App">
        <BrowserRouter>
            <Navbar />
            <Routes>
                <Route path="/" element={<Landing_Page />} />
                <Route path="/sign_up" element={<Sign_Up />} />
                <Route path="/login" element={<Login />} />
                <Route path="/instant-consultation" element={<InstantConsultation />} />
                <Route path="/appointments" element={<BookingConsultation />} />
            </Routes>
        </BrowserRouter>
    </div>
  );
}

export default App;
