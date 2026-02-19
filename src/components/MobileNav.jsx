"use client";

import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { CiMenuFries } from "react-icons/ci";

const links = [
  { name: "HOME", path: "/" },
  { name: "JEE ADVANCE", path: "/jeeadvancechemistry" },
  { name: "JEE MAINS", path: "/jeemainschemistry" },
  { name: "NEET", path: "/neetchemistry" },
  { name: "TEST SERIES", path: "/test-series" },
  { name: "RESUME", path: "/resume" },
  { name: "CONTACT", path: "/contact" },
  {
    name: "CARRIER GUIDANCE",
    path: "/Carrier",
  },
];

const MobileNav = () => {
  const pathname = usePathname();

  return (
    <Sheet>
      <SheetTrigger className="flex justify-center items-center">
        <CiMenuFries className="text-[32px] text-accent" />
      </SheetTrigger>
      <SheetContent className="flex flex-col items-start pl-6 pt-10">
        {/* Logo/Title */}
        <div className="mb-10 text-left text-2xl w-full">
          <Link href="/">
            <h1 className="text-4xl font-semibold">
              CVK Sir<span className="text-accent">.</span>
            </h1>
          </Link>
        </div>

        {/* Navigation Links */}
        <nav className="flex flex-col gap-6 w-full">
          {links.map((link, index) => (
            <Link
              href={link.path}
              key={index}
              className={`${link.path === pathname
                ? "text-accent border-b-2 border-accent"
                : ""
                } text-xl capitalize hover:text-accent transition-all`}
            >
              {link.name}
            </Link>
          ))}
        </nav>
      </SheetContent>
    </Sheet>
  );
};

export default MobileNav;


