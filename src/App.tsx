import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Hello } from './components/hello';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Nav } from './components/Nav';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { Home } from './pages/Home';
import { About } from './pages/About';

function App() {
  return (
    <Router>
      <Header/>
      <Nav/>
      <main className="main-content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </main>
      <Footer />
      </Router>
  );
}

export default App;
