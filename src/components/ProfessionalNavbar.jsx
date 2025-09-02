import React, { useState } from "react";
import { Link } from "react-router-dom";
import { 
  Home, 
  Upload, 
  BarChart2, 
  Settings, 
  FileText,
  LayoutTemplate,
  LogIn,
  BookOpen,
  FileStack,
  Wand2,
  CheckSquare,
  Brain,
  Palette,
  Bookmark,
  Users,
  Briefcase,
  Code,
  GraduationCap,
  HeartHandshake,
  ChevronDown,
  Menu,
  X
} from "lucide-react"; 

const ProfessionalNavbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);

  const navItems = [
    // {
    //   name: "Dashboard",
    //   icon: <Home size={18} />,
    //   path: "/"
    // },
    {
      name: "Resume",
      icon: <FileText size={18} />,
      hasDropdown: true,
      dropdownContent: (
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 p-6 w-full max-w-4xl">
          {/* Upload Section */}
          {/* <div className="space-y-2">
            <div className="flex items-center gap-2 text-blue-600 font-semibold mb-2">
              <Upload size={16} />
              <span>Upload & Analyze</span>
            </div>
            <Link 
              to="/upload" 
              className="flex items-center gap-2 p-2 rounded-lg hover:bg-blue-50 transition-colors group"
              onClick={() => setActiveDropdown(null)}
            >
              <div className="bg-blue-100 p-2 rounded-lg group-hover:bg-blue-200 transition-colors">
                <Upload size={14} className="text-blue-600" />
              </div>
              <div>
                <div className="font-medium">Upload Resume</div>
                <div className="text-xs text-gray-500">Analyze your existing resume</div>
              </div>
            </Link>
          </div> */}

          {/* Templates Section */}
          <div className="space-y-2">
            <div className="flex items-center gap-2 text-blue-600 font-semibold mb-2">
              <LayoutTemplate size={16} />
              <span>Templates</span>
            </div>
            {[
              { title: "Creative Templates", icon: <Palette size={14} />, desc: "For creative industries to stand out", path: "/templates/creative" },
              { title: "Traditional Templates", icon: <Bookmark size={14} />, desc: "Professional formats for conservative fields", path: "/templates/traditional" },
              { title: "Modern Templates", icon: <LayoutTemplate size={14} />, desc: "Contemporary designs with style", path: "/templates/modern" },
              { title: "Simple Templates", icon: <FileText size={14} />, desc: "Clean and focused on content", path: "/templates/simple" }
            ].map((item, index) => (
              <Link 
                key={index}
                to={item.path}
                className="flex items-center gap-2 p-2 rounded-lg hover:bg-blue-50 transition-colors group"
                onClick={() => setActiveDropdown(null)}
              >
                <div className="bg-blue-100 p-2 rounded-lg group-hover:bg-blue-200 transition-colors">
                  {item.icon}
                </div>
                <div>
                  <div className="font-medium">{item.title}</div>
                  <div className="text-xs text-gray-500">{item.desc}</div>
                </div>
              </Link>
            ))}
          </div>

          {/* Guides Section */}
          <div className="space-y-2">
            <div className="flex items-center gap-2 text-blue-600 font-semibold mb-2">
              <BookOpen size={16} />
              <span>Writing Guides</span>
            </div>
            {[
              { title: "Resume Writing", icon: <FileText size={14} />, desc: "Complete guide to writing effective resumes", path: "/guides/writing" },
              { title: "Summary Examples", icon: <BookOpen size={14} />, desc: "How to write a compelling summary", path: "/guides/summary" },
              { title: "Format Selection", icon: <LayoutTemplate size={14} />, desc: "Choose the right format for your career", path: "/guides/format" },
              { title: "One-Page Resumes", icon: <FileText size={14} />, desc: "Tips for concise resume writing", path: "/guides/one-page" }
            ].map((item, index) => (
              <Link 
                key={index}
                to={item.path}
                className="flex items-center gap-2 p-2 rounded-lg hover:bg-blue-50 transition-colors group"
                onClick={() => setActiveDropdown(null)}
              >
                <div className="bg-blue-100 p-2 rounded-lg group-hover:bg-blue-200 transition-colors">
                  {item.icon}
                </div>
                <div>
                  <div className="font-medium">{item.title}</div>
                  <div className="text-xs text-gray-500">{item.desc}</div>
                </div>
              </Link>
            ))}
          </div>

          {/* Examples Section */}
          <div className="space-y-2">
            <div className="flex items-center gap-2 text-blue-600 font-semibold mb-2">
              <FileStack size={16} />
              <span>Examples</span>
            </div>
            {[
              { title: "Project Manager", icon: <Briefcase size={14} />, desc: "Resumes for project management roles", path: "/examples/project-manager" },
              { title: "Data Scientist", icon: <Code size={14} />, desc: "Examples for data science positions", path: "/examples/data-scientist" },
              { title: "Business Analyst", icon: <BarChart2 size={14} />, desc: "Resumes for business analysts", path: "/examples/business-analyst" },
              { title: "View All Examples", icon: <FileStack size={14} />, desc: "Browse all professional examples", path: "/examples" }
            ].map((item, index) => (
              <Link 
                key={index}
                to={item.path}
                className="flex items-center gap-2 p-2 rounded-lg hover:bg-blue-50 transition-colors group"
                onClick={() => setActiveDropdown(null)}
              >
                <div className="bg-blue-100 p-2 rounded-lg group-hover:bg-blue-200 transition-colors">
                  {item.icon}
                </div>
                <div>
                  <div className="font-medium">{item.title}</div>
                  <div className="text-xs text-gray-500">{item.desc}</div>
                </div>
              </Link>
            ))}
          </div>

          {/* Tools Section */}
          <div className="space-y-2">
            <div className="flex items-center gap-2 text-blue-600 font-semibold mb-2">
              <Wand2 size={16} />
              <span>Tools</span>
            </div>
            {[
              { title: "AI Resume Builder", icon: <Wand2 size={14} />, desc: "Create resumes with AI assistance", path: "/ai-builder" },
              { title: "Resume Checker", icon: <CheckSquare size={14} />, desc: "Analyze and improve your resume", path: "/checker" },
              { title: "Skills Optimizer", icon: <Brain size={14} />, desc: "Enhance your skills section", path: "/resume-skills" }
            ].map((item, index) => (
              <Link 
                key={index}
                to={item.path}
                className="flex items-center gap-2 p-2 rounded-lg hover:bg-blue-50 transition-colors group"
                onClick={() => setActiveDropdown(null)}
              >
                <div className="bg-blue-100 p-2 rounded-lg group-hover:bg-blue-200 transition-colors">
                  {item.icon}
                </div>
                <div>
                  <div className="font-medium">{item.title}</div>
                  <div className="text-xs text-gray-500">{item.desc}</div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      )
    },
    {
      name: "Reports",
      icon: <BarChart2 size={18} />,
      path: "/reports"
    },
    {
      name: "Login",
      icon: <LogIn size={18} />,
      path: "/login"
    }
  ];

  return (
    <nav className="bg-white shadow-md relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          {/* Logo */}
          <div className="flex items-center">
            <div className="flex-shrink-0 flex items-center">
              <FileText className="h-8 w-8 text-blue-600" />
              <span className="ml-2 text-xl font-bold text-gray-800">ResumeAnalyzer</span>
            </div>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-1">
            {navItems.map((item, index) => (
              <div 
                key={index} 
                className="relative"
                onMouseEnter={() => item.hasDropdown && setActiveDropdown(item.name)}
                onMouseLeave={() => setActiveDropdown(null)}
              >
                {item.path ? (
                  <Link
                    to={item.path}
                    className="flex items-center px-3 py-2 rounded-md text-sm font-medium text-gray-700 hover:text-blue-600 hover:bg-blue-50 transition-colors"
                  >
                    {item.icon}
                    <span className="ml-1">{item.name}</span>
                  </Link>
                ) : (
                  <button
                    className={`flex items-center px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                      activeDropdown === item.name ? "text-blue-600 bg-blue-50" : "text-gray-700 hover:text-blue-600 hover:bg-blue-50"
                    }`}
                  >
                    {item.icon}
                    <span className="ml-1">{item.name}</span>
                    <ChevronDown size={16} className="ml-1" />
                  </button>
                )}

                {/* Dropdown for Resume - Right aligned to prevent cutoff */}
                {item.hasDropdown && activeDropdown === item.name && (
                  <div 
                    className="absolute right-0 mt-1 bg-white rounded-lg shadow-xl z-50 border border-gray-200"
                    onMouseEnter={() => setActiveDropdown(item.name)}
                    onMouseLeave={() => setActiveDropdown(null)}
                    style={{ width: 'calc(100vw - 2rem)', maxWidth: '56rem' }}
                  >
                    {item.dropdownContent}
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:text-blue-600 hover:bg-blue-50 focus:outline-none transition-colors"
            >
              {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white border-t border-gray-200">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {navItems.map((item, index) => (
              <div key={index}>
                {item.path ? (
                  <Link
                    to={item.path}
                    className="flex items-center px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-blue-600 hover:bg-blue-50 transition-colors"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {item.icon}
                    <span className="ml-2">{item.name}</span>
                  </Link>
                ) : (
                  <div 
                    className="px-3 py-2 text-base font-medium text-gray-700 cursor-pointer"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    <div className="flex items-center">
                      {item.icon}
                      <span className="ml-2">{item.name}</span>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

export default ProfessionalNavbar;