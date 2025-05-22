import { createContext, useState } from "react"; // Added createContext import
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "../src/components/header/Header";
import "./App.css";
import Footer from "./components/footer/Footer";
import About from "./pages/About/About";
import Certifications from "./pages/Certifications/Certifications";
import Contact from "./pages/Contact/Contact";
import Home from "./pages/Home/Home";
import Portfolio from "./pages/Portfolio/Portfolio";
import Resume from "./pages/Resume/Resume";

export const MyContext = createContext();

function App() {
  const [showheaderfooter, setshowheaderfooter] = useState(true);

  const values = {
    showheaderfooter,
    setshowheaderfooter,
  };

  return (
    <BrowserRouter>
      <MyContext.Provider value={values}>
        {showheaderfooter && <Header />}
        <Routes>
          <Route path="/home" element={<Home />} /> {/* Fixed path to start with "/" */}
          <Route path="/" element={<Home />} />
          <Route path="/About" element={<About />} />
          <Route path="/Resume" element={<Resume />} />
         
          <Route path="/Portfolio" element={<Portfolio />} />
          <Route path="/Certifications" element={<Certifications />} />
            <Route path="/Contact" element={<Contact />} />
          
        </Routes>
        {showheaderfooter && <Footer />}
      </MyContext.Provider>
    </BrowserRouter>
  );
}

export default App;