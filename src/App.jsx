import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import ScrollToTop from "./components/ScrollToTop";
import GDPRConsent from "./components/GDPRButton";
import PrivacyPolicy from "./components/PrivacyPolicy";
import TermsConditions from "./components/Term";
import DentRemovalPage from "./pages/DentRemoval";
import BumperRepairPage from "./pages/BumperRepairs";
import ScratchRepairPage from "./pages/ScratchRepair";
import ScrollToHash from "./components/ScrollToHash";


function App() {
  return (
    <Router>
      <ScrollToTop />
      <ScrollToHash />
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/dent-removal" element={<DentRemovalPage />} />
        <Route path="/bumper-repair" element={<BumperRepairPage />} />
        <Route path="/scratch-repair" element={<ScratchRepairPage />} />
        <Route path="/terms" element={<TermsConditions />} />
        <Route path="/privacy" element={<PrivacyPolicy />} />
      </Routes>
      <Footer />
      <GDPRConsent />
    </Router>
  );
}

export default App;
