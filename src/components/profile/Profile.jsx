import person from "../../assets/images/person-new-2.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDownload } from "@fortawesome/free-solid-svg-icons";
import SocialMedia from "../common/socialMedia/SocialMedia";

const Profile = () => {
  return (
    <div
      className={`relative mx-4 xxl:mx-0.5 -bottom-20 lg:-bottom-28 z-10 rounded-2xl bg-white drop-shadow-2xl max-xl:mb-5 shadow-white xl:p-28 lg:p-20 md:p-16 sm:p-10 p-4`}
      id="profile"
    >
      <div className="flex max-md:flex-col justify-between items-center gap-6">
        {/* Profile image */}
        <div className="xxl:max-w-106 w-auto h-auto xxl:max-h-126">
          <div className="max-w-106 rounded-xl overflow-hidden shadow-lg bg-gradient-to-br from-purple-50 to-blue-50 p-2">
            <img
              className="w-full h-full object-contain rounded-lg bg-white"
              src={person}
              alt="Aditya Dharashivkar Profile"
            />
          </div>
          {/* Social media section */}
          <div className="relative -bottom-4 mt-4">
            <div className="flex justify-center">
              <div className="px-6 max-w-66 py-3 z-50 text-center bg-white rounded-lg shadow-lg border border-gray-100">
                <SocialMedia />
              </div>
            </div>
          </div>
        </div>

        <div className="max-sm:w-full w-[33rem]">
          <h2
            className={`text-2xl xxs:text-3xl sm:text-4xl lg:text-[38px] text-[min(24px,38px)] max-md:text-center font-semibold mb-8`}
          >
            I am Professional User Experience Designer
          </h2>
          <div
            className={`text-xs xs:text-[16px] lg:text-lg font-normal max-md:text-center text-gray-600`}
          >
            <p className={``}>
              I design and develop services for customers, specializing in creating 
              stylish, modern websites, web services, and online stores. My passion 
              is to design digital user experiences that seamlessly blend aesthetics 
              with functionality.
            </p>
            <p className="mt-4">
              With expertise in Machine Learning, Full-Stack Development, and UX Design, 
              I create innovative solutions that push the boundaries of technology while 
              maintaining user-centric design principles. From AI-powered applications 
              to elegant web interfaces, I bring ideas to life.
            </p>
          </div>
          <div className="mt-8 flex max-md:justify-center gap-4">
            <a
              className="btn xxs:btn-lg px-6 max-xs:px-2 xxs:py-3 btn-primary text-xs xxs:text-[14px] sm:text-[16px] text-white"
              href="https://github.com/adityadhara040505/"
              target="_blank"
              rel="noopener noreferrer"
            >
              My Projects
            </a>
            <a
              className={`btn xxs:btn-lg px-6 max-xs:px-2 xxs:py-3 hover:border-picto-primary bg-white duration-300 transition-all hover:text-picto-primary border border-gray-300 text-xs xxs:text-[14px] sm:text-[16px]`}
              href="/Aditya_Dharashivkar_VIT.pdf"
              download="Aditya_Dharashivkar_VIT.pdf"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FontAwesomeIcon icon={faDownload} className="mr-2" /> Download CV
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
