import React from 'react';
import './skills.css';

const skillsData = {
  languages: [
    { name: "Java", level: 90, icon: "☕" },
    { name: "JavaScript", level: 85, icon: "🚀" },
    { name: "C/C++", level: 80, icon: "⚡" },
    { name: "PHP", level: 70, icon: "🐘" },
    { name: "Python", level: 85, icon: "🐍" }
  ],
  frameworks: [
    { name: "React.js", level: 90, icon: "⚛️" },
    { name: "Node.js", level: 85, icon: "🟢" },
    { name: "Express.js", level: 80, icon: "🚂" },
    { name: "Flask", level: 75, icon: "🔥" },
    { name: "Android (Java)", level: 70, icon: "🤖" }
  ],
  libraries: [
    { name: "PyTorch", level: 85, icon: "🔥" },
    { name: "AWT/Swing", level: 75, icon: "🖼️" },
    { name: "Servlet", level: 70, icon: "⚙️" },
    { name: "PyTTSx3", level: 80, icon: "🔊" },
    { name: "Python Libraries", level: 85, icon: "📚" }
  ],
  databases: [
    { name: "MongoDB", level: 85, icon: "🍃" },
    { name: "MySQL", level: 80, icon: "🐬" },
    { name: "MariaDB", level: 75, icon: "🗃️" },
    { name: "Firebase", level: 70, icon: "🔥" }
  ],
  tools: [
    { name: "VS Code", level: 95, icon: "💻" },
    { name: "Git/GitHub", level: 90, icon: "🐙" },
    { name: "Docker", level: 70, icon: "🐳" },
    { name: "Postman", level: 80, icon: "📬" }
  ]
};

const courseworkData = [
  "Data Structures & Algorithms",
  "Operating Systems",
  "Object-Oriented Programming",
  "Database Management Systems",
  "Software Engineering",
  "Machine Learning"
];

const SkillBar = ({ skill }) => {
  return (
    <div className="skill-item mb-6">
      <div className="flex items-center justify-between mb-2">
        <div className="flex items-center">
          <span className="text-2xl mr-3">{skill.icon}</span>
          <span className="font-semibold text-gray-700">{skill.name}</span>
        </div>
        <span className="text-sm text-gray-500 font-medium">{skill.level}%</span>
      </div>
      <div className="skill-bar-bg">
        <div 
          className="skill-bar-fill" 
          style={{ 
            width: `${skill.level}%`,
            animationDelay: `${Math.random() * 0.5}s`
          }}
        ></div>
      </div>
    </div>
  );
};

const Skills = () => {
  return (
    <div className="skills-section py-16 lg:py-24 bg-gray-50" id="skills">
      <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Title */}
        <div className="text-center mb-16">
          <h2 className="section-title">Technical Skills</h2>
          <p className="text-gray-400 mt-6 text-lg max-w-2xl mx-auto">
            Technologies and tools I work with
          </p>
        </div>

        {/* Skills Grid */}
        <div className="grid lg:grid-cols-2 gap-12 mb-12">
          {/* Programming Languages */}
          <div className="skills-category">
            <h3 className="text-xl font-bold text-gray-800 mb-6 flex items-center">
              <span className="text-2xl mr-3">💻</span>
              Programming Languages
            </h3>
            {skillsData.languages.map((skill, index) => (
              <SkillBar key={index} skill={skill} />
            ))}
          </div>

          {/* Frameworks */}
          <div className="skills-category">
            <h3 className="text-xl font-bold text-gray-800 mb-6 flex items-center">
              <span className="text-2xl mr-3">🏗️</span>
              Frameworks
            </h3>
            {skillsData.frameworks.map((skill, index) => (
              <SkillBar key={index} skill={skill} />
            ))}
          </div>

          {/* Libraries */}
          <div className="skills-category">
            <h3 className="text-xl font-bold text-gray-800 mb-6 flex items-center">
              <span className="text-2xl mr-3">📦</span>
              Libraries & Tools
            </h3>
            {skillsData.libraries.map((skill, index) => (
              <SkillBar key={index} skill={skill} />
            ))}
          </div>

          {/* Databases */}
          <div className="skills-category">
            <h3 className="text-xl font-bold text-gray-800 mb-6 flex items-center">
              <span className="text-2xl mr-3">🗄️</span>
              Databases & Cloud
            </h3>
            {skillsData.databases.map((skill, index) => (
              <SkillBar key={index} skill={skill} />
            ))}
          </div>
        </div>

        {/* Development Tools */}
        <div className="mb-12">
          <h3 className="text-xl font-bold text-gray-800 mb-6 text-center flex items-center justify-center">
            <span className="text-2xl mr-3">🛠️</span>
            Development Tools
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {skillsData.tools.map((tool, index) => (
              <div key={index} className="tool-card bg-white rounded-xl p-4 text-center shadow-md hover:shadow-lg transition-all duration-300">
                <div className="text-4xl mb-3">{tool.icon}</div>
                <h4 className="font-semibold text-gray-700 mb-2">{tool.name}</h4>
                <div className="text-sm text-gray-500">{tool.level}% Proficiency</div>
              </div>
            ))}
          </div>
        </div>

        {/* Coursework */}
        <div className="coursework-section bg-white rounded-2xl p-8 shadow-lg">
          <h3 className="text-xl font-bold text-gray-800 mb-6 text-center flex items-center justify-center">
            <span className="text-2xl mr-3">📚</span>
            Relevant Coursework
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {courseworkData.map((course, index) => (
              <div key={index} className="coursework-item bg-blue-50 rounded-lg p-4 text-center border border-blue-100 hover:border-blue-200 transition-colors duration-200">
                <span className="text-blue-700 font-medium">{course}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Interests */}
        <div className="interests-section mt-12 text-center">
          <h3 className="text-xl font-bold text-gray-800 mb-6">🌟 Interests & Specializations</h3>
          <div className="flex flex-wrap justify-center gap-4">
            <span className="interest-tag">🤖 Machine Learning</span>
            <span className="interest-tag">🏆 Competitive Programming</span>
            <span className="interest-tag">🧠 Problem Solving</span>
            <span className="interest-tag">📈 Self-learning</span>
            <span className="interest-tag">🎯 Agile Mindset</span>
            <span className="interest-tag">🎤 Presentation</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;