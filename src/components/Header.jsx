import React from "react";
import Link from "next/link";
import { Button } from "./ui/button";
import Nav from "./Nav";
import MobileNav from "./MobileNav";
import { Sparkles } from "lucide-react";

const Header = () => {
  return (
    <header className="sticky top-0 z-40 bg-[#1c1c22]/90 backdrop-blur-md border-b border-white/10 py-4 xl:py-5 text-white transition-all">
      <div className="container mx-auto px-4 sm:px-6 flex justify-between items-center">
        
        {/* LOGO SECTION */}
        <Link href="/">
          <div className="group border-2 border-accent rounded-full px-5 py-1.5 transition-all duration-300 hover:bg-accent/10 cursor-pointer flex items-center gap-2">
            <h1 className="text-lg sm:text-xl font-bold tracking-wide uppercase">
              CVK <span className="text-accent group-hover:text-accent-hover transition-colors">Sir</span>
            </h1>
          </div>
        </Link>

        {/* DESKTOP NAV */}
        <div className="hidden xl:flex items-center gap-6">
          <Nav />
          
          <Link href="/Carrier">
            <Button variant="outline" className="border-accent/40 text-white font-medium hover:bg-accent/10 text-xs">
              CAREER GUIDANCE
            </Button>
          </Link>

          <a href="#inquiry">
            <Button className="bg-accent text-primary font-bold hover:bg-accent-hover transition-all text-xs flex items-center gap-1.5 shadow-md shadow-accent/20">
              <Sparkles className="w-3.5 h-3.5" />
              FREE DEMO
            </Button>
          </a>
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
