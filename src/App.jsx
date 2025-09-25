import React from "react";
import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import ProfessionalNavbar from "./components/ProfessionalNavbar";
import Upload from "./pages/Upload";
import Login from "./auth/Login";
import ResumeSkills from "./pages/ResumeSkills";
import ResumeWritingGuide from "./pages/ResumeWritingGuide";
import LandingPage from "./pages/LandingPage";
import Footer from "./components/Footer";
import LatestResumeTrands from "./pages/blogs/LatestResumeTrends";
import BlogDetails from "./pages/blogs/BlogDetails";
import AtsOptimization from "./pages/blogs/atsOptimization/AtsOptimization";

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





          {/* blogs */}
          <Route path="/blog/resume-trends" element={<LatestResumeTrands />} />
          <Route path="/blog/:id" element={<BlogDetails />} />

          <Route path="/blog/ats-optimization" element={<AtsOptimization />} />



        </Routes>
      </div>
      {!isLoginPage && <Footer />}
      
    </div>
  );
};

export default App;