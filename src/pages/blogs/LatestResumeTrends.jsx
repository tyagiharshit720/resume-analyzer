import React from 'react';
import { Link } from 'react-router-dom';

const LatestResumeTrends = () => {
  const blogPosts = [
    {
      id: 1,
      tag: "CAREER TIPS",
      tagLink: "/blog/tag/career-tips/",
      title: "Top 10 Skills Employers Look for in 2025",
      link: "/blog/top-skills-2025/",
      published: "1/10/2025",
      updated: "9/23/2025",
      readTime: "12 min read"
    },
    {
      id: 2,
      tag: "INTERVIEW ADVICE",
      tagLink: "/blog/tag/interview-advice/",
      title: "How to Ace Your Next Technical Interview",
      link: "/blog/technical-interview-guide/",
      published: "2/15/2025",
      updated: "9/23/2025",
      readTime: "15 min read"
    },
    {
      id: 3,
      tag: "RESUME TIPS",
      tagLink: "/blog/tag/resume-tips/",
      title: "Modern Resume Layouts That Get You Noticed",
      link: "/blog/modern-resume-layouts/",
      published: "3/20/2025",
      updated: "9/23/2025",
      readTime: "10 min read"
    },
    {
      id: 4,
      tag: "CAREER DEVELOPMENT",
      tagLink: "/blog/tag/career-development/",
      title: "Networking Strategies for Career Growth",
      link: "/blog/networking-strategies/",
      published: "4/5/2025",
      updated: "9/23/2025",
      readTime: "14 min read"
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50 py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-4xl font-bold text-center text-gray-900 mb-8">
          Latest Resume Trends
        </h1>
        
        <div className="flex flex-wrap -mx-2 pb-4">
          {blogPosts.map((post) => (
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

export default LatestResumeTrends;
