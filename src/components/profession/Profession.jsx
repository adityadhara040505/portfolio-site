import Roles from "./Roles";

const rolesData = [
  {
    id: 1,
    title: "User Experience Design",
    description:
      "I design and develop services for customers specializing in creating stylish, modern websites, web services and online stores. My passion is to design digital user experiences that are intuitive and engaging.",
  },
  {
    id: 2,
    title: "Machine Learning & AI",
    description:
      "I develop intelligent systems using PyTorch, implementing diffusion models, UNet architectures, and training on specialized datasets like DressCode and Pose for computer vision applications.",
  },
  {
    id: 3,
    title: "Full-Stack Development",
    description:
      "I build end-to-end applications using React.js, Node.js, Express.js, and Flask, with expertise in MongoDB, MySQL, and MariaDB for robust data management.",
  },
];

const Profession = () => {
  return (
    <div
      className="content grid md:grid-cols-2 max-xxl:px-4 xxl:px-2 py-10 md:py-15 lg:py-37.5"
      id="services"
    >
      <div className="flex flex-col justify-between h-fit md:pe-8 lg:pe-35.75 max-md:text-center my-auto">
        <p className="section-title max-md:text-center">What I do?</p>
        <div className="mt-6 text-[14px]">
          <p className="text-xs sm:text-lg font-normal text-gray-400 mb-4">
            I am a Professional User Experience Designer who designs and develops 
            services for customers specializing in creating stylish, modern websites, 
            web services and online stores.
          </p>
          <p className="text-xs sm:text-lg font-normal text-gray-400">
            My passion is to design digital user experiences that combine beautiful 
            aesthetics with functional innovation, powered by advanced machine learning 
            and full-stack development expertise.
          </p>
        </div>
      </div>
      <div className="">
        {rolesData.map((role, index) => (
          <Roles role={role} key={index} />
        ))}
      </div>
    </div>
  );
};

export default Profession;
