import React from "react";
import Foot from "./HeaderFooter/Footer";
import Home from "./Pages/Home";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./HeaderFooter/Header";
import HeapSort from "./Pages/Logarithmic/Heap";
import Merge from "./Pages/Logarithmic/Merge";

function App() {
  return (
    <>
      <Header />
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="Logarithmic/Heap" element={<HeapSort />} />
          <Route path="Logarithmic/Merge" element={<Merge />} />
        </Routes>
      </Router>
      <Foot />
    </>
  );
}

export default App;
