"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const links = [
  {
    name: "HOME",
    path: "/",
  },

  {
    name: "JEE ADVANCE",
    path: "/JEE_ADVANCE",
  },
  
  {
    name: "JEE MAINS",
    path: "/JEE_MAINS",
  },
  {
    name: "NEET",
    path: "/NEET",
  },

  {
    name: "RESUME",
    path: "/resume",
  },
  {
    name: "CONTACT",
    path: "/contact",
  },

];

const Nav = () => {
  const pathname = usePathname();
  console.log(pathname);
  return (
    <nav className="flex gap-8">
      {links.map((link, index) => {
        return (
          <Link
            href={link.path}
            key={index}
            className={`${
              link.path === pathname && "text-accent border-b-2 border-accent "
            } capitalize front-medium hover:text-accent transition-all`}
          >
            {link.name}
          </Link>
        );
      })}
    </nav>
  );
};

export default Nav;
