import React from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Nav } from './components/Nav/Nav';
import { Header } from './components/Header/Header';
import { Footer } from './components/Footer/Footer';
import { Home } from './pages/Home';
import { About } from './pages/About';
import { Login } from './pages/Login';
import { Registro } from './pages/Registro';

function App() {
  return (
    <div className="app-container">
      <Router>
        <Header />
        <Nav />
        <main className="main main-content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/About" element={<About />} />
            <Route path="/Login" element={<Login />} />
            <Route path="/Registro" element={<Registro />} />
          </Routes>
        </main>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
