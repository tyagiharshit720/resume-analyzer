import React, { useState, useEffect } from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, LineChart, Line, PieChart, Pie, Cell, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, Radar } from 'recharts';
import { TrendingUp, Users, FileText, Award, Target, CheckCircle, AlertCircle, Clock, Star, Download, Play, Shield, Zap, BarChart3, ArrowRight, Mail, Github, Linkedin, Menu, X, Upload } from 'lucide-react';

const LandingPage = () => {
  const [animateCards, setAnimateCards] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [showComingSoon, setShowComingSoon] = useState(false);
  const [selectedFile, setSelectedFile] = useState(null);

  useEffect(() => {
    setAnimateCards(true);
  }, []);

  const handleFileUpload = (event) => {
    const file = event.target.files[0];
    if (file) {
      setSelectedFile(file);
      // Simulate processing delay
      setTimeout(() => {
        setShowComingSoon(true);
      }, 1000);
    }
  };

  // If coming soon page should be shown
  if (showComingSoon) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100 flex items-center justify-center px-6">
        <div className="bg-white rounded-2xl shadow-xl p-8 max-w-md w-full text-center">
          <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6">
            <FileText className="w-8 h-8 text-blue-500" />
          </div>
          <h1 className="text-2xl font-bold text-gray-800 mb-4">Feature Coming Soon!</h1>
          <p className="text-gray-600 mb-6">
            Our full resume analysis functionality is currently in development. 
            We're working hard to bring you the best resume optimization experience.
          </p>
          <p className="text-gray-600 mb-6">
            You uploaded: <span className="font-medium">{selectedFile?.name}</span>
          </p>
          <button 
            onClick={() => setShowComingSoon(false)}
            className="px-6 py-3 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors font-medium"
          >
            Return to Home
          </button>
        </div>
      </div>
    );
  }

  // Sample data for various charts
  const skillsData = [
    { skill: 'React', score: 85, category: 'Frontend' },
    { skill: 'Python', score: 92, category: 'Backend' },
    { skill: 'JavaScript', score: 88, category: 'Frontend' },
    { skill: 'SQL', score: 76, category: 'Database' },
    { skill: 'AWS', score: 69, category: 'Cloud' },
    { skill: 'Node.js', score: 82, category: 'Backend' }
  ];

  const experienceData = [
    { years: '0-1', count: 45, color: '#8884d8' },
    { years: '1-3', count: 78, color: '#82ca9d' },
    { years: '3-5', count: 52, color: '#ffc658' },
    { years: '5-10', count: 34, color: '#ff7c7c' },
    { years: '10+', count: 18, color: '#8dd1e1' }
  ];

  const trendsData = [
    { month: 'Jan', resumes: 120, matches: 89 },
    { month: 'Feb', resumes: 135, matches: 102 },
    { month: 'Mar', resumes: 148, matches: 118 },
    { month: 'Apr', resumes: 162, matches: 134 },
    { month: 'May', resumes: 178, matches: 156 },
    { month: 'Jun', resumes: 195, matches: 171 }
  ];

  const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042', '#8884D8'];

  const StatCard = ({ icon: Icon, title, value, change, color, delay }) => (
    <div 
      className={`bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-500 transform ${
        animateCards ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
      } hover:scale-105 border-l-4`}
      style={{ 
        borderLeftColor: color,
        animationDelay: `${delay}ms`,
        animation: animateCards ? 'slideInUp 0.6s ease-out forwards' : 'none'
      }}
    >
      <div className="flex items-center justify-between">
        <div>
          <p className="text-gray-600 text-sm font-medium">{title}</p>
          <p className="text-3xl font-bold text-gray-800 mt-1">{value}</p>
          <div className="flex items-center mt-2">
            <TrendingUp className="w-4 h-4 text-green-500 mr-1" />
            <span className="text-green-500 text-sm font-medium">{change}</span>
          </div>
        </div>
        <div className="p-3 rounded-full" style={{ backgroundColor: `${color}20` }}>
          <Icon className="w-8 h-8" style={{ color }} />
        </div>
      </div>
    </div>
  );

  const FeatureCard = ({ icon: Icon, title, description, color }) => (
    <div className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 border border-gray-100">
      <div className="p-3 rounded-full mb-4 inline-block" style={{ backgroundColor: `${color}20` }}>
        <Icon className="w-8 h-8" style={{ color }} />
      </div>
      <h3 className="text-xl font-bold text-gray-800 mb-2">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  );

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100">
      <style jsx>{`
        @keyframes slideInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        @keyframes pulse {
          0%, 100% { transform: scale(1); }
          50% { transform: scale(1.05); }
        }
        .animate-pulse-slow {
          animation: pulse 3s infinite;
        }
      `}</style>

      

      {/* Hero Section */}
      <section className="py-16 px-6">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
              Transform Your Resume Into <span className="text-blue-500">Career Opportunities</span>
            </h1>
            <p className="text-xl text-gray-600 mb-8">
              Our AI-powered resume analyzer helps you optimize your resume for better job matches, 
              higher response rates, and career growth.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <label className="px-8 py-4 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors flex items-center justify-center font-medium cursor-pointer">
                <Upload className="mr-2 w-5 h-5" />
                Upload & Analyze
                <input 
                  type="file" 
                  accept=".pdf,.doc,.docx,.txt" 
                  onChange={handleFileUpload}
                  className="hidden"
                />
              </label>
              <button className="px-8 py-4 bg-white text-blue-500 border border-blue-500 rounded-lg hover:bg-blue-50 transition-colors flex items-center justify-center font-medium">
                <Play className="mr-2 w-5 h-5" /> Watch Demo
              </button>
            </div>
            <div className="mt-8 flex items-center">
              <div className="flex -space-x-3">
                {[1, 2, 3, 4].map((item) => (
                  <div key={item} className="w-10 h-10 rounded-full bg-blue-100 border-2 border-white flex items-center justify-center">
                    <span className="text-blue-500 font-semibold text-xs">U{item}</span>
                  </div>
                ))}
              </div>
              <div className="ml-4">
                <p className="text-gray-600 text-sm"><span className="font-semibold">10,000+</span> professionals trust our analyzer</p>
                <div className="flex items-center">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <Star key={star} className="w-4 h-4 text-yellow-400 fill-current" />
                  ))}
                  <span className="ml-2 text-sm text-gray-600">4.9/5 from 2,500+ reviews</span>
                </div>
              </div>
            </div>
          </div>
          <div className="bg-white rounded-2xl shadow-xl p-6">
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-xl font-bold text-gray-800 flex items-center">
                <Target className="w-6 h-6 mr-2 text-blue-500" />
                Skills Analysis
              </h3>
              <div className="animate-pulse-slow">
                <Star className="w-6 h-6 text-yellow-500" />
              </div>
            </div>
            <ResponsiveContainer width="100%" height={300}>
              <BarChart data={skillsData}>
                <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
                <XAxis 
                  dataKey="skill" 
                  tick={{ fontSize: 12 }}
                  angle={-45}
                  textAnchor="end"
                  height={80}
                />
                <YAxis tick={{ fontSize: 12 }} />
                <Tooltip 
                  contentStyle={{
                    backgroundColor: '#1f2937',
                    border: 'none',
                    borderRadius: '8px',
                    color: 'white'
                  }}
                />
                <Bar 
                  dataKey="score" 
                  fill="url(#skillsGradient)"
                  radius={[4, 4, 0, 0]}
                />
                <defs>
                  <linearGradient id="skillsGradient" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#3b82f6" stopOpacity={0.9}/>
                    <stop offset="95%" stopColor="#1d4ed8" stopOpacity={0.6}/>
                  </linearGradient>
                </defs>
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-12 bg-white px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <StatCard
              icon={FileText}
              title="Resumes Analyzed"
              value="1,247,892"
              change="+12.5%"
              color="#3b82f6"
              delay={100}
            />
            <StatCard
              icon={CheckCircle}
              title="Matches Found"
              value="892,156"
              change="+8.2%"
              color="#10b981"
              delay={200}
            />
            <StatCard
              icon={Users}
              title="Active Users"
              value="456,789"
              change="+15.3%"
              color="#f59e0b"
              delay={300}
            />
            <StatCard
              icon={Award}
              title="Success Rate"
              value="87.3%"
              change="+3.1%"
              color="#ef4444"
              delay={400}
            />
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-16 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">Powerful Features for Your Career Success</h2>
            <p className="text-xl text-gray-600">
              Our AI-powered platform provides comprehensive resume analysis to help you stand out in the competitive job market.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <FeatureCard
              icon={Zap}
              title="Instant Analysis"
              description="Get detailed feedback on your resume in seconds with our advanced AI algorithms."
              color="#3b82f6"
            />
            <FeatureCard
              icon={BarChart3}
              title="ATS Optimization"
              description="Ensure your resume passes through Applicant Tracking Systems with optimized formatting and keywords."
              color="#10b981"
            />
            <FeatureCard
              icon={Target}
              title="Job Matching"
              description="Discover how well your resume matches specific job descriptions and requirements."
              color="#f59e0b"
            />
            <FeatureCard
              icon={Shield}
              title="Privacy First"
              description="Your data is always secure with enterprise-grade encryption and privacy controls."
              color="#ef4444"
            />
            <FeatureCard
              icon={TrendingUp}
              title="Career Insights"
              description="Get personalized recommendations to improve your skills and career trajectory."
              color="#8b5cf6"
            />
            <FeatureCard
              icon={Download}
              title="Multiple Formats"
              description="Export your optimized resume in PDF, Word, or plain text formats with one click."
              color="#ec4899"
            />
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section id="how-it-works" className="py-16 bg-white px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">How ResumeIQ Works</h2>
            <p className="text-xl text-gray-600">
              Getting your resume analyzed and optimized is simple and takes just a few minutes.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-2xl font-bold text-blue-500">1</span>
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-4">Upload Your Resume</h3>
              <p className="text-gray-600">Upload your existing resume in PDF, Word, or text format.</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-2xl font-bold text-blue-500">2</span>
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-4">AI Analysis</h3>
              <p className="text-gray-600">Our AI scans your resume for key factors that recruiters look for.</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-2xl font-bold text-blue-500">3</span>
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-4">Get Results & Improve</h3>
              <p className="text-gray-600">Receive detailed feedback and actionable recommendations.</p>
            </div>
          </div>
          
          <div className="mt-16 bg-gradient-to-r from-blue-500 to-indigo-600 rounded-2xl p-8 text-white">
            <div className="max-w-4xl mx-auto text-center">
              <h3 className="text-2xl md:text-3xl font-bold mb-4">Ready to Transform Your Resume?</h3>
              <p className="text-lg mb-8">Join thousands of professionals who have improved their job prospects with our AI-powered analysis.</p>
              <label className="px-8 py-3 bg-white text-blue-500 rounded-lg hover:bg-blue-50 transition-colors font-bold cursor-pointer inline-block">
                <Upload className="w-5 h-5 inline mr-2" />
                Upload Your Resume
                <input 
                  type="file" 
                  accept=".pdf,.doc,.docx,.txt" 
                  onChange={handleFileUpload}
                  className="hidden"
                />
              </label>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className="py-16 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">What Our Users Say</h2>
            <p className="text-xl text-gray-600">
              Hear from professionals who have transformed their job search with ResumeIQ.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                name: "Sarah Johnson",
                role: "Software Engineer",
                content: "After using ResumeIQ, I got 3x more interview calls. The keyword optimization feature is a game-changer!",
                avatar: "SJ"
              },
              {
                name: "Michael Chen",
                role: "Product Manager",
                content: "The ATS compatibility check helped me realize why my resume wasn't getting past automated systems.",
                avatar: "MC"
              },
              {
                name: "Jessica Williams",
                role: "Marketing Director",
                content: "I was able to tailor my resume for specific roles, which resulted in multiple job offers within weeks.",
                avatar: "JW"
              }
            ].map((testimonial, index) => (
              <div key={index} className="bg-white rounded-xl p-6 shadow-lg">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mr-4">
                    <span className="text-blue-500 font-semibold">{testimonial.avatar}</span>
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-800">{testimonial.name}</h4>
                    <p className="text-gray-600 text-sm">{testimonial.role}</p>
                  </div>
                </div>
                <p className="text-gray-600">{testimonial.content}</p>
                <div className="flex mt-4">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <Star key={star} className="w-4 h-4 text-yellow-400 fill-current" />
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default LandingPage;