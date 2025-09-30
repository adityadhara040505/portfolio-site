import Projects from "./Projects";
import virtualTryOnAI from "../../assets/images/portfolio-images/virtual-tryout-ai.svg";
import sharpCoderPlatform from "../../assets/images/portfolio-images/sharpcoder-platform.svg";
import smartMedScheduler from "../../assets/images/portfolio-images/smart-med-scheduler.svg";
import researchPublication from "../../assets/images/portfolio-images/research-publication.svg";
import algorithmMastery from "../../assets/images/portfolio-images/algorithm-mastery.svg";
import competitionAchievements from "../../assets/images/portfolio-images/competition-simple.svg";

const projectData = [
  {
    id: 1,
    image: virtualTryOnAI,
    category: "⭐ FEATURED PROJECT",
    title: "Virtual Try-On AI Model",
    description:
      "Breakthrough fashion AI system trained on 70+GB of images using advanced PyTorch models. Features realistic clothing simulation with pose detection and multilingual voice assistant. Watch the full demo!",
    link: "https://youtu.be/rAvP8opesIg",
    tech: "PyTorch, Diffusion Model, UNet, 70+GB Dataset, Computer Vision",
    featured: true
  },
  {
    id: 2,
    image: sharpCoderPlatform,
    category: "FULL-STACK DEVELOPMENT",
    title: "SharpCoder: C Programming Platform",
    description:
      "Built a comprehensive learning platform with Flask backend and React frontend, featuring progressive curriculum, quizzes, and AI chatbot for C programming education.",
    link: "#!",
    tech: "MongoDB, Express.js, Node.js, Flask, React.js"
  },
  {
    id: 3,
    image: smartMedScheduler,
    category: "AI & HEALTHCARE",
    title: "Smart Med Scheduler",
    description:
      "Implemented KNN and LSTM models for heart disease prediction with real-time appointment scheduling based on doctor availability and risk assessment.",
    link: "#!",
    tech: "Express.js, Node.js, Flask, MariaDB"
  },
  {
    id: 4,
    image: researchPublication,
    category: "RESEARCH",
    title: "Research Publication",
    description:
      "Co-authored and published a research paper in the Springer Proceedings of ICMEET 2024, contributing to academic knowledge in technology and innovation.",
    link: "#!",
    tech: "Academic Research, Technical Writing"
  },
  {
    id: 5,
    image: algorithmMastery,
    category: "COMPETITIVE PROGRAMMING",
    title: "Algorithm Mastery",
    description:
      "Solved 500+ competitive programming problems across various platforms, demonstrating expertise in Data Structures & Algorithms using Java and C++.",
    link: "https://leetcode.com/u/Aditya_Dharashivkar/",
    tech: "Java, C++, DSA, Problem Solving"
  },
  {
    id: 6,
    image: competitionAchievements,
    category: "HACKATHONS",
    title: "Competition Achievements",
    description:
      "2nd Runner-up in CodeZilla Inter-College Hackathon and BugFather Debugging Competition, 4th place in InnovateYou Techathon 2.0.",
    link: "#!",
    tech: "Team Collaboration, Innovation, Problem Solving"
  },
];

const Portfolio = () => {
  return (
    <div
      className="content mt-10 md:mt-15 xl:mt-25 mb-10 md:mb-25 max-xxl:p-2"
      id="portfolio"
    >
      <div className="xl:mb-17.5 mb-5">
        <div className="max-sm:px-2 text-center mx-auto max-w-144.25">
          <p className="section-title ">Portfolio</p>
          <p className="font-normal text-[18px] max-sm:text-[14px] pt-6 text-gray-400">
            Here's a showcase of my projects spanning Machine Learning, Full-Stack Development, 
            Research, and Competitive Programming achievements.
          </p>
        </div>
      </div>
      <div className="mx-auto flex justify-center">
        <div className="grid xl:grid-cols-3 md:grid-cols-2 gap-6">
          {projectData.map((data, index) => (
            <Projects data={data} key={index} />
          ))}
        </div>
      </div>
      <div className="text-center">
        <a
          href="https://github.com/adityadhara040505/"
          target="_blank"
          rel="noopener noreferrer"
          className="btn btn-primary py-3 px-6 mt-12.5 text-center text-[16px] font-semibold"
        >
          More Projects on GitHub
        </a>
      </div>
    </div>
  );
};

export default Portfolio;
