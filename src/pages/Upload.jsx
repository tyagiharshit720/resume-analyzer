import React, { useState, useCallback } from 'react';

const Upload = () => {
  const [isDragging, setIsDragging] = useState(false);
  const [selectedFile, setSelectedFile] = useState(null);
  const [uploadProgress, setUploadProgress] = useState(0);
  const [isUploading, setIsUploading] = useState(false);
  const [uploadComplete, setUploadComplete] = useState(false);

  const handleDragEnter = useCallback((e) => {
    e.preventDefault();
    e.stopPropagation();
    setIsDragging(true);
  }, []);

  const handleDragLeave = useCallback((e) => {
    e.preventDefault();
    e.stopPropagation();
    setIsDragging(false);
  }, []);

  const handleDragOver = useCallback((e) => {
    e.preventDefault();
    e.stopPropagation();
    if (e.dataTransfer.files) {
      setIsDragging(true);
    }
  }, []);

  const handleDrop = useCallback((e) => {
    e.preventDefault();
    e.stopPropagation();
    setIsDragging(false);
    
    if (e.dataTransfer.files && e.dataTransfer.files.length > 0) {
      const file = e.dataTransfer.files[0];
      if (validateFile(file)) {
        setSelectedFile(file);
        e.dataTransfer.clearData();
      }
    }
  }, []);

  const handleFileChange = (e) => {
    if (e.target.files && e.target.files.length > 0) {
      const file = e.target.files[0];
      if (validateFile(file)) {
        setSelectedFile(file);
      }
    }
  };

  const validateFile = (file) => {
    const validTypes = ['application/pdf', 'application/msword', 'application/vnd.openxmlformats-officedocument.wordprocessingml.document', 'text/plain'];
    if (!validTypes.includes(file.type)) {
      alert('Please upload a valid document (PDF, DOC, DOCX, or TXT)');
      return false;
    }
    
    if (file.size > 5 * 1024 * 1024) { // 5MB limit
      alert('File size exceeds 5MB limit');
      return false;
    }
    
    return true;
  };

  const handleUpload = () => {
    if (!selectedFile) return;
    
    setIsUploading(true);
    setUploadComplete(false);
    
    // Simulate upload progress
    let progress = 0;
    const interval = setInterval(() => {
      progress += 5;
      setUploadProgress(progress);
      
      if (progress >= 100) {
        clearInterval(interval);
        setIsUploading(false);
        setUploadComplete(true);
        
        // Reset after 3 seconds
        setTimeout(() => {
          setSelectedFile(null);
          setUploadProgress(0);
          setUploadComplete(false);
        }, 3000);
      }
    }, 100);
  };

  const removeFile = () => {
    setSelectedFile(null);
    setUploadProgress(0);
    setUploadComplete(false);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-10">
          <h1 className="text-4xl font-bold text-gray-900 mb-3">Upload Your Resume</h1>
          <p className="text-xl text-gray-600">Get instant feedback on your resume's strengths and weaknesses</p>
        </div>
        
        <div 
          className={`relative border-2 border-dashed rounded-xl p-8 transition-all duration-300 ${
            isDragging 
              ? 'border-blue-500 bg-blue-50' 
              : selectedFile 
                ? 'border-green-500 bg-green-50' 
                : 'border-gray-300 bg-white'
          }`}
          onDragEnter={handleDragEnter}
          onDragOver={handleDragOver}
          onDragLeave={handleDragLeave}
          onDrop={handleDrop}
        >
          <div className="flex flex-col items-center justify-center space-y-4">
            {!selectedFile ? (
              <>
                <div className="text-blue-500">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-16 w-16" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12" />
                  </svg>
                </div>
                <p className="text-lg font-medium text-gray-900">Drag & drop your resume here</p>
                <p className="text-sm text-gray-500">Supported formats: PDF, DOC, DOCX, TXT (Max 5MB)</p>
                <label htmlFor="file-upload" className="cursor-pointer mt-4 bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-6 rounded-md transition duration-300">
                  Browse Files
                </label>
                <input 
                  id="file-upload" 
                  type="file" 
                  className="sr-only"
                  accept=".pdf,.doc,.docx,.txt" 
                  onChange={handleFileChange} 
                />
              </>
            ) : (
              <div className="flex items-center space-x-4 w-full max-w-md">
                <div className="flex-shrink-0 text-blue-500">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                </div>
                <div className="flex-grow overflow-hidden">
                  <p className="text-sm font-medium text-gray-900 truncate">{selectedFile.name}</p>
                  <p className="text-xs text-gray-500">{(selectedFile.size / 1024 / 1024).toFixed(2)} MB</p>
                </div>
                <button 
                  onClick={removeFile}
                  className="flex-shrink-0 text-red-500 hover:text-red-700 transition duration-300"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>
            )}
          </div>
          
          {isUploading && (
            <div className="mt-6">
              <div className="flex justify-between text-sm font-medium text-gray-700 mb-1">
                <span>Uploading...</span>
                <span>{uploadProgress}%</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2.5">
                <div 
                  className="bg-blue-600 h-2.5 rounded-full transition-all duration-300" 
                  style={{ width: `${uploadProgress}%` }}
                ></div>
              </div>
            </div>
          )}
          
          {uploadComplete && (
            <div className="mt-6 flex items-center justify-center space-x-2 text-green-600 font-medium">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              <span>Upload successful! Analyzing your resume...</span>
            </div>
          )}
        </div>
        
        {selectedFile && !isUploading && !uploadComplete && (
          <div className="mt-6 flex justify-center">
            <button 
              onClick={handleUpload}
              className="bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 px-8 rounded-md shadow-md transition duration-300 transform hover:-translate-y-1"
            >
              Analyze Resume
            </button>
          </div>
        )}
        
        <div className="mt-16">
          <h2 className="text-2xl font-bold text-center text-gray-900 mb-8">What our analyzer checks for:</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition duration-300">
              <div className="flex items-center space-x-4 mb-4">
                <div className="bg-blue-100 p-3 rounded-full">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                </div>
                <h3 className="text-lg font-semibold text-gray-900">ATS Compatibility</h3>
              </div>
              <p className="text-gray-600">Optimize for Applicant Tracking Systems to ensure your resume gets seen by recruiters.</p>
            </div>
            
            <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition duration-300">
              <div className="flex items-center space-x-4 mb-4">
                <div className="bg-green-100 p-3 rounded-full">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1" />
                  </svg>
                </div>
                <h3 className="text-lg font-semibold text-gray-900">Keyword Analysis</h3>
              </div>
              <p className="text-gray-600">Identify missing industry keywords that are essential for your target roles.</p>
            </div>
            
            <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition duration-300">
              <div className="flex items-center space-x-4 mb-4">
                <div className="bg-purple-100 p-3 rounded-full">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-purple-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <h3 className="text-lg font-semibold text-gray-900">Skills Assessment</h3>
              </div>
              <p className="text-gray-600">Evaluate how effectively your skills are presented and highlighted.</p>
            </div>
            
            <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition duration-300">
              <div className="flex items-center space-x-4 mb-4">
                <div className="bg-yellow-100 p-3 rounded-full">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-yellow-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                  </svg>
                </div>
                <h3 className="text-lg font-semibold text-gray-900">Format Evaluation</h3>
              </div>
              <p className="text-gray-600">Check structure, readability, and overall professional presentation.</p>
            </div>
          </div>
        </div>
        
        <div className="mt-12 text-center text-gray-500 text-sm">
          <p>Your data is secure and confidential. We never share your information with third parties.</p>
        </div>
      </div>
    </div>
  );
};

export default Upload;