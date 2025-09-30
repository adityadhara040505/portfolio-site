import logo from "../../../assets/logo-new.png";

/* Footer nabLinks */
const navItems = [
  { id: 1, name: "Home", url: "Home" },
  { id: 2, name: "About", url: "About" },
  { id: 3, name: "Education", url: "Education" },
  { id: 4, name: "Skills", url: "Skills" },
  { id: 5, name: "Featured", url: "featured-project" },
  { id: 6, name: "Portfolio", url: "Portfolio" },
  { id: 7, name: "Services", url: "Services" },
  { id: 8, name: "Contact", url: "Contact" },
];
const copyrightYear = new Date().getFullYear();

const Footer = () => {
  return (
    <div className="pt-25 md:pt-40 content max-2xl:px-3">
      <div className="flex max-md:flex-col justify-between mx-0 items-center h-full w-full text-neutral-200">
        <a href="#" className="flex items-center border-0">
          <img src={logo} className="h-8 sm:h-12 w-8 sm:w-12" alt="logo" />
          <p className="text-3xl sm:text-[32px] my-auto ms-[12px] font-semibold">
            Aditya
          </p>
        </a>
        <div className="mx-7 max-md:my-7 text-center">
          {navItems.map((item) => (
            <a
              key={item.id}
              className="mx-2 group inline-block relative w-fit text-[12px] sm:text-[16px]"
              href={`#${item.url.toLowerCase()}`}
            >
              {item.name}
              <span className="absolute left-0 bottom-0 h-0.5 w-full bg-white scale-x-0 duration-300 group-hover:scale-x-100"></span>
            </a>
          ))}
        </div>
        <div className="flex flex-col items-center">
          <div className="flex gap-4 mb-2">
            <a 
              href="https://leetcode.com/u/Aditya_Dharashivkar/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-orange-400 hover:text-orange-300 text-sm font-medium transition-colors duration-200"
            >
              LeetCode
            </a>
            <a 
              href="https://www.hackerrank.com/profile/adharashivkar17" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-green-400 hover:text-green-300 text-sm font-medium transition-colors duration-200"
            >
              HackerRank
            </a>
            <a 
              href="https://www.geeksforgeeks.org/user/adharashjtll/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-green-500 hover:text-green-400 text-sm font-medium transition-colors duration-200"
            >
              GeeksforGeeks
            </a>
          </div>
          <p className="text-[12px] sm:text-[16px]">
            Copyright &copy; {copyrightYear} Aditya Dharashivkar.
          </p>
        </div>
      </div>
      <div className="text-white text-center max-xs:text-[12px] max-md:text-[14px] w-full py-10">
        <p className="mb-2">
          Developed with ❤️ by <b>{"Aditya Dharashivkar"}</b>
        </p>
        <p className="text-xs text-gray-400">
          Information Technology Student | Machine Learning Enthusiast | Full-Stack Developer
        </p>
      </div>
    </div>
  );
};

export default Footer;
