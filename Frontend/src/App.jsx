import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Predict from "./pages/Predict";
import StageTreatment from './pages/StageTreatment';
import Assesment from './pages/Assesment';
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import ScrollToHash from "./components/ScrollToHash";

function App() {
  return (
    <BrowserRouter>
      <ScrollToHash />
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/predict" element={<Predict />} />
        <Route path="/assesment" element={<Assesment />} />
        <Route path="/stage/:stageId" element={<StageTreatment />} />
      </Routes>

      <Footer />
    </BrowserRouter>
  );
}

export default App;