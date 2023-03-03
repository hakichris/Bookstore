import React from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import Books from './components/books';
import Categories from './components/categories';

function App() {
  return (
    <>
    <nav>
        <ul>
          <li><Link to="/books">Books</Link></li>
          <div className="verticalLine" />
          <li><Link to="/categories">Categories</Link></li>
        </ul>
      </nav>
      <Routes>
        <Route path="/books" element={<Books />} />
        <Route path="/categories" element={<Categories />} />
      </Routes>
    </>
  )
}

export default App;
