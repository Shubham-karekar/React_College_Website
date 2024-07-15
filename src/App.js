// React-router-dom
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

// Styling css
import "./App.css";

// Components
import Navbar from "./Components/Navbar";
import Menubar from "./Components/Menubar.js";
import Home from "./Components/Home.js";
import About from "./Components/About.js";
import Contact from "./Components/Contact.js";
import Administration from "./Components/Administration.js";
import Commerce from "./Components/Commerce.js";
import Bca from "./Components/Bca.js";
import Bba from "./Components/Bba.js";
import Bcom from "./Components/bcom.js";
import Mcom from "./Components/Mcom.js";
import Academics from "./Components/Academics.js";

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Menubar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/administration" element={<Administration />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/academics" element={<Academics />} />
          <Route path="/commerce" element={<Commerce />} />
          <Route path="/bca" element={<Bca />} />
          <Route path="/bba" element={<Bba />} />
          <Route path="/bcom" element={<Bcom />} />
          <Route path="/mcom" element={<Mcom />} />
          
        </Routes>
      </Router>
    </>
  );
}

export default App;
