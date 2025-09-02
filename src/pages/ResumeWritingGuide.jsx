import React, { useState } from 'react';

const ResumeWritingGuide = () => {
  const [activeSection, setActiveSection] = useState('contact-info');

  const guideSections = [
    {
      id: 'contact-info',
      title: 'Contact Information',
      icon: '📱',
      content: (
        <div>
          <h3 className="text-xl font-semibold mb-3 text-blue-700">Essential Contact Details</h3>
          <ul className="list-disc pl-5 space-y-2 mb-4">
            <li>Full Name (as it appears on official documents)</li>
            <li>Professional Email Address (avoid nicknames)</li>
            <li>Phone Number with country code</li>
            <li>Location (City, State/Country)</li>
            <li>LinkedIn Profile URL (ensure it's updated)</li>
            <li>Personal website/portfolio (if relevant)</li>
          </ul>
          <div className="bg-blue-50 p-4 rounded-lg border-l-4 border-blue-500">
            <p className="font-medium text-blue-800">Pro Tip:</p>
            <p>Make sure your voicemail is professional and your email address is appropriate for job applications.</p>
          </div>
        </div>
      )
    },
    {
      id: 'professional-summary',
      title: 'Professional Summary',
      icon: '📝',
      content: (
        <div>
          <h3 className="text-xl font-semibold mb-3 text-blue-700">Crafting an Impactful Summary</h3>
          <p className="mb-4">A professional summary should be a 3-4 sentence paragraph that highlights your key qualifications, experiences, and career goals.</p>
          <ul className="list-disc pl-5 space-y-2 mb-4">
            <li>Tailor it to the specific job you're applying for</li>
            <li>Include your years of experience and key skills</li>
            <li>Mention your most significant achievements</li>
            <li>Highlight what you can bring to the role</li>
          </ul>
          <div className="bg-gray-50 p-4 rounded-lg mb-4">
            <h4 className="font-semibold text-gray-800 mb-2">Example:</h4>
            <p className="italic text-gray-700">"Results-driven marketing professional with 5+ years of experience in digital campaign management. Specialized in SEO optimization and data-driven strategy development that increased organic traffic by 150% at previous role. Seeking to leverage expertise in growth marketing at a innovative tech company."</p>
          </div>
        </div>
      )
    },
    {
      id: 'work-experience',
      title: 'Work Experience',
      icon: '💼',
      content: (
        <div>
          <h3 className="text-xl font-semibold mb-3 text-blue-700">Highlighting Your Professional Journey</h3>
          <ul className="list-disc pl-5 space-y-2 mb-4">
            <li>List experiences in reverse chronological order (most recent first)</li>
            <li>Include company name, your title, dates of employment, and location</li>
            <li>Use bullet points to describe responsibilities and achievements</li>
            <li>Start each bullet point with strong action verbs</li>
            <li>Quantify achievements whenever possible (e.g., "Increased sales by 25%")</li>
            <li>Focus on accomplishments rather than just duties</li>
          </ul>
          <div className="bg-gray-50 p-4 rounded-lg">
            <h4 className="font-semibold text-gray-800 mb-2">Before and After:</h4>
            <p className="mb-1"><strong className="text-red-600">Weak:</strong> "Responsible for managing social media accounts"</p>
            <p><strong className="text-green-600">Strong:</strong> "Grew social media engagement by 40% through targeted content strategy and community management"</p>
          </div>
        </div>
      )
    },
    {
      id: 'education',
      title: 'Education',
      icon: '🎓',
      content: (
        <div>
          <h3 className="text-xl font-semibold mb-3 text-blue-700">Presenting Your Academic Background</h3>
          <ul className="list-disc pl-5 space-y-2">
            <li>List your highest degree first</li>
            <li>Include institution name, degree obtained, field of study, and graduation year</li>
            <li>Add GPA if it's strong (3.5+ on a 4.0 scale)</li>
            <li>Include relevant coursework, honors, or extracurricular activities if you're a recent graduate</li>
            <li>For experienced professionals, keep this section concise</li>
          </ul>
        </div>
      )
    },
    {
      id: 'skills',
      title: 'Skills Section',
      icon: '🔧',
      content: (
        <div>
          <h3 className="text-xl font-semibold mb-3 text-blue-700">Showcasing Your Abilities</h3>
          <ul className="list-disc pl-5 space-y-2 mb-4">
            <li>Include both hard skills (technical abilities) and soft skills (interpersonal traits)</li>
            <li>Tailor skills to match the job description</li>
            <li>Group similar skills together (e.g., Programming Languages: JavaScript, Python, Java)</li>
            <li>Consider using a proficiency scale (Beginner, Intermediate, Advanced) if relevant</li>
            <li>Don't list outdated or irrelevant skills</li>
          </ul>
          <div className="bg-gray-50 p-4 rounded-lg">
            <h4 className="font-semibold text-gray-800 mb-2">Effective Skills Section:</h4>
            <p className="mb-1"><strong>Technical:</strong> Python, SQL, TensorFlow, Git, AWS</p>
            <p className="mb-1"><strong>Soft Skills:</strong> Project Management, Team Leadership, Cross-functional Collaboration</p>
            <p><strong>Languages:</strong> English (Native), Spanish (Fluent), French (Intermediate)</p>
          </div>
        </div>
      )
    },
    {
      id: 'achievements',
      title: 'Key Achievements',
      icon: '🏆',
      content: (
        <div>
          <h3 className="text-xl font-semibold mb-3 text-blue-700">Highlighting Your Accomplishments</h3>
          <ul className="list-disc pl-5 space-y-2">
            <li>Create a separate section for notable achievements if they're significant</li>
            <li>Include awards, publications, certifications, or major projects</li>
            <li>Quantify results whenever possible</li>
            <li>Mention recognition from employers or industry bodies</li>
          </ul>
        </div>
      )
    },
    {
      id: 'formatting',
      title: 'Formatting Tips',
      icon: '📄',
      content: (
        <div>
          <h3 className="text-xl font-semibold mb-3 text-blue-700">Creating a Professional Layout</h3>
          <ul className="list-disc pl-5 space-y-2 mb-4">
            <li>Keep your resume to 1-2 pages (experienced professionals may need 2 pages)</li>
            <li>Use a clean, professional font (e.g., Calibri, Arial, Garamond, Helvetica)</li>
            <li>Maintain consistent formatting throughout</li>
            <li>Use adequate white space to improve readability</li>
            <li>Save and send as PDF to preserve formatting (unless otherwise specified)</li>
            <li>Use bullet points for easy scanning</li>
            <li>Ensure your resume is ATS (Applicant Tracking System) friendly:
              <ul className="list-circle pl-5 mt-2 space-y-2">
                <li>Use standard section headings</li>
                <li>Avoid tables, columns, and graphics</li>
                <li>Include relevant keywords from the job description</li>
              </ul>
            </li>
          </ul>
        </div>
      )
    },
    {
      id: 'customization',
      title: 'Tailoring Your Resume',
      icon: '✂️',
      content: (
        <div>
          <h3 className="text-xl font-semibold mb-3 text-blue-700">Adapting Your Resume for Each Application</h3>
          <ul className="list-disc pl-5 space-y-2 mb-4">
            <li>Study the job description carefully and identify key requirements</li>
            <li>Incorporate relevant keywords from the job posting</li>
            <li>Highlight experiences and skills that match the role</li>
            <li>Adjust your professional summary to align with the position</li>
            <li>Reorder sections to emphasize the most relevant qualifications</li>
          </ul>
          <div className="bg-blue-50 p-4 rounded-lg border-l-4 border-blue-500">
            <p className="font-medium text-blue-800">Pro Tip:</p>
            <p>Create a master resume with all your experiences, then create tailored versions for specific applications.</p>
          </div>
        </div>
      )
    },
    {
      id: 'common-mistakes',
      title: 'Common Mistakes to Avoid',
      icon: '⚠️',
      content: (
        <div>
          <h3 className="text-xl font-semibold mb-3 text-blue-700">Steer Clear of These Errors</h3>
          <ul className="list-disc pl-5 space-y-2">
            <li>Spelling and grammatical errors (proofread carefully!)</li>
            <li>Using an unprofessional email address</li>
            <li>Including irrelevant personal information</li>
            <li>Using passive language instead of action verbs</li>
            <li>Listing duties instead of accomplishments</li>
            <li>Inconsistent formatting</li>
            <li>Including outdated information</li>
            <li>Using clichés like "hard worker" or "team player" without evidence</li>
            <li>Inaccurate or exaggerated information</li>
          </ul>
        </div>
      )
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-50 py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-10">
          <h1 className="text-4xl font-bold text-gray-800 mb-4">Resume Writing Guide</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Create a standout resume with our comprehensive guide. Select a section to learn best practices and tips.
          </p>
        </div>
        
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Sidebar Navigation */}
          <div className="w-full lg:w-1/4">
            <div className="bg-white rounded-xl shadow-md p-6 sticky top-6">
              <h3 className="text-lg font-semibold text-gray-800 mb-4 border-b pb-2">Sections</h3>
              <nav className="space-y-2">
                {guideSections.map(section => (
                  <button
                    key={section.id}
                    onClick={() => setActiveSection(section.id)}
                    className={`w-full text-left px-4 py-3 rounded-lg transition-all flex items-center ${
                      activeSection === section.id
                        ? 'bg-blue-100 text-blue-700 font-medium'
                        : 'text-gray-700 hover:bg-gray-100'
                    }`}
                  >
                    <span className="text-xl mr-3">{section.icon}</span>
                    <span>{section.title}</span>
                  </button>
                ))}
              </nav>
              
              <div className="mt-8 pt-6 border-t border-gray-200">
                <h3 className="text-lg font-semibold text-gray-800 mb-4">Quick Tips</h3>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-start">
                    <span className="text-green-500 mr-2">✓</span>
                    <span>Keep it concise and relevant</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-500 mr-2">✓</span>
                    <span>Use action verbs to start bullet points</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-500 mr-2">✓</span>
                    <span>Quantify achievements with numbers</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-500 mr-2">✓</span>
                    <span>Tailor your resume for each application</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-500 mr-2">✓</span>
                    <span>Proofread multiple times</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-500 mr-2">✓</span>
                    <span>Save as PDF before sending</span>
                  </li>
                </ul>
                
                <button className="w-full mt-6 bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 px-4 rounded-lg transition-colors">
                  Analyze My Resume
                </button>
              </div>
            </div>
          </div>
          
          {/* Main Content */}
          <div className="w-full lg:w-3/4">
            <div className="bg-white rounded-xl shadow-md p-6 md:p-8">
              {guideSections.map(section => (
                <div key={section.id} className={activeSection === section.id ? 'block' : 'hidden'}>
                  <div className="flex items-center mb-6">
                    <span className="text-3xl mr-3">{section.icon}</span>
                    <h2 className="text-2xl font-bold text-gray-800">{section.title}</h2>
                  </div>
                  {section.content}
                </div>
              ))}
            </div>
            
            {/* Next/Previous buttons */}
            <div className="flex justify-between mt-6">
              <button 
                className="flex items-center text-blue-600 font-medium hover:text-blue-800 transition-colors"
                onClick={() => {
                  const currentIndex = guideSections.findIndex(section => section.id === activeSection);
                  if (currentIndex > 0) {
                    setActiveSection(guideSections[currentIndex - 1].id);
                  }
                }}
              >
                <svg className="w-5 h-5 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7"></path>
                </svg>
                Previous Section
              </button>
              
              <button 
                className="flex items-center text-blue-600 font-medium hover:text-blue-800 transition-colors"
                onClick={() => {
                  const currentIndex = guideSections.findIndex(section => section.id === activeSection);
                  if (currentIndex < guideSections.length - 1) {
                    setActiveSection(guideSections[currentIndex + 1].id);
                  }
                }}
              >
                Next Section
                <svg className="w-5 h-5 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ResumeWritingGuide;