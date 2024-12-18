import React from 'react';
import Foot from './HeaderFooter/Footer';
import Home from './Pages/Home';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './HeaderFooter/Header';

function App() {
  return (

    <>
      <Header />
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </Router>
      <Foot />
    </>
  );
}

export default App;
