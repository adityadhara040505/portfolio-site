import React from 'react';
import './featuredProject.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlay, faCode, faDatabase, faBrain } from '@fortawesome/free-solid-svg-icons';
import { faYoutube } from '@fortawesome/free-brands-svg-icons';

const FeaturedProject = () => {
  const projectStats = [
    { icon: faDatabase, value: "70+GB", label: "Training Data" },
    { icon: faBrain, value: "3", label: "ML Models" },
    { icon: faCode, value: "PyTorch", label: "Framework" },
    { icon: faYoutube, value: "Demo", label: "Available" }
  ];

  const technicalDetails = [
    "🔥 **PyTorch Deep Learning**: Advanced neural network architectures for clothing simulation",
    "🎯 **Computer Vision**: Pose estimation and dense pose mapping for accurate fitting",
    "👔 **Fashion AI**: Specialized models trained on DressCode dataset for realistic clothing transfer",
    "🖼️ **Image Processing**: High-resolution image synthesis and texture mapping",
    "⚡ **Real-time Inference**: Optimized model deployment for interactive user experience",
    "🎨 **Style Transfer**: Advanced diffusion models for seamless clothing integration"
  ];

  const challenges = [
    "Handling massive 70+GB dataset training with memory optimization",
    "Implementing accurate pose detection for diverse body types",
    "Achieving realistic fabric physics and wrinkle simulation",
    "Optimizing model inference speed for real-time performance"
  ];

  return (
    <div className="featured-project-section py-20 bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900" id="featured-project">
      <div className="content max-xxl:px-4 xxl:px-2">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center bg-yellow-400 text-black px-4 py-2 rounded-full text-sm font-bold mb-4">
            <span className="animate-pulse mr-2">⭐</span>
            FEATURED PROJECT
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
            Virtual Try-On AI Model
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            A breakthrough in fashion technology - an advanced virtual try-on system trained on 
            <span className="text-yellow-400 font-bold"> 70+GB of high-resolution images</span>, 
            enabling realistic clothing simulation using cutting-edge machine learning.
          </p>
        </div>

        {/* Project Stats */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {projectStats.map((stat, index) => (
            <div key={index} className="stat-card bg-white/10 backdrop-blur-sm rounded-2xl p-6 text-center border border-white/20 hover:bg-white/20 transition-all duration-300">
              <FontAwesomeIcon icon={stat.icon} className="text-4xl text-yellow-400 mb-3" />
              <div className="text-2xl font-bold text-white mb-1">{stat.value}</div>
              <div className="text-gray-300 text-sm">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Main Content Grid */}
        <div className="grid lg:grid-cols-2 gap-12 mb-16">
          {/* Video/Demo Section */}
          <div className="demo-section">
            <div className="relative bg-gradient-to-br from-blue-600 to-purple-600 rounded-3xl p-8 h-full min-h-[400px] flex flex-col justify-center items-center text-center">
              <div className="absolute inset-0 bg-black/20 rounded-3xl"></div>
              <div className="relative z-10">
                <div className="w-24 h-24 bg-white/20 rounded-full flex items-center justify-center mb-6 mx-auto backdrop-blur-sm">
                  <FontAwesomeIcon icon={faPlay} className="text-4xl text-white ml-1" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">Live Demo Available</h3>
                <p className="text-white/90 mb-6 text-lg">
                  Experience the virtual try-on technology in action. See how AI transforms fashion retail.
                </p>
                <a 
                  href="https://youtu.be/rAvP8opesIg" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-flex items-center bg-red-600 hover:bg-red-700 text-white px-8 py-4 rounded-full font-bold transition-all duration-300 transform hover:scale-105 shadow-lg"
                >
                  <FontAwesomeIcon icon={faYoutube} className="mr-3 text-xl" />
                  Watch on YouTube
                </a>
              </div>
            </div>
          </div>

          {/* Technical Details */}
          <div className="technical-details bg-white/5 backdrop-blur-sm rounded-3xl p-8 border border-white/10">
            <h3 className="text-2xl font-bold text-white mb-6 flex items-center">
              <span className="text-yellow-400 mr-3">🔬</span>
              Technical Innovation
            </h3>
            <div className="space-y-4">
              {technicalDetails.map((detail, index) => (
                <div key={index} className="flex items-start">
                  <div className="text-gray-300 text-sm leading-relaxed" 
                       dangerouslySetInnerHTML={{ __html: detail.replace(/\*\*(.*?)\*\*/g, '<strong class="text-white">$1</strong>') }}>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Challenges & Solutions */}
        <div className="challenges-section bg-gradient-to-r from-purple-900/50 to-blue-900/50 rounded-3xl p-8 mb-16 border border-purple-500/20">
          <h3 className="text-2xl font-bold text-white mb-6 text-center flex items-center justify-center">
            <span className="text-red-400 mr-3">⚡</span>
            Technical Challenges Overcome
          </h3>
          <div className="grid md:grid-cols-2 gap-6">
            {challenges.map((challenge, index) => (
              <div key={index} className="challenge-item bg-white/10 rounded-xl p-6 border-l-4 border-yellow-400">
                <div className="flex items-start">
                  <span className="text-yellow-400 font-bold mr-3 text-lg">{index + 1}.</span>
                  <p className="text-gray-300">{challenge}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Impact & Results */}
        <div className="impact-section text-center">
          <h3 className="text-2xl font-bold text-white mb-8">Project Impact & Results</h3>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="impact-card bg-green-600/20 rounded-2xl p-6 border border-green-400/30">
              <div className="text-4xl mb-3">🎯</div>
              <h4 className="text-lg font-bold text-white mb-2">High Accuracy</h4>
              <p className="text-gray-300 text-sm">Achieved realistic clothing simulation with advanced pose detection</p>
            </div>
            <div className="impact-card bg-blue-600/20 rounded-2xl p-6 border border-blue-400/30">
              <div className="text-4xl mb-3">⚡</div>
              <h4 className="text-lg font-bold text-white mb-2">Real-time Performance</h4>
              <p className="text-gray-300 text-sm">Optimized inference for interactive user experience</p>
            </div>
            <div className="impact-card bg-purple-600/20 rounded-2xl p-6 border border-purple-400/30">
              <div className="text-4xl mb-3">🚀</div>
              <h4 className="text-lg font-bold text-white mb-2">Innovation</h4>
              <p className="text-gray-300 text-sm">Pioneering work in fashion AI and computer vision</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeaturedProject;