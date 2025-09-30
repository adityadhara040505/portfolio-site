import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { faYoutube } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Projects = ({ data }) => {
  const isFeatured = data?.featured;
  const isYouTubeLink = data?.link?.includes('youtube.com') || data?.link?.includes('youtu.be');
  
  return (
    <div className={`max-w-106 rounded-lg outline-[#FFFFFF] hover:shadow-2xl duration-300 transition-all shadow-gray-300 border ${isFeatured ? 'border-yellow-400 bg-gradient-to-br from-yellow-50 to-orange-50' : 'border-gray-200'}`}>
      <div className="relative">
        <img 
          src={data?.image} 
          alt={`${data?.title} image`} 
          className="w-full h-48 object-cover rounded-t-lg"
          onError={(e) => {
            console.error('Image failed to load:', data?.image);
            e.target.style.display = 'block';
          }}
        />
        {isFeatured && (
          <div className="absolute top-2 right-2 bg-yellow-400 text-black px-2 py-1 rounded-full text-xs font-bold">
            ⭐ FEATURED
          </div>
        )}
      </div>
      <div className="p-4 xs:p-8">
        <p className={`text-xs font-medium ${isFeatured ? 'text-yellow-600' : 'text-gray-400'}`}>{data?.category}</p>
        <p className="text-gray-900 text-md xxs:text-lg font-semibold pt-1 mb-3">
          {data?.title}
        </p>
        <p
          style={{ lineHeight: "20px", letterSpacing: "0%" }}
          className="text-gray-600 text-xs xxs:text-[14px] text-wrap mb-3"
        >
          {data?.description}
        </p>
        {data?.tech && (
          <div className="mb-4">
            <p className="text-xs font-medium text-blue-600 mb-1">Technologies:</p>
            <p className="text-xs text-gray-500">{data?.tech}</p>
          </div>
        )}
        <a
          href={data?.link}
          target={isYouTubeLink ? "_blank" : "_self"}
          rel={isYouTubeLink ? "noopener noreferrer" : ""}
          className={`btn hover:gap-3 xs:hover:gap-4 transition-all duration-300 xs:py-5.75 px-6 max-sm:w-full text-sm xs:text-[16px] font-semibold ${
            isFeatured 
              ? 'bg-red-600 text-white hover:bg-red-700 border-red-600' 
              : 'hover:border-picto-primary hover:text-picto-primary bg-white'
          }`}
        >
          {isYouTubeLink ? (
            <>
              <FontAwesomeIcon icon={faYoutube} className="mr-2" />
              Watch Demo
            </>
          ) : (
            'Case Study'
          )}
          <span className="ms-1 xs:ms-3">
            <FontAwesomeIcon icon={faArrowRight} size="l" className="" />
          </span>
        </a>
        {/* </p> */}
      </div>
    </div>
  );
};

export default Projects;
