import { useState } from "react";
import "./app.scss";
import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";

import Home from "./pages/Home";
import About from "./pages/About";
import Booking from "./pages/Booking";
import Contact from "./pages/Contact";
import FAQ from "./pages/FAQ";
import Transportation from "./pages/Transportation";
import Lodging from "./pages/Lodging";
import Restaurants from "./pages/Restaurants";
import Layout from "./Layout";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route path="/about" element={<About />} />
            <Route path="/transportation" element={<Transportation />} />
            <Route path="/lodging" element={<Lodging />} />
            <Route path="/booking" element={<Booking />} />
            <Route path="/restaurants" element={<Restaurants />} />
            <Route path="/faq" element={<FAQ />} />
            <Route path="/contact-us" element={<Contact />} />
            <Route index element={<Home />} />
            <Route path="*" element={<Navigate to="/" replace />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
