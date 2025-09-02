import React, { useState, useEffect } from 'react';
import { FileText, ArrowLeft, Clock, CheckCircle } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const Upload = ({ onBack, selectedFile }) => {
  const [isProcessing, setIsProcessing] = useState(true);
  const navigate = useNavigate();  // ✅ correct hook

  // Simulate processing completion after 3 seconds
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsProcessing(false);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100 flex items-center justify-center px-6 py-12">
      <div className="bg-white rounded-2xl shadow-xl p-8 max-w-md w-full">
        
        {/* Back Button */}
        <button 
          onClick={() => navigate("/")}  // ✅ navigate to home
          className="flex items-center text-blue-500 hover:text-blue-700 mb-6"
        >
          <ArrowLeft className="w-5 h-5 mr-2" />
          Back to Home
        </button>
        
        <div className="text-center">
          {/* Status Icon */}
          <div className={`w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6 ${
            isProcessing ? 'bg-blue-100' : 'bg-green-100'
          }`}>
            {isProcessing ? (
              <Clock className="w-8 h-8 text-blue-500 animate-spin-slow" />
            ) : (
              <CheckCircle className="w-8 h-8 text-green-500" />
            )}
          </div>
          
          {/* Heading */}
          <h1 className="text-2xl font-bold text-gray-800 mb-4">
            {isProcessing ? 'Processing Your Resume' : 'Analysis Complete!'}
          </h1>
          
          {/* Description */}
          <p className="text-gray-600 mb-6">
            {isProcessing 
              ? `We're analyzing "${selectedFile?.name}" to extract key insights and provide personalized recommendations.`
              : 'Our full analysis functionality is coming soon! In the meantime, check out our resume tips and templates.'
            }
          </p>
          
          {/* Progress / Features */}
          {isProcessing ? (
            <div className="w-full bg-gray-200 rounded-full h-2.5 mb-6 overflow-hidden">
              <div 
                className="bg-blue-500 h-2.5 rounded-full animate-pulse" 
                style={{ width: '75%' }}
              ></div>
            </div>
          ) : (
            <div className="bg-blue-50 rounded-lg p-4 mb-6">
              <h3 className="font-semibold text-blue-800 mb-2">What's Coming Soon:</h3>
              <ul className="text-sm text-blue-600 text-left space-y-1">
                <li>• Detailed skills analysis</li>
                <li>• ATS compatibility score</li>
                <li>• Personalized improvement suggestions</li>
                <li>• Job matching recommendations</li>
              </ul>
            </div>
          )}
          
          {/* Action Buttons */}
          <div className="flex justify-center space-x-4">
            <button 
              onClick={onBack}
              className="px-6 py-2 bg-white text-blue-500 border border-blue-500 rounded-lg hover:bg-blue-50 transition-colors font-medium"
            >
              {isProcessing ? 'Cancel' : 'Explore Features'}
            </button>
            {!isProcessing && (
              <button className="px-6 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors font-medium">
                Get Notified
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Upload;
