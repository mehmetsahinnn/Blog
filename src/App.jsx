import './App.css';
import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Blog from './pages/Blog/Blog';
import Home from './pages/Home/Home';

const App = () => {
  return (
    <div className="container">
      <switch>
        <Routes>
          <Route path="/" exact Component={Home} />
          <Route path="/blog/:id" Component={Blog} />
        </Routes>
      </switch>
    </div>
  );
}

export default App;
