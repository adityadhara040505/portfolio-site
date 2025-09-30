import person from "../../assets/images/person-latest.jpg";
import "./introduction.css";
import InformationSummary from "./InformationSummary";

// Information summary data
const informationSummaryData = [
  {
    id: 1,
    title: "CGPA",
    description: "8.73",
  },
  {
    id: 2,
    title: "Projects Completed",
    description: "10+",
  },
  {
    id: 3,
    title: "CP Questions",
    description: "500+",
  },
];

const Introduction = () => {
  return (
    <div
      className="flex max-lg:flex-col-reverse sm:justify-between pt-10 lg:pt-31.5 lg:mb-27.5 max-xl:gap-2 p-2 max-xxl:px-4"
      id="introduction"
    >
      <div className="w-full flex flex-col justify-between max-lg:text-center">
        <div className="pt-13 me-31.5 w-full lg:w-auto transition-all duration-500">
          <p className="text-3xl xxs:text-4xl sm:max-xl:text-5xl xl:text-6xl font-semibold w-full">
            Hello, I’m
            <span className="text-nowrap shrink-0 inline-block w-full">
              Aditya Dharashivkar
            </span>
          </p>
          <p className="text-xs xxs:text-lg lg:text-[18px] my-6">
            <span
              style={{
                textAlign: "justify",
                display: "block"
              }}
            >
              I'm a <b>Professional User Experience Designer</b> and <b>Information Technology</b> student 
              at <b>Vishwakarma Institute of Technology, Pune</b>. I specialize in creating stylish, 
              modern websites, web services and online stores with a passion for designing digital user experiences. 
              I've developed breakthrough AI projects including a <b>virtual try-on system trained on 70+GB of images</b>, 
              combining UX design principles with <b>PyTorch</b>, computer vision, and full-stack development 
              to create innovative solutions that enhance user experiences.
            </span>
          </p>

        </div>
        <div className="mx-auto lg:mx-0 relative">
          <div className="grid max-xxs:grid-flow-col grid-cols-3 w-fit mt-10 gap-1">
            {informationSummaryData.map((item) => (
              <InformationSummary key={item.id} item={item} />
            ))}
          </div>
        </div>
      </div>
      <div
        className={`max-w-134 w-full h-full max-lg:mx-auto relative`}
      >
        <div className="bg-gradient-to-br from-purple-100 to-blue-100 rounded-3xl p-3 shadow-2xl shadow-gray-200">
          <img
            className={`w-full h-auto object-contain bg-white rounded-2xl shadow-lg`}
            src={person}
            alt="Aditya Dharashivkar"
          />
        </div>
      </div>
    </div>
  );
};

export default Introduction;
