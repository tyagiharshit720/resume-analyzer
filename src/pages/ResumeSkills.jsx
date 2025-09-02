import React, { useState } from "react";

const ResumeSkills = () => {
  const [skills, setSkills] = useState(["React", "JavaScript", "Node.js", "Tailwind CSS"]);
  const [newSkill, setNewSkill] = useState("");

  const handleAddSkill = () => {
    if (newSkill.trim() !== "") {
      setSkills([...skills, newSkill]);
      setNewSkill("");
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col items-center py-10 px-4">
      <div className="max-w-2xl w-full bg-white shadow-lg rounded-2xl p-6">
        <h2 className="text-2xl font-bold text-gray-800 mb-4 text-center">
          Resume Skills
        </h2>

        {/* Input Section */}
        <div className="flex gap-2 mb-6">
          <input
            type="text"
            value={newSkill}
            onChange={(e) => setNewSkill(e.target.value)}
            placeholder="Enter a skill"
            className="flex-1 px-4 py-2 border rounded-xl focus:ring-2 focus:ring-indigo-400 focus:outline-none"
          />
          <button
            onClick={handleAddSkill}
            className="px-4 py-2 bg-indigo-600 text-white rounded-xl hover:bg-indigo-700 transition"
          >
            Add
          </button>
        </div>

        {/* Skills List */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
          {skills.map((skill, index) => (
            <div
              key={index}
              className="bg-indigo-100 text-indigo-800 text-sm font-medium px-4 py-2 rounded-xl text-center shadow-sm"
            >
              {skill}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ResumeSkills;
