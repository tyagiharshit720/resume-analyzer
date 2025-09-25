import React from 'react';
import { Link } from 'react-router-dom';

const AtsOptimization = () => {
  const atsPosts = [
    {
      id: 1,
      tag: "ATS TIPS",
      tagLink: "/blog/tag/ats-tips/",
      title: "How to Optimize Your Resume for Applicant Tracking Systems",
      link: "/blog/ats-optimization-guide/",
      published: "1/15/2025",
      updated: "9/23/2025",
      readTime: "8 min read"
    },
    {
      id: 2,
      tag: "RESUME STRATEGY",
      tagLink: "/blog/tag/resume-strategy/",
      title: "Keywords That Get Your Resume Past ATS Filters",
      link: "/blog/ats-keywords/",
      published: "2/20/2025",
      updated: "9/23/2025",
      readTime: "10 min read"
    },
    {
      id: 3,
      tag: "TECHNICAL GUIDE",
      tagLink: "/blog/tag/technical-guide/",
      title: "ATS-Friendly Resume Formats and Templates",
      link: "/blog/ats-friendly-formats/",
      published: "3/10/2025",
      updated: "9/23/2025",
      readTime: "12 min read"
    },
    {
      id: 4,
      tag: "CAREER ADVICE",
      tagLink: "/blog/tag/career-advice/",
      title: "Common ATS Mistakes and How to Avoid Them",
      link: "/blog/ats-mistakes/",
      published: "4/25/2025",
      updated: "9/23/2025",
      readTime: "9 min read"
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50 py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-4xl font-bold text-center text-gray-900 mb-8">
          ATS Optimization
        </h1>
        
        <div className="flex flex-wrap -mx-2 pb-4">
          {atsPosts.map((post) => (
            <div key={post.id} className="w-full md:w-1/2 lg:w-1/4 px-2 mb-4 cursor-pointer">
              <div className="bg-white rounded-lg shadow-sm overflow-hidden relative pb-5 border border-gray-200 hover:shadow-lg transition-shadow duration-300">
                <div className="text-gray-600 text-sm font-semibold text-right mt-1 px-4">
                  <Link 
                    to={post.tagLink} 
                    className="hover:text-blue-600 transition-colors duration-200"
                  >
                    {post.tag}
                  </Link>
                </div>
                
                <h6 className="text-lg font-semibold px-4 mt-4 mb-4 leading-tight min-h-[60px]">
                  <Link 
                    to={post.link} 
                    className="text-gray-900 hover:text-blue-600 transition-colors duration-200 line-clamp-3"
                  >
                    {post.title}
                  </Link>
                </h6>
                
                <div className="px-4 mt-4">
                  <div className="text-xs text-gray-600 font-medium">
                    <div className="flex flex-wrap justify-between items-center mb-2">
                      <div className="flex items-center space-x-1">
                        <span>Published:</span>
                        <span>{post.published}</span>
                        <span>•</span>
                      </div>
                      <div>
                        <span>Updated:</span>
                        <span>{post.updated}</span>
                      </div>
                    </div>
                    <div>
                      <span>{post.readTime}</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AtsOptimization;