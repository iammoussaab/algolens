import React from "react";
import Foot from "./HeaderFooter/Footer";
import Home from "./Pages/Home";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./HeaderFooter/Header";
import HeapSort from "./Pages/Logarithmic/Heap/Heap";
import Merge from "./Pages/Logarithmic/merge/Merge";
import Quick from "./Pages/Logarithmic/Quick/Quick";
import Bubble from "./Pages/Quadratic/Bubble/Bubble";
import Selection from "./Pages/Quadratic/Selection/Selection";

function App() {
  return (
    <>
      <Header />
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="Logarithmic/Heap" element={<HeapSort />} />
          <Route path="Logarithmic/Merge" element={<Merge />} />
          <Route path="Logarithmic/Quick" element={<Quick />} />
          <Route path="Quadratic/Bubble" element={<Bubble />} />
          <Route path="Quadratic/Selection" element={<Selection />} />

        </Routes>
      </Router>
      <Foot />
    </>
  );
}

export default App;
