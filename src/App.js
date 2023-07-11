import React from 'react';
import './App.css';
import Home from './pages/Home';
import Services from './pages/Services';
import Trainings from './pages/Trainings';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import CisaTraining from './pages/CisaTraining';
import CisspTraining from './pages/CisspTraining';
import BusinessContinuity from './pages/BusinessContinuity';
import ItilTraining from './pages/ItilTraining';
import LinuxTraining from './pages/LinuxTraining';
import Contact from './pages/Contact';

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <div className="App-body">
          <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/services' element={<Services/>}/>
            <Route path='/trainings' element={<Trainings/>}/>
            <Route path='/cisa-training' element={<CisaTraining/>}/>
            <Route path='/cissp-training' element={<CisspTraining/>}/>
            <Route path='/introduction-to-business-continuity-disaster-recovery' element={<BusinessContinuity/>}/>
            <Route path='/itil-training' element={<ItilTraining/>}/>
            <Route path='/linux-training' element={<LinuxTraining/>}/>
            <Route path='/contact' element={<Contact/>}/>
          </Routes>
        </div>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
