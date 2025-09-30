import React from 'react';
import './education.css';

const educationData = {
  degree: "Bachelor of Technology in Information Technology",
  institution: "Vishwakarma Institute of Technology, Pune",
  period: "2024–2027",
  cgpa: "8.73"
};

const achievementsData = [
  {
    id: 1,
    title: "2nd Runner-up",
    event: "CodeZilla Inter-College Hackathon",
    organization: "VIT Pune",
    icon: "🏆"
  },
  {
    id: 2,
    title: "2nd Runner-up",
    event: "BugFather Debugging Competition",
    organization: "",
    icon: "🐛"
  },
  {
    id: 3,
    title: "4th Place",
    event: "InnovateYou Techathon 2.0",
    organization: "AISSMS, 24-Hour National Hackathon",
    icon: "🚀"
  },
  {
    id: 4,
    title: "500+ Problems Solved",
    event: "LeetCode Competitive Programming",
    organization: "",
    icon: "💻"
  },
  {
    id: 5,
    title: "Research Publication",
    event: "Co-authored paper in Springer Proceedings",
    organization: "ICMEET 2024",
    icon: "📚"
  }
];

const codingProfiles = [
  {
    platform: "LeetCode",
    username: "Aditya_Dharashivkar",
    stats: "500+ Problems Solved",
    link: "https://leetcode.com/u/Aditya_Dharashivkar/",
    color: "bg-orange-500"
  },
  {
    platform: "HackerRank",
    username: "Aditya Dharashivkar",
    stats: "Active Profile",
    link: "https://www.hackerrank.com/profile/adharashivkar17",
    color: "bg-green-500"
  },
  {
    platform: "GeeksforGeeks",
    username: "adharashjtll",
    stats: "Regular Contributor",
    link: "https://www.geeksforgeeks.org/user/adharashjtll/",
    color: "bg-green-600"
  }
];

const Education = () => {
  return (
    <div className="education-section py-16 lg:py-24" id="education">
      <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Title */}
        <div className="text-center mb-16">
          <h2 className="section-title">Education & Achievements</h2>
          <p className="text-gray-400 mt-6 text-lg max-w-2xl mx-auto">
            Academic background and competitive programming milestones
          </p>
        </div>

        {/* Education Card */}
        <div className="education-card bg-white rounded-2xl shadow-lg p-8 lg:p-10 mb-16 border-l-4 border-blue-500">
          <div className="flex items-center justify-between max-md:flex-col max-md:text-center gap-6">
            <div className="flex-1">
              <h3 className="text-2xl lg:text-3xl font-bold text-gray-800 mb-3">
                {educationData.degree}
              </h3>
              <p className="text-xl lg:text-2xl text-blue-600 font-semibold mb-3">
                {educationData.institution}
              </p>
              <p className="text-gray-600 text-lg">
                {educationData.period} • CGPA: <span className="font-bold text-green-600">{educationData.cgpa}</span>
              </p>
            </div>
            <div className="education-icon text-6xl lg:text-7xl max-md:mt-4">
              🎓
            </div>
          </div>
        </div>

        {/* Achievements Grid */}
        <div className="mb-16">
          <h3 className="text-2xl lg:text-3xl font-bold text-center mb-12">🏆 Key Achievements</h3>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {achievementsData.map((achievement) => (
              <div 
                key={achievement.id}
                className="achievement-card bg-white rounded-xl shadow-md p-6 lg:p-8 hover:shadow-lg transition-all duration-300 hover:transform hover:-translate-y-1"
              >
                <div className="text-4xl lg:text-5xl mb-4">{achievement.icon}</div>
                <h4 className="font-bold text-lg lg:text-xl text-gray-800 mb-3">
                  {achievement.title}
                </h4>
                <p className="text-gray-600 mb-2 text-sm lg:text-base">{achievement.event}</p>
                {achievement.organization && (
                  <p className="text-sm text-blue-600">{achievement.organization}</p>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Coding Profiles */}
        <div className="mb-8">
          <h3 className="text-2xl lg:text-3xl font-bold text-center mb-12">💻 Coding Profiles</h3>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {codingProfiles.map((profile, index) => (
              <div 
                key={index}
                className="coding-profile bg-white rounded-xl shadow-md p-6 lg:p-8 text-center hover:shadow-lg transition-all duration-300"
              >
                <div className={`w-14 h-14 lg:w-16 lg:h-16 ${profile.color} rounded-full mx-auto mb-4 flex items-center justify-center text-white font-bold text-xl lg:text-2xl`}>
                  {profile.platform[0]}
                </div>
                <h4 className="font-bold text-lg lg:text-xl text-gray-800 mb-2">
                  {profile.platform}
                </h4>
                <p className="text-gray-600 mb-2 text-sm lg:text-base">@{profile.username}</p>
                <p className="text-sm lg:text-base text-green-600 font-semibold">
                  {profile.stats}
                </p>
                <a 
                  href={profile.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block mt-4 px-4 py-2 bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200 transition-colors duration-200 text-sm lg:text-base"
                >
                  View Profile →
                </a>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Education;