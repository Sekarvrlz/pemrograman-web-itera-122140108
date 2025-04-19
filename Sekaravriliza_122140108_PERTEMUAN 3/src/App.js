import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Stats from './pages/Stats';
import Header from './components/Header'; // Mengimpor Header
import Footer from './components/Footer'; // Mengimpor Footer
import './App.css';

const App = () => {
  return (
    <div className="App">
      {/* Menampilkan Header */}
      <Header />
      
      <div className="container">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/stats" element={<Stats />} />
        </Routes>
      </div>

      {/* Menampilkan Footer */}
      <Footer />
    </div>
  );
};

export default App;
