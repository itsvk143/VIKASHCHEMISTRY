import React from "react";
import Link from "next/link";
import { Button } from "./ui/button";
import Nav from "./Nav";
import MobileNav from "./MobileNav";

const Header = () => {
  return (
    <header className="py-8 xl:py-12 text-white">
      <div className="container mx-auto flex justify-between items-centre ">
                <Link href="/">
            <Button variant="outline"
                  size="lg"
                  className="flex text-xl items-center gap-2">
                 CVK Sir<span className="text-accent"></span>
            </Button>
                </Link>

        <div className="hidden xl:flex items-center gap-8">
          <Nav />
          {/* <Link href="/">
            <Button>Hire Me</Button>
          </Link> */}
        </div>
        <div className="xl:hidden">
          <MobileNav/>
        </div>
      </div>
    </header>
  );
};

export default Header;
