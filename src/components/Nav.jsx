"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const links = [
  {
    name: "HOME",
    path: "/",
  },

  // {
  //   name: "JEE ADVANCE",
  //   path: "/jeeadvancechemistry",
  // },

  {
    name: "JEE",
    path: "/jeemainschemistry",
  },
  {
    name: "NEET",
    path: "/neetchemistry",
  },
  {
    name: "TEST SERIES",
    path: "/test-series",
  },

  {
    name: "RESUME",
    path: "/resume",
  },
  {
    name: "CONTACT",
    path: "/contact",
  },
  // {
  //   name: "CARRIER GUIDANCE",
  //   path: "/Carrier",
  // },

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
            className={`${link.path === pathname && "text-accent border-b-2 border-accent "
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
