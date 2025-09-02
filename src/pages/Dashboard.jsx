import React, { useState } from 'react';
import { Upload, FileText, User, Award, TrendingUp, Search, Filter, Download, Eye, Star, AlertCircle, CheckCircle, Clock } from 'lucide-react';

const Dashboard = () => {
  const [activeTab, setActiveTab] = useState('dashboard');
  const [selectedResume, setSelectedResume] = useState(null);
  const [uploadProgress, setUploadProgress] = useState(0);
  const [isUploading, setIsUploading] = useState(false);

  // Sample data
  const stats = {
    totalResumes: 120,
    analyzedToday: 15,
    pendingReviews: 8,
    averageScore: 7.2,
    topSkillMatch: 85
  };

  const recentUploads = [
    { id: 1, name: 'Harshit Tyagi', date: 'Sep 1, 2025', status: 'completed', score: 8.5, role: 'Software Engineer' },
    { id: 2, name: 'Amit Verma', date: 'Aug 31, 2025', status: 'analyzing', score: null, role: 'Data Scientist' },
    { id: 3, name: 'Rohit Singh', date: 'Aug 30, 2025', status: 'pending', score: 6.8, role: 'Frontend Developer' },
    { id: 4, name: 'Priya Sharma', date: 'Aug 29, 2025', status: 'completed', score: 9.1, role: 'Product Manager' },
    { id: 5, name: 'Karan Mehta', date: 'Aug 28, 2025', status: 'completed', score: 7.3, role: 'DevOps Engineer' }
  ];

  const analysisResults = {
    1: {
      score: 8.5,
      strengths: ['Strong technical skills', 'Relevant experience', 'Clear formatting', 'Good project descriptions'],
      weaknesses: ['Missing soft skills', 'No certifications mentioned', 'Could add more quantifiable achievements'],
      skills: ['JavaScript', 'React', 'Node.js', 'Python', 'AWS', 'Docker'],
      experience: '3 years',
      education: 'B.Tech Computer Science',
      matchPercentage: 85,
      recommendations: [
        'Add more quantifiable achievements (e.g., "Improved performance by 40%")',
        'Include relevant certifications',
        'Highlight leadership experience',
        'Add soft skills section'
      ]
    }
  };

  const handleFileUpload = (event) => {
    const file = event.target.files[0];
    if (file) {
      setIsUploading(true);
      setUploadProgress(0);
      
      // Simulate upload progress
      const interval = setInterval(() => {
        setUploadProgress(prev => {
          if (prev >= 100) {
            clearInterval(interval);
            setIsUploading(false);
            return 100;
          }
          return prev + 10;
        });
      }, 200);
    }
  };

  const getStatusColor = (status) => {
    switch (status) {
      case 'completed': return 'bg-green-100 text-green-700';
      case 'analyzing': return 'bg-yellow-100 text-yellow-700';
      case 'pending': return 'bg-red-100 text-red-700';
      default: return 'bg-gray-100 text-gray-700';
    }
  };

  const getStatusIcon = (status) => {
    switch (status) {
      case 'completed': return <CheckCircle className="w-4 h-4" />;
      case 'analyzing': return <Clock className="w-4 h-4" />;
      case 'pending': return <AlertCircle className="w-4 h-4" />;
      default: return null;
    }
  };

  const renderDashboard = () => (
    <div className="space-y-6">
      {/* Stats Section */}
      <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
        <div className="bg-gradient-to-r from-blue-500 to-blue-600 text-white rounded-xl p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-blue-100 text-sm">Total Resumes</p>
              <p className="text-3xl font-bold mt-1">{stats.totalResumes}</p>
            </div>
            <FileText className="w-8 h-8 text-blue-200" />
          </div>
        </div>
        
        <div className="bg-gradient-to-r from-green-500 to-green-600 text-white rounded-xl p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-green-100 text-sm">Analyzed Today</p>
              <p className="text-3xl font-bold mt-1">{stats.analyzedToday}</p>
            </div>
            <TrendingUp className="w-8 h-8 text-green-200" />
          </div>
        </div>
        
        <div className="bg-gradient-to-r from-orange-500 to-orange-600 text-white rounded-xl p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-orange-100 text-sm">Pending Reviews</p>
              <p className="text-3xl font-bold mt-1">{stats.pendingReviews}</p>
            </div>
            <Clock className="w-8 h-8 text-orange-200" />
          </div>
        </div>
        
        <div className="bg-gradient-to-r from-purple-500 to-purple-600 text-white rounded-xl p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-purple-100 text-sm">Average Score</p>
              <p className="text-3xl font-bold mt-1">{stats.averageScore}/10</p>
            </div>
            <Award className="w-8 h-8 text-purple-200" />
          </div>
        </div>
        
        <div className="bg-gradient-to-r from-indigo-500 to-indigo-600 text-white rounded-xl p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-indigo-100 text-sm">Top Match</p>
              <p className="text-3xl font-bold mt-1">{stats.topSkillMatch}%</p>
            </div>
            <Star className="w-8 h-8 text-indigo-200" />
          </div>
        </div>
      </div>

      {/* Upload Section */}
      <div className="bg-white rounded-xl shadow-lg p-6">
        <h2 className="text-xl font-semibold mb-4 flex items-center gap-2">
          <Upload className="w-5 h-5" />
          Upload Resume for Analysis
        </h2>
        
        <div className="border-2 border-dashed border-gray-300 rounded-lg p-8 text-center hover:border-blue-400 transition-colors">
          <input
            type="file"
            accept=".pdf,.doc,.docx"
            onChange={handleFileUpload}
            className="hidden"
            id="resumeUpload"
          />
          <label htmlFor="resumeUpload" className="cursor-pointer">
            <Upload className="w-12 h-12 text-gray-400 mx-auto mb-4" />
            <p className="text-lg font-medium text-gray-700">Drop your resume here or click to browse</p>
            <p className="text-sm text-gray-500 mt-2">Supports PDF, DOC, DOCX (Max 10MB)</p>
          </label>
          
          {isUploading && (
            <div className="mt-4">
              <div className="w-full bg-gray-200 rounded-full h-2">
                <div 
                  className="bg-blue-500 h-2 rounded-full transition-all duration-300"
                  style={{ width: `${uploadProgress}%` }}
                ></div>
              </div>
              <p className="text-sm text-gray-600 mt-2">Uploading... {uploadProgress}%</p>
            </div>
          )}
        </div>
      </div>

      {/* Recent Uploads Table */}
      <div className="bg-white rounded-xl shadow-lg p-6">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-xl font-semibold">Recent Uploads</h2>
          <div className="flex gap-2">
            <button className="flex items-center gap-2 px-3 py-2 bg-gray-100 rounded-lg hover:bg-gray-200 transition-colors">
              <Filter className="w-4 h-4" />
              Filter
            </button>
            <button className="flex items-center gap-2 px-3 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors">
              <Download className="w-4 h-4" />
              Export
            </button>
          </div>
        </div>
        
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="bg-gray-50">
                <th className="text-left py-3 px-4 font-medium text-gray-600">Candidate</th>
                <th className="text-left py-3 px-4 font-medium text-gray-600">Role</th>
                <th className="text-left py-3 px-4 font-medium text-gray-600">Date</th>
                <th className="text-left py-3 px-4 font-medium text-gray-600">Status</th>
                <th className="text-left py-3 px-4 font-medium text-gray-600">Score</th>
                <th className="text-left py-3 px-4 font-medium text-gray-600">Actions</th>
              </tr>
            </thead>
            <tbody>
              {recentUploads.map((resume) => (
                <tr key={resume.id} className="border-b hover:bg-gray-50">
                  <td className="py-4 px-4">
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center">
                        <User className="w-4 h-4 text-blue-600" />
                      </div>
                      <span className="font-medium">{resume.name}</span>
                    </div>
                  </td>
                  <td className="py-4 px-4 text-gray-600">{resume.role}</td>
                  <td className="py-4 px-4 text-gray-600">{resume.date}</td>
                  <td className="py-4 px-4">
                    <span className={`inline-flex items-center gap-1 px-3 py-1 rounded-full text-xs font-medium ${getStatusColor(resume.status)}`}>
                      {getStatusIcon(resume.status)}
                      {resume.status.charAt(0).toUpperCase() + resume.status.slice(1)}
                    </span>
                  </td>
                  <td className="py-4 px-4">
                    {resume.score ? (
                      <span className={`font-semibold ${resume.score >= 8 ? 'text-green-600' : resume.score >= 6 ? 'text-yellow-600' : 'text-red-600'}`}>
                        {resume.score}/10
                      </span>
                    ) : (
                      <span className="text-gray-400">-</span>
                    )}
                  </td>
                  <td className="py-4 px-4">
                    <button 
                      onClick={() => setSelectedResume(resume.id)}
                      className="flex items-center gap-1 px-3 py-1 text-blue-600 hover:bg-blue-50 rounded transition-colors"
                    >
                      <Eye className="w-4 h-4" />
                      View
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );

  const renderAnalysis = () => {
    if (!selectedResume || !analysisResults[selectedResume]) {
      return (
        <div className="text-center py-12">
          <FileText className="w-16 h-16 text-gray-300 mx-auto mb-4" />
          <p className="text-gray-500">Select a resume to view detailed analysis</p>
        </div>
      );
    }

    const analysis = analysisResults[selectedResume];
    const resume = recentUploads.find(r => r.id === selectedResume);

    return (
      <div className="space-y-6">
        {/* Header */}
        <div className="bg-white rounded-xl shadow-lg p-6">
          <div className="flex items-center justify-between">
            <div>
              <h2 className="text-2xl font-bold">{resume.name}</h2>
              <p className="text-gray-600">{resume.role}</p>
            </div>
            <div className="text-right">
              <div className="text-3xl font-bold text-blue-600">{analysis.score}/10</div>
              <div className="text-sm text-gray-500">Overall Score</div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Strengths & Weaknesses */}
          <div className="bg-white rounded-xl shadow-lg p-6">
            <h3 className="text-lg font-semibold mb-4 text-green-600">Strengths</h3>
            <ul className="space-y-2">
              {analysis.strengths.map((strength, index) => (
                <li key={index} className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0" />
                  <span className="text-sm">{strength}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="bg-white rounded-xl shadow-lg p-6">
            <h3 className="text-lg font-semibold mb-4 text-red-600">Areas for Improvement</h3>
            <ul className="space-y-2">
              {analysis.weaknesses.map((weakness, index) => (
                <li key={index} className="flex items-center gap-2">
                  <AlertCircle className="w-4 h-4 text-red-500 flex-shrink-0" />
                  <span className="text-sm">{weakness}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Skills & Experience */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <div className="bg-white rounded-xl shadow-lg p-6">
            <h3 className="text-lg font-semibold mb-4">Skills Identified</h3>
            <div className="flex flex-wrap gap-2">
              {analysis.skills.map((skill, index) => (
                <span key={index} className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-sm">
                  {skill}
                </span>
              ))}
            </div>
            <div className="mt-4 pt-4 border-t">
              <div className="flex justify-between text-sm">
                <span>Skill Match</span>
                <span className="font-semibold">{analysis.matchPercentage}%</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2 mt-2">
                <div 
                  className="bg-blue-500 h-2 rounded-full"
                  style={{ width: `${analysis.matchPercentage}%` }}
                ></div>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-xl shadow-lg p-6">
            <h3 className="text-lg font-semibold mb-4">Profile Summary</h3>
            <div className="space-y-3">
              <div className="flex justify-between">
                <span className="text-gray-600">Experience:</span>
                <span className="font-medium">{analysis.experience}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">Education:</span>
                <span className="font-medium">{analysis.education}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">Upload Date:</span>
                <span className="font-medium">{resume.date}</span>
              </div>
            </div>
          </div>
        </div>

        {/* Recommendations */}
        <div className="bg-white rounded-xl shadow-lg p-6">
          <h3 className="text-lg font-semibold mb-4">Recommendations</h3>
          <div className="space-y-3">
            {analysis.recommendations.map((rec, index) => (
              <div key={index} className="flex items-start gap-3 p-3 bg-blue-50 rounded-lg">
                <Star className="w-5 h-5 text-blue-500 flex-shrink-0 mt-0.5" />
                <span className="text-sm">{rec}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Navigation */}
      <nav className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div className="flex items-center space-x-8">
              <h1 className="text-xl font-bold text-gray-900">Resume Analyzer</h1>
              <div className="flex space-x-1">
                <button
                  onClick={() => setActiveTab('dashboard')}
                  className={`px-4 py-2 rounded-lg transition-colors ${
                    activeTab === 'dashboard' 
                      ? 'bg-blue-100 text-blue-700' 
                      : 'text-gray-600 hover:text-gray-900'
                  }`}
                >
                  Dashboard
                </button>
                <button
                  onClick={() => setActiveTab('analysis')}
                  className={`px-4 py-2 rounded-lg transition-colors ${
                    activeTab === 'analysis' 
                      ? 'bg-blue-100 text-blue-700' 
                      : 'text-gray-600 hover:text-gray-900'
                  }`}
                >
                  Analysis
                </button>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <Search className="w-5 h-5 text-gray-400" />
              <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center">
                <User className="w-4 h-4 text-white" />
              </div>
            </div>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {activeTab === 'dashboard' ? renderDashboard() : renderAnalysis()}
      </main>
    </div>
  );
};

export default Dashboard;