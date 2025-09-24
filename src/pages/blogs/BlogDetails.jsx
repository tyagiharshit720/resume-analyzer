import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';

const BlogDetails = () => {
  const { id } = useParams();
  const [isBookmarked, setIsBookmarked] = useState(false);
  const [showShareMenu, setShowShareMenu] = useState(false);

  // Enhanced blog content with more detailed information
  const blogContent = {
    'top-skills-2025': {
      title: "Top 10 Skills Employers Look for in 2025: A Comprehensive Guide",
      tag: "CAREER TIPS",
      published: "January 10, 2025",
      updated: "September 23, 2025",
      readTime: "12 min read",
      author: {
        name: "Sarah Johnson",
        role: "Career Strategist",
        avatar: "👩‍💼"
      },
      excerpt: "Discover the essential skills that will make you stand out in the competitive job market of 2025 and beyond.",
      content: `
        <div class="mb-8">
          <p class="text-gray-700 mb-4 leading-relaxed text-lg">The job market is evolving at an unprecedented pace, and staying ahead requires understanding which skills will be most valuable in the coming years. Based on extensive research and industry trends, we've compiled the definitive list of top skills for 2025.</p>
        </div>

        <h2 class="text-3xl font-bold mt-12 mb-6 text-gray-900 border-b pb-2">1. Technical Expertise & Digital Literacy</h2>
        <p class="text-gray-700 mb-4 leading-relaxed">In 2025, employers highly value candidates with expertise in emerging technologies. The digital transformation across industries means that technical skills are no longer optional.</p>
        <div class="bg-blue-50 rounded-lg p-6 mb-6">
          <h3 class="font-semibold text-blue-900 mb-2">Key Areas to Focus On:</h3>
          <ul class="list-disc list-inside text-blue-800 space-y-1">
            <li>Artificial Intelligence and Machine Learning</li>
            <li>Cloud Computing (AWS, Azure, Google Cloud)</li>
            <li>Cybersecurity Fundamentals</li>
            <li>Data Analysis and Visualization</li>
            <li>Blockchain Technology</li>
          </ul>
        </div>

        <h2 class="text-3xl font-bold mt-12 mb-6 text-gray-900 border-b pb-2">2. Advanced Communication Skills</h2>
        <p class="text-gray-700 mb-4 leading-relaxed">Strong verbal and written communication helps in collaboration and project success across remote and hybrid work environments.</p>
        
        <h2 class="text-3xl font-bold mt-12 mb-6 text-gray-900 border-b pb-2">3. Critical Thinking & Problem-Solving</h2>
        <p class="text-gray-700 mb-4 leading-relaxed">Analytical thinking and the ability to solve complex problems are in high demand as automation handles routine tasks.</p>

        <h2 class="text-3xl font-bold mt-12 mb-6 text-gray-900 border-b pb-2">4. Adaptability & Learning Agility</h2>
        <p class="text-gray-700 mb-4 leading-relaxed">Being able to quickly adapt to new tools, workflows, and industry changes is crucial in today's fast-paced environment.</p>

        <h2 class="text-3xl font-bold mt-12 mb-6 text-gray-900 border-b pb-2">5. Emotional Intelligence</h2>
        <p class="text-gray-700 mb-4 leading-relaxed">EQ is becoming increasingly important for leadership and team collaboration.</p>

        <h2 class="text-3xl font-bold mt-12 mb-6 text-gray-900 border-b pb-2">6. Creativity & Innovation</h2>
        <p class="text-gray-700 mb-4 leading-relaxed">Thinking outside the box to develop novel solutions.</p>

        <h2 class="text-3xl font-bold mt-12 mb-6 text-gray-900 border-b pb-2">7. Leadership & Social Influence</h2>
        <p class="text-gray-700 mb-4 leading-relaxed">Guiding teams and influencing decisions effectively.</p>

        <h2 class="text-3xl font-bold mt-12 mb-6 text-gray-900 border-b pb-2">8. Cultural Intelligence</h2>
        <p class="text-gray-700 mb-4 leading-relaxed">Working effectively across diverse cultures and backgrounds.</p>

        <h2 class="text-3xl font-bold mt-12 mb-6 text-gray-900 border-b pb-2">9. Time Management & Productivity</h2>
        <p class="text-gray-700 mb-4 leading-relaxed">Maximizing efficiency in remote and flexible work settings.</p>

        <h2 class="text-3xl font-bold mt-12 mb-6 text-gray-900 border-b pb-2">10. Sustainability Skills</h2>
        <p class="text-gray-700 mb-4 leading-relaxed">Understanding and implementing eco-friendly practices.</p>

        <div class="bg-green-50 border-l-4 border-green-500 p-6 my-8 rounded-r-lg">
          <p class="text-green-800 font-medium text-lg">💡 Pro Tip: Focus on developing a balanced portfolio of both technical and soft skills. The most successful professionals in 2025 will be those who can combine technical expertise with strong interpersonal abilities.</p>
        </div>

        <div class="bg-gray-50 rounded-lg p-6 mt-8">
          <h3 class="font-bold text-gray-900 mb-3">Actionable Steps to Develop These Skills:</h3>
          <ol class="list-decimal list-inside text-gray-700 space-y-2">
            <li>Take online courses from platforms like Coursera, Udemy, or LinkedIn Learning</li>
            <li>Participate in workshops and webinars</li>
            <li>Seek mentorship from industry experts</li>
            <li>Practice through real-world projects</li>
            <li>Join professional communities and networks</li>
          </ol>
        </div>
      `
    },
    'technical-interview-guide': {
      title: "How to Ace Your Next Technical Interview: The Ultimate Guide",
      tag: "INTERVIEW ADVICE",
      published: "February 15, 2025",
      updated: "September 23, 2025",
      readTime: "15 min read",
      author: {
        name: "Michael Chen",
        role: "Senior Tech Recruiter",
        avatar: "👨‍💻"
      },
      excerpt: "Master the art of technical interviews with our comprehensive guide covering preparation, execution, and follow-up strategies.",
      content: `
        <div class="mb-8">
          <p class="text-gray-700 mb-4 leading-relaxed text-lg">Technical interviews can be daunting, but with proper preparation and the right mindset, you can significantly increase your chances of success. This guide covers everything from fundamental preparation to advanced strategies.</p>
        </div>

        <h2 class="text-3xl font-bold mt-12 mb-6 text-gray-900 border-b pb-2">Comprehensive Preparation Strategy</h2>
        
        <h3 class="text-2xl font-semibold mt-8 mb-4 text-gray-800">1. Technical Fundamentals Review</h3>
        <ul class="list-disc list-inside text-gray-700 mb-6 space-y-3">
          <li><strong>Data Structures:</strong> Arrays, Linked Lists, Trees, Graphs, Hash Tables</li>
          <li><strong>Algorithms:</strong> Sorting, Searching, Dynamic Programming, Recursion</li>
          <li><strong>System Design:</strong> Scalability, Databases, APIs, Caching</li>
          <li><strong>Language-Specific Concepts:</strong> Ensure deep understanding of your primary programming language</li>
        </ul>

        <div class="bg-yellow-50 rounded-lg p-6 mb-6">
          <h4 class="font-semibold text-yellow-900 mb-2">Recommended Practice Platforms:</h4>
          <ul class="list-disc list-inside text-yellow-800 space-y-1">
            <li>LeetCode for coding challenges</li>
            <li>HackerRank for skill assessments</li>
            <li>Pramp for mock interviews</li>
            <li>Educative for system design</li>
          </ul>
        </div>

        <h3 class="text-2xl font-semibold mt-8 mb-4 text-gray-800">2. Company Research</h3>
        <p class="text-gray-700 mb-4 leading-relaxed">Thoroughly research the company's products, technology stack, recent news, and interview process.</p>

        <h2 class="text-3xl font-bold mt-12 mb-6 text-gray-900 border-b pb-2">During the Interview</h2>
        
        <h3 class="text-2xl font-semibold mt-8 mb-4 text-gray-800">Communication Strategy</h3>
        <p class="text-gray-700 mb-4 leading-relaxed">Always explain your thought process clearly. Interviewers value how you approach problems as much as the solution itself.</p>

        <div class="bg-blue-50 rounded-lg p-6 mb-6">
          <h4 class="font-semibold text-blue-900 mb-2">Effective Communication Tips:</h4>
          <ul class="list-disc list-inside text-blue-800 space-y-1">
            <li>Clarify requirements before starting</li>
            <li>Think out loud throughout the process</li>
            <li>Ask relevant questions</li>
            <li>Discuss trade-offs of your approach</li>
          </ul>
        </div>

        <h2 class="text-3xl font-bold mt-12 mb-6 text-gray-900 border-b pb-2">Post-Interview Process</h2>
        <p class="text-gray-700 mb-4 leading-relaxed">Send a thoughtful thank-you note, reflect on your performance, and continue practicing regardless of the outcome.</p>
      `
    },
    'modern-resume-layouts': {
      title: "Modern Resume Layouts That Get You Noticed in 2025",
      tag: "RESUME TIPS",
      published: "March 20, 2025",
      updated: "September 23, 2025",
      readTime: "10 min read",
      author: {
        name: "Emily Rodriguez",
        role: "Professional Resume Writer",
        avatar: "👩‍🎓"
      },
      excerpt: "Transform your resume with modern layouts and design principles that capture recruiters' attention and showcase your value effectively.",
      content: `
        <div class="mb-8">
          <p class="text-gray-700 mb-4 leading-relaxed text-lg">Your resume is your personal marketing document. In today's competitive job market, having a modern, well-designed resume can make the difference between getting noticed and being overlooked.</p>
        </div>

        <h2 class="text-3xl font-bold mt-12 mb-6 text-gray-900 border-b pb-2">1. The Modern Chronological Resume</h2>
        <p class="text-gray-700 mb-4 leading-relaxed">Showcases your work history in reverse chronological order, ideal for experienced professionals with a strong career progression.</p>

        <div class="grid md:grid-cols-2 gap-6 mb-8">
          <div class="bg-gray-50 p-4 rounded-lg">
            <h4 class="font-semibold mb-2">✅ Best For:</h4>
            <ul class="list-disc list-inside text-sm text-gray-700">
              <li>Experienced professionals</li>
              <li>Clear career progression</li>
              <li>Industry veterans</li>
            </ul>
          </div>
          <div class="bg-gray-50 p-4 rounded-lg">
            <h4 class="font-semibold mb-2">❌ Avoid If:</h4>
            <ul class="list-disc list-inside text-sm text-gray-700">
              <li>Career changers</li>
              <li>Employment gaps</li>
              <li>Recent graduates</li>
            </ul>
          </div>
        </div>

        <h2 class="text-3xl font-bold mt-12 mb-6 text-gray-900 border-b pb-2">2. Functional Resume Format</h2>
        <p class="text-gray-700 mb-4 leading-relaxed">Focuses on skills and experience rather than work history, useful for career changers and those with employment gaps.</p>

        <h2 class="text-3xl font-bold mt-12 mb-6 text-gray-900 border-b pb-2">3. Combination/Hybrid Resume</h2>
        <p class="text-gray-700 mb-4 leading-relaxed">Combines chronological and functional formats, highlighting both skills and experience effectively.</p>

        <div class="bg-purple-50 border-l-4 border-purple-500 p-6 my-8 rounded-r-lg">
          <p class="text-purple-800 font-medium text-lg">🎨 Design Tip: Use clean layouts with subtle colors, consistent typography, and ample white space to make your resume visually appealing and easy to read. Consider incorporating a subtle color accent for section headers or your name.</p>
        </div>

        <h2 class="text-3xl font-bold mt-12 mb-6 text-gray-900 border-b pb-2">Essential Modern Resume Elements</h2>
        
        <div class="space-y-6">
          <div class="flex items-start">
            <div class="bg-green-100 p-2 rounded-full mr-4">💡</div>
            <div>
              <h4 class="font-semibold">Professional Summary</h4>
              <p class="text-gray-700">2-3 sentence elevator pitch at the top</p>
            </div>
          </div>
          
          <div class="flex items-start">
            <div class="bg-blue-100 p-2 rounded-full mr-4">📊</div>
            <div>
              <h4 class="font-semibold">Metrics & Achievements</h4>
              <p class="text-gray-700">Quantify your accomplishments with numbers</p>
            </div>
          </div>
          
          <div class="flex items-start">
            <div class="bg-yellow-100 p-2 rounded-full mr-4">🔗</div>
            <div>
              <h4 class="font-semibold">Digital Presence</h4>
              <p class="text-gray-700">Include LinkedIn and portfolio links</p>
            </div>
          </div>
        </div>
      `
    },
    'networking-strategies': {
      title: "Advanced Networking Strategies for Exponential Career Growth",
      tag: "CAREER DEVELOPMENT",
      published: "April 5, 2025",
      updated: "September 23, 2025",
      readTime: "14 min read",
      author: {
        name: "David Thompson",
        role: "Networking Expert",
        avatar: "👨‍💼"
      },
      excerpt: "Master the art of professional networking with advanced strategies that build meaningful connections and open doors to new opportunities.",
      content: `
        <div class="mb-8">
          <p class="text-gray-700 mb-4 leading-relaxed text-lg">Networking is not just about collecting business cards—it's about building genuine relationships that provide mutual value. In the digital age, effective networking requires both online and offline strategies.</p>
        </div>

        <h2 class="text-3xl font-bold mt-12 mb-6 text-gray-900 border-b pb-2">1. Strategic Event Participation</h2>
        <p class="text-gray-700 mb-4 leading-relaxed">Meet peers, mentors, and potential employers in your field at conferences and workshops.</p>

        <div class="bg-orange-50 rounded-lg p-6 mb-6">
          <h3 class="font-semibold text-orange-900 mb-2">Event Preparation Checklist:</h3>
          <ul class="list-disc list-inside text-orange-800 space-y-1">
            <li>Research attendees and speakers in advance</li>
            <li>Prepare your 30-second introduction</li>
            <li>Set specific networking goals</li>
            <li>Bring business cards or digital contact info</li>
          </ul>
        </div>

        <h2 class="text-3xl font-bold mt-12 mb-6 text-gray-900 border-b pb-2">2. Digital Networking Mastery</h2>
        <p class="text-gray-700 mb-4 leading-relaxed">Use LinkedIn and other platforms to connect with professionals and share your expertise.</p>

        <h2 class="text-3xl font-bold mt-12 mb-6 text-gray-900 border-b pb-2">3. Relationship Building Framework</h2>
        <p class="text-gray-700 mb-4 leading-relaxed">Focus on meaningful interactions rather than just collecting contacts.</p>

        <div class="grid md:grid-cols-2 gap-6 my-8">
          <div class="bg-green-50 p-6 rounded-lg">
            <h4 class="font-semibold text-green-900 mb-3">✅ Do's</h4>
            <ul class="list-disc list-inside text-green-800 space-y-2">
              <li>Provide value first</li>
              <li>Follow up consistently</li>
              <li>Personalize your messages</li>
              <li>Be genuine and authentic</li>
            </ul>
          </div>
          <div class="bg-red-50 p-6 rounded-lg">
            <h4 class="font-semibold text-red-900 mb-3">❌ Don'ts</h4>
            <ul class="list-disc list-inside text-red-800 space-y-2">
              <li>Ask for favors immediately</li>
              <li>Send generic messages</li>
              <li>Only connect when you need something</li>
              <li>Overwhelm with messages</li>
            </ul>
          </div>
        </div>

        <div class="bg-blue-50 border-l-4 border-blue-500 p-6 my-8 rounded-r-lg">
          <p class="text-blue-800 font-medium text-lg">🤝 Pro Tip: The most successful networkers focus on building relationships, not transactions. Always think about how you can provide value to your connections before asking for anything in return.</p>
        </div>

        <h2 class="text-3xl font-bold mt-12 mb-6 text-gray-900 border-b pb-2">Advanced Networking Techniques</h2>
        
        <div class="space-y-6">
          <div>
            <h4 class="font-semibold text-xl mb-2">The 5-3-1 Follow-up Rule</h4>
            <p class="text-gray-700">Connect within 5 days, follow up in 3 weeks, and check in after 1 month.</p>
          </div>
          
          <div>
            <h4 class="font-semibold text-xl mb-2">Value-Based Introduction</h4>
            <p class="text-gray-700">When introducing connections, explain the mutual value they can provide each other.</p>
          </div>
          
          <div>
            <h4 class="font-semibold text-xl mb-2">Digital Footprint Optimization</h4>
            <p class="text-gray-700">Ensure your online presence accurately reflects your professional brand.</p>
          </div>
        </div>
      `
    }
  };

  const post = blogContent[id];

  if (!post) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-900 mb-4">Blog post not found</h1>
          <Link to="/" className="text-blue-600 hover:text-blue-800">
            ← Back to Home
          </Link>
        </div>
      </div>
    );
  }

  const handleShare = (platform) => {
    const url = window.location.href;
    const text = `Check out this article: ${post.title}`;
    
    const shareUrls = {
      twitter: `https://twitter.com/intent/tweet?text=${encodeURIComponent(text)}&url=${encodeURIComponent(url)}`,
      linkedin: `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(url)}`,
      facebook: `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}`
    };

    window.open(shareUrls[platform], '_blank', 'width=600,height=400');
    setShowShareMenu(false);
  };

  const toggleBookmark = () => {
    setIsBookmarked(!isBookmarked);
    // Here you would typically save to localStorage or send to an API
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50 py-8">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Enhanced Breadcrumb */}
        <nav className="text-sm text-gray-600 mb-8 flex items-center">
          <Link to="/" className="text-blue-600 hover:text-blue-800 transition-colors duration-200">Home</Link>
          <span className="mx-2">›</span>
          <Link to="/" className="text-blue-600 hover:text-blue-800 transition-colors duration-200">Blog</Link>
          <span className="mx-2">›</span>
          <span className="text-gray-900 font-medium truncate">{post.title}</span>
        </nav>

        {/* Blog Article */}
        <article className="bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden">
          {/* Enhanced Header */}
          <header className="relative bg-gradient-to-r from-blue-600 to-purple-700 text-white px-6 py-12">
            <div className="absolute inset-0 bg-black opacity-10"></div>
            <div className="relative">
              <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-6 gap-4">
                <span className="inline-block bg-white text-blue-600 px-4 py-2 rounded-full text-sm font-semibold shadow-lg">
                  {post.tag}
                </span>
                <div className="flex items-center space-x-4">
                  <button 
                    onClick={toggleBookmark}
                    className={`p-2 rounded-full transition-all duration-200 ${
                      isBookmarked ? 'bg-yellow-100 text-yellow-600' : 'bg-white bg-opacity-20 text-white'
                    }`}
                  >
                    {isBookmarked ? '★ Bookmarked' : '☆ Bookmark'}
                  </button>
                  <div className="relative">
                    <button 
                      onClick={() => setShowShareMenu(!showShareMenu)}
                      className="bg-white bg-opacity-20 text-white px-4 py-2 rounded-full text-sm font-semibold hover:bg-opacity-30 transition-all duration-200"
                    >
                      Share
                    </button>
                    {showShareMenu && (
                      <div className="absolute right-0 mt-2 w-48 bg-white rounded-lg shadow-xl py-2 z-10">
                        <button onClick={() => handleShare('twitter')} className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                          Twitter
                        </button>
                        <button onClick={() => handleShare('linkedin')} className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                          LinkedIn
                        </button>
                        <button onClick={() => handleShare('facebook')} className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                          Facebook
                        </button>
                      </div>
                    )}
                  </div>
                </div>
              </div>
              
              <h1 className="text-4xl sm:text-5xl font-bold leading-tight mb-4">
                {post.title}
              </h1>
              
              <p className="text-blue-100 text-lg mb-6">{post.excerpt}</p>
              
              <div className="flex flex-wrap items-center justify-between gap-4">
                <div className="flex items-center space-x-4">
                  <span className="text-2xl">{post.author.avatar}</span>
                  <div>
                    <p className="font-semibold">{post.author.name}</p>
                    <p className="text-blue-200 text-sm">{post.author.role}</p>
                  </div>
                </div>
                
                <div className="flex flex-wrap gap-6 text-blue-200 text-sm">
                  <div className="flex items-center">
                    <span className="mr-2">📅</span>
                    Published: {post.published}
                  </div>
                  <div className="flex items-center">
                    <span className="mr-2">🔄</span>
                    Updated: {post.updated}
                  </div>
                  <div className="flex items-center">
                    <span className="mr-2">⏱️</span>
                    {post.readTime}
                  </div>
                </div>
              </div>
            </div>
          </header>

          {/* Content */}
          <div className="px-6 py-8">
            <div 
              className="prose prose-lg max-w-none"
              style={{
                fontSize: '1.125rem',
                lineHeight: '1.7'
              }}
              dangerouslySetInnerHTML={{ __html: post.content }}
            />
          </div>

          {/* Enhanced Footer */}
          <footer className="border-t border-gray-200 px-6 py-8 bg-gray-50">
            <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-6">
              <div className="flex-1">
                <h3 className="font-semibold text-gray-900 mb-3">About the Author</h3>
                <div className="flex items-center space-x-3">
                  <span className="text-2xl">{post.author.avatar}</span>
                  <div>
                    <p className="font-medium text-gray-900">{post.author.name}</p>
                    <p className="text-gray-600 text-sm">{post.author.role}</p>
                  </div>
                </div>
              </div>
              
              <div className="flex-1">
                <h3 className="font-semibold text-gray-900 mb-3">Tags & Categories</h3>
                <div className="flex flex-wrap gap-2">
                  <Link 
                    to={`/blog/tag/${post.tag.toLowerCase().replace(/\s/g, '-')}`} 
                    className="inline-block bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-sm font-medium hover:bg-blue-200 transition-colors duration-200"
                  >
                    #{post.tag}
                  </Link>
                  <span className="inline-block bg-green-100 text-green-700 px-3 py-1 rounded-full text-sm font-medium">
                    #CareerGrowth
                  </span>
                  <span className="inline-block bg-purple-100 text-purple-700 px-3 py-1 rounded-full text-sm font-medium">
                    #ProfessionalDevelopment
                  </span>
                </div>
              </div>
            </div>
            
            <div className="mt-6 pt-6 border-t border-gray-200 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
              <Link 
                to="/" 
                className="inline-flex items-center text-blue-600 hover:text-blue-800 font-semibold transition-colors duration-200 group"
              >
                <span className="mr-2 group-hover:-translate-x-1 transition-transform duration-200">←</span>
                Back to All Articles
              </Link>
              
              <div className="flex items-center space-x-4">
                <span className="text-gray-600 text-sm">Found this helpful?</span>
                <div className="flex space-x-2">
                  <button className="bg-green-100 text-green-700 px-3 py-1 rounded-lg text-sm font-medium hover:bg-green-200 transition-colors duration-200">
                    👍 Yes
                  </button>
                  <button className="bg-red-100 text-red-700 px-3 py-1 rounded-lg text-sm font-medium hover:bg-red-200 transition-colors duration-200">
                    👎 No
                  </button>
                </div>
              </div>
            </div>
          </footer>
        </article>

        {/* Enhanced Related Articles Section */}
        <section className="mt-12">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-3xl font-bold text-gray-900">Related Articles You Might Like</h2>
            <Link to="/" className="text-blue-600 hover:text-blue-800 font-semibold text-sm">
              View All →
            </Link>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {Object.entries(blogContent)
              .filter(([key]) => key !== id)
              .slice(0, 2)
              .map(([key, relatedPost]) => (
                <Link 
                  key={key} 
                  to={`/blog/${key}`}
                  className="group block bg-white rounded-xl shadow-md border border-gray-200 p-6 hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
                >
                  <span className="inline-block bg-gray-100 text-gray-600 px-3 py-1 rounded-full text-xs font-semibold mb-3">
                    {relatedPost.tag}
                  </span>
                  <h3 className="font-bold text-gray-900 mb-3 text-lg group-hover:text-blue-600 transition-colors duration-200 line-clamp-2">
                    {relatedPost.title}
                  </h3>
                  <p className="text-gray-600 text-sm mb-4 line-clamp-2">{relatedPost.excerpt}</p>
                  <div className="flex items-center justify-between text-sm text-gray-500">
                    <span>{relatedPost.readTime}</span>
                    <span className="group-hover:translate-x-1 transition-transform duration-200">→</span>
                  </div>
                </Link>
              ))}
          </div>
        </section>

        {/* Newsletter Subscription */}
        <section className="mt-12 bg-gradient-to-r from-blue-600 to-purple-700 rounded-2xl p-8 text-white">
          <div className="text-center">
            <h2 className="text-2xl font-bold mb-2">Stay Updated with Career Insights</h2>
            <p className="text-blue-100 mb-6">Get the latest career tips and industry insights delivered to your inbox</p>
            <div className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
              <input 
                type="email" 
                placeholder="Enter your email" 
                className="flex-1 px-4 py-3 rounded-lg text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-300"
              />
              <button className="bg-white text-blue-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors duration-200">
                Subscribe
              </button>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default BlogDetails;