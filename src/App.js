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
import Insertion from "./Pages/Quadratic/Insertion/Insertion";
import Gnome from "./Pages/Quadratic/Gnome/Gnome";
import Shaker from "./Pages/Quadratic/Shaker/Shaker";
import Odd from "./Pages/Quadratic/Odd/Odd";
import Pancake from "./Pages/Quadratic/Pancake/Pancake";
import Shell from "./Pages/Weird/Shell/Shell";
import Comb from "./Pages/Weird/Comb/Comb";
import Biitonic from "./Pages/Weird/Bitonic/Bitonic";
import Radix from "./Pages/Weird/Radix/Radix";
import Contact from "./Pages/contact";
import SortAlgorithm from "./Pages/SortAlgorithm";

function App() {
  return (
    <>
      <Header />
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/sortAlgorithm" element={<SortAlgorithm />} />
          <Route path="Logarithmic/Heap" element={<HeapSort />} />
          <Route path="Logarithmic/Merge" element={<Merge />} />
          <Route path="Logarithmic/Quick" element={<Quick />} />
          <Route path="Quadratic/Bubble" element={<Bubble />} />
          <Route path="Quadratic/Selection" element={<Selection />} />
          <Route path="Quadratic/Insertion" element={<Insertion />} />
          <Route path="Quadratic/Gnome" element={<Gnome />} />
          <Route path="Quadratic/Shaker" element={<Shaker />} />
          <Route path="Quadratic/Odd" element={<Odd />} />
          <Route path="Quadratic/Pancake" element={<Pancake />} />
          <Route path="Weird/Bitonic" element={<Biitonic />} />
          <Route path="Weird/Shell" element={<Shell />} />
          <Route path="Weird/Comb" element={<Comb />} />
          <Route path="Weird/Radix" element={<Radix />} />
        </Routes>
      </Router >
      <Foot />
    </>
  );
}

export default App;
