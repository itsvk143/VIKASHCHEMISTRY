"use client";

import Photo from "@/components/Photo";
import Social from "@/components/Social";
import Stats from "@/components/Stats";
import { Button } from "@/components/ui/button";
import { IoIosCall } from "react-icons/io";
import { SiGmail } from "react-icons/si";
import { FaLocationDot } from "react-icons/fa6";
import Link from "next/link";

const Home = () => {
  return (
    <section className="min-h-screen bg-black text-white flex flex-col justify-between">
      <div className="container mx-auto flex-1">
        <div className="flex flex-col xl:flex-row items-center justify-between xl:pt-8 xl:pb-10">
          <div className="text-center xl:text-left order-2 xl:order-none">
            <span className="text-lg xl:text-xl">KOTA'S EXPERIENCED </span>
            <h1 className="text-4xl md:text-5xl xl:text-6xl font-semibold mb-6">
              CHEMISTRY MENTOR <br />
              <span className="text-accent">VIKASH KUMAR</span>
            </h1>
            <span className="text-yellow-500 text-lg block mb-4">
              Passionate about making Chemistry easy and interesting.
            </span>

            <p className="max-w-[500px] mb-6 text-white/80 mx-auto xl:mx-0">
              SENIOR CHEMISTRY LECTURER WITH 10+ YRS OF EXPERIENCE
            </p>

            {/* Exam Buttons */}
            <div className="grid w-full gap-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
              <a href="/jeeadvancechemistry">
                <Button variant="outline" size="lg">
                  JEE Advance
                </Button>
              </a>
              <a href="/jeemainschemistry">
                <Button variant="outline" size="lg">
                  JEE Mains
                </Button>
              </a>
              <a href="/neetchemistry">
                <Button variant="outline" size="lg">
                  NEET
                </Button>
              </a>
              <a href="/ComingSoon">
                <Button variant="outline" size="lg">
                  CBSE Board
                </Button>
              </a>
              <a href="/ComingSoon">
                <Button variant="outline" size="lg">
                  ICSE Board
                </Button>
              </a>
              <a href="/ComingSoon">
                <Button variant="outline" size="lg">
                  CUET
                </Button>
              </a>
              <a href="/ComingSoon">
                <Button variant="outline" size="lg">
                  OLYMPIAD
                </Button>
              </a>
              <a href="/ComingSoon">
                <Button variant="outline" size="lg">
                  KVPY Exam
                </Button>
              </a>
              <a href="/ComingSoon">
                <Button variant="outline" size="lg">
                  NTSE
                </Button>
              </a>
            </div>
          </div>

          {/* Profile Photo */}
          <div className="order-first xl:order-last mb-4 xl:mb-0">
            <Photo />
          </div>
        </div>
      </div>

      {/* Stats Section */}
      <div className="bg-black w-full my-6">
        <Stats />
      </div>

      {/* Footer Section */}
      <footer className="bg-gray-800 px-4 pt-8 pb-6 text-center w-full">
        <p className="text-white text-lg font-semibold mb-4">Contact us</p>
        <div className="p-4 sm:p-6 rounded-lg shadow-lg w-full max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row items-center justify-center gap-4">
            {/* Social Links */}
            <div className="flex flex-col xl:flex-row items-center">
              <Social
                containerStyles="flex gap-5"
                iconStyles="w-9 h-9 border border-accent rounded-full flex justify-center items-center text-base hover:bg-accent hover:text-primary transition-all duration-500"
              />
            </div>

            <a href="tel:+918457876843" className="w-full md:w-auto">
              <Button
                variant="outline"
                size="lg"
                className="flex text-white/80 items-center gap-2 w-full md:w-auto text-sm sm:text-base"
              >
                <IoIosCall className="text-l text-accent flex-shrink-0" />
                <span>+91 8457876843</span>
              </Button>
            </a>

            <a href="mailto:itsvikash143@gmail.com" className="w-full md:w-auto">
              <Button
                variant="outline"
                size="lg"
                className="flex text-white/80 items-center gap-2 w-full md:w-auto text-sm sm:text-base"
              >
                <SiGmail className="text-l text-accent flex-shrink-0" />
                <span>itsvikash143@gmail.com</span>
              </Button>
            </a>

            <a
              href="https://www.google.com/maps?q=Plot+No.+125,+Chandrasekharpur,+Bhubaneswar,+Odisha,+751016"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full md:w-auto"
            >
              <Button
                variant="outline"
                size="lg"
                className="flex text-white/80 items-center gap-2 w-full md:w-auto text-sm sm:text-base h-auto py-2 whitespace-normal text-left"
              >
                <FaLocationDot className="text-l text-accent flex-shrink-0" />
                <span>
                  Plot No. 125, Chandrasekharpur, Bhubaneswar, Odisha
                </span>
              </Button>
            </a>
          </div>

          {/* Footer Bottom Links & Privacy Policy */}
          <div className="mt-8 pt-4 border-t border-gray-700 flex flex-col sm:flex-row items-center justify-between text-xs sm:text-sm text-white/60 gap-3">
            <p>© {new Date().getFullYear()} CVK Sir (Vikash Kumar). All rights reserved.</p>
            <div className="flex items-center gap-6">
              <Link
                href="/privacy-policy"
                className="text-accent hover:underline font-medium transition-colors"
              >
                Privacy Policy
              </Link>
              <Link
                href="/contact"
                className="hover:text-accent font-medium transition-colors"
              >
                Contact Us
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </section>
  );
};

export default Home;
