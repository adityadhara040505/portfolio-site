import {
  faBehance,
  faDribbble,
  faFacebookF,
  faInstagram,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { SiLeetcode, SiGeeksforgeeks } from "react-icons/si";

const socialIcons = [
  // { icon: faFacebookF, link: "#!" },
  // { icon: faDribbble, link: "#!" },
  { icon: faInstagram, link: "https://www.instagram.com/aditya.dharashivkar24/", type: "fontawesome" },
  { icon: faLinkedin, link: "https://www.linkedin.com/in/aditya-dharashivkar-b58267276/", type: "fontawesome" },
  { icon: SiLeetcode, link: "https://leetcode.com/u/Aditya_Dharashivkar/", type: "reacticon" },
  { icon: SiGeeksforgeeks, link: "https://www.geeksforgeeks.org/user/adharashjtll/", type: "reacticon" },
];

const SocialMedia = () => {
  return (
    <div className="flex items-center justify-center gap-1">
      {socialIcons.map((item, index) => (
        <a
          href={item.link}
          target="_blank"
          rel="noopener noreferrer"
          className={`text-picto-primary hover:bg-picto-primary p-2 pt-3 xs:p-2.5 xs:pt-3.75 sm:pt-4 md:pt-5 sm:p-3 md:p-3.75 hover:text-white rounded-md transition-all duration-300 inline-flex items-center justify-center`}
          key={index}
        >
          {item.type === "fontawesome" ? (
            <FontAwesomeIcon
              icon={item.icon}
              className={`text-xl w-4.5 h-4.5`}
            />
          ) : (
            <item.icon className={`text-xl w-4.5 h-4.5`} />
          )}
        </a>
      ))}
    </div>
  );
};

export default SocialMedia;
