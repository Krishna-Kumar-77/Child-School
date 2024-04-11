import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import Dashboard from "./components/Dashboard"
import Services from "./components/Services";
import About from "./components/About";
import Choose from "./components/Choose";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
function App() {
  return (<>
  <BrowserRouter>
  <Routes>
  <Route index element={<Navigate replace to="dashboard" />} />
     <Route path="dashboard" element={<Dashboard />} />
     <Route path="services" element={ <Services/>} />
     <Route path="about" element={ <About/>} />
     <Route path="choose" element={ <Choose/>} />
     <Route path="contact" element={  <Contact/>} />
     <Route path="footer" element={ <Footer/>} />
  </Routes>
  <Footer/>
  </BrowserRouter>
    </>
  );
}

export default App;
