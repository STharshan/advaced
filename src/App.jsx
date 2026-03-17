import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Navbar from "./components/Navbar";
import ServicePage from "./pages/ServicePage";
import Footer from "./components/Footer";
import MotPage from "../src/pages/motpage"


function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/service" element={<ServicePage /> } />
        <Route path="/motPage" element={< MotPage /> } />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
