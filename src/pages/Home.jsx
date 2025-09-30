import Introduction from "../components/introduction/Introduction";
import Profile from "../components/profile/Profile";
import Portfolio from "../components/portfolio/Portfolio";
import Profession from "../components/profession/Profession";
import Contact from "../components/contact/Contact";
import Education from "../components/education/Education";
import Skills from "../components/skills/Skills";
import FeaturedProject from "../components/featuredProject/FeaturedProject";
import "../../index.css";

const Home = () => {
  return (
    <div className="relative overflow-x-hidden">
      <div className="introduction-profile-background">
        <div className="content">
          <Introduction />
          <Profile />
        </div>
      </div>
      <section className="bg-soft-white relative z-10">
        <Profession />
      </section>
      <section className="relative z-10">
        <Education />
      </section>
      <section className="relative z-10">
        <Skills />
      </section>
      <section className="relative z-10">
        <FeaturedProject />
      </section>
      <section className="relative z-10">
        <Portfolio />
      </section>
      <section className="relative z-10">
        <Contact />
      </section>
    </div>
  );
};

export default Home;
