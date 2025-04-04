import Link from "next/link";

import { FaGithub, FaLinkedinIn, FaTwitter } from "react-icons/fa";
import { FaFacebook, FaInstagram } from "react-icons/fa6";

const socials = [
  {
    icon: <FaLinkedinIn />,
    path: "https://www.linkedin.com/in/vivek-kumar-rawat-04a64b102/",
  },
  {
    icon: <FaFacebook />,
    path: "https://www.linkedin.com/in/vivek-kumar-rawat-04a64b102/",
  },
  {
    icon: <FaInstagram />,
    path: "https://www.linkedin.com/in/vivek-kumar-rawat-04a64b102/",
  },
];

const Social = ({ containerStyles, iconStyles }) => {
  return (
    <div className={containerStyles}>
      {socials.map((item, index) => {
        return (
          <Link key={index} href={item.path} className={iconStyles}>
            {item.icon}
          </Link>
        );
      })}
    </div>
  );
};

export default Social;
