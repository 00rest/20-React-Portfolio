import './App.css';
import React from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import AboutMe from './components/AboutMe';
import Portfolio from './components/Portfolio';
import ContactMe from './components/ContactMe'
import Resume from './components/Resume';

import { BrowserRouter, Routes, Route } from 'react-router-dom';



function App() {
  return (
    <div>
      <BrowserRouter>
      <Header />
      <main>
        <Routes>
          <Route exact path='/' element={<AboutMe/>}/>
          <Route path='/aboutme' element={<AboutMe/>}/>
          <Route path='/portfolio' element={<Portfolio/>}/>
          <Route path='/contactme' element={<ContactMe/>}/>
          <Route path='/resume' element={<Resume/>}/>
        </Routes>
      </main>
      <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;