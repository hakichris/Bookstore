import React from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import Books from './components/books';
import './App.css'
import Categories from './components/categories';
import Navbar from './components/Navbar';

function App() {
  return (
    <>
      < Navbar />
      <Routes>
        <Route path="/" element={<Books />} />
        <Route path="/categories" element={<Categories />} />
      </Routes>
    </>
  )
}

export default App;
