import React from "react";
import Link from "next/link";
import { Button } from "./ui/button";
import Nav from "./Nav";
import MobileNav from "./MobileNav";

const Header = () => {
  return (
    <header className="py-8 xl:py-12 text-white">
      <div className="container mx-auto flex justify-between items-center">
        
        {/* LOGO SECTION - Professional Outline Box */}
        <Link href="/">
          <div className="group border-2 border-accent rounded-full px-6 py-2 transition-all duration-300 hover:bg-accent/10 cursor-pointer">
            <h1 className="text-xl font-bold tracking-wide uppercase">
              CVK <span className="text-accent group-hover:text-accent-hover transition-colors">Sir</span>
            </h1>
          </div>
        </Link>

        {/* DESKTOP NAV */}
        <div className="hidden xl:flex items-center gap-8">
          <Nav />
          <Link href="/Carrier">
            <Button className="bg-accent text-primary font-bold hover:bg-accent-hover transition-all">
              CAREER GUIDANCE
            </Button>
          </Link>
        </div>

        {/* MOBILE NAV */}
        <div className="xl:hidden">
          <MobileNav />
        </div>
      </div>
    </header>
  );
};

export default Header;