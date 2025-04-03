import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Example from "./components/calculator";
// import DoctorSlots from './components/Doctor';
// import BookAppointment from './components/BookAppointment';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Example />} />
        {/* <Route path="/doctor-slots/:doctorName" element={<DoctorSlots />} />
        <Route path="/bookAppointment" element={<BookAppointment />} /> */}
      </Routes>
    </Router>
  );
}

export default App;
