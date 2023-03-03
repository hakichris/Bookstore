import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Books from './components/books';
import './App.css';
import Categories from './components/categories';
import Navbar from './components/Navbar';
import Form from './components/Form';

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Books title="Book1" author="Chris" />} />
        <Route path="/categories" element={<Categories />} />
      </Routes>
      <Form />
    </>
  );
}

export default App;
