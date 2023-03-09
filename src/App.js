import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Books from './pages/bookpage';
import './App.css';
import Categories from './pages/categories';
import Navbar from './components/Navbar';

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Books title="Book1" author="Chris" />} />
        <Route path="/categories" element={<Categories />} />
      </Routes>
    </>
  );
}

export default App;
