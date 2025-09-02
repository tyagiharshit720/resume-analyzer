import React from "react";
import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import ProfessionalNavbar from "./components/ProfessionalNavbar";
import Upload from "./pages/Upload";
import Login from "./auth/Login";
import ResumeSkills from "./pages/ResumeSkills";
import ResumeWritingGuide from "./pages/ResumeWritingGuide";
import LandingPage from "./pages/LandingPage";
import Footer from "./components/Footer";

function App() {
  return (
    <Router>
      <AppContent />
    </Router>
  );
}

const AppContent = () => {
  const location = useLocation();
  const isLoginPage = location.pathname === '/login';
  
  return (
    <div className="min-h-screen bg-gray-50">
      {!isLoginPage && <ProfessionalNavbar />}
      <div className={`${!isLoginPage ? "max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8" : "w-full"}`}>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/upload" element={<Upload />} />
          <Route path="/login" element={<Login />} />
          <Route path="/resume-skills" element={<ResumeSkills />} />
          <Route path="/resume-writing-guide" element={<ResumeWritingGuide />} />
        </Routes>
      </div>
      {!isLoginPage && <Footer />}
      
    </div>
  );
};

export default App;