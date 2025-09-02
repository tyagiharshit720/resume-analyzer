import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Sidebar from "./components/Sidebar";

import Dashboard from "./pages/Dashboard";
import Upload from "./pages/Upload";
// import Reports from "./pages/Reports";
// import Settings from "./pages/Settings";

function App() {
  return (
    <Router>
      <div className="flex">
        <Sidebar/>
        <div className="flex-1 p-6">
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/upload" element={<Upload />} />
            {/* <Route path="/reports" element={<Reports />} /> */}
            {/* <Route path="/settings" element={<Settings />} /> */}
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
