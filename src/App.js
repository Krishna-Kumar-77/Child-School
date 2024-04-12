import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import Dashboard from "./components/Dashboard"
import Services from "./components/Services";
import About from "./components/About";
import Choose from "./components/Choose";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Navigationbar from './ui/Navigationbar'
import styled from "styled-components";
import Blog from "./components/Blog";
const MyApp = styled.div`
width: 100%;
background-image: url('./images/banner-bg.png') ;
background-repeat: no-repeat;
background-size: 100%;
`
function App() {
  return (<MyApp>
  <BrowserRouter>
  <Navigationbar />
  <Routes>
  <Route index element={<Navigate replace to="dashboard" />} />
     <Route path="dashboard" element={<Dashboard />} />
     <Route path="services" element={ <Services/>} />
     <Route path="about" element={ <About/>} />
     <Route path="choose" element={ <Choose/>} />
     <Route path="blog" element={ <Blog/>} />
     <Route path="contact" element={  <Contact/>} />
     <Route path="footer" element={ <Footer/>} />
  </Routes>
  <Footer/>
  </BrowserRouter>
    </MyApp>
  );
}

export default App;
