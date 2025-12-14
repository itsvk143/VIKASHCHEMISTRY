"use client";

import Photo from "@/components/Photo";
import Social from "@/components/Social";
import Stats from "@/components/Stats";
import { Button } from "@/components/ui/button";
import { IoIosCall } from "react-icons/io";
import { SiGmail } from "react-icons/si";
import { FaLocationDot } from "react-icons/fa6";

import { useEffect, useRef, useState } from "react";
import { useRouter } from "next/navigation";

const Home = () => {
  const router = useRouter();
  const endRef = useRef(null);
  const [triggered, setTriggered] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !triggered) {
          setTriggered(true);

          // Delay is optional (gives a smoother feel)
          setTimeout(() => {
            router.push("/resume"); // Navigate to Resume page
          }, 600);
        }
      },
      { threshold: 1 } // Element must be fully visible
    );

    if (endRef.current) observer.observe(endRef.current);

    return () => observer.disconnect();
  }, [triggered, router]);

  return (
    <section className="min-h-screen bg-black text-white flex flex-col justify-between">
      <div className="container mx-auto flex-1">
        <div className="flex flex-col xl:flex-row items-center justify-between xl:pt-8 xl:pb-10">
          <div className="text-center xl:text-left order-2 xl:order-none">
            <span className="text-xl">KOTA'S EXPERIENCED </span>
            <h1 className="text-6xl">
              CHEMISTRY MENTOR <br />
              <span className="h1 text-accent">VIKASH KUMAR</span>
            </h1>
            <span className="text-yellow-500 text-lg">
              Passionate about making Chemistry easy and interesting.
            </span>

            <p className="max-w-[500px] mb-2 pb-5 text-white/80">
              SENIOR CHEMISTRY LECTURER WITH 10+ YRS OF EXPERIENCE
            </p>

            {/* Exam Buttons */}
            <div className="grid w-full gap-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
              <a href="/JEE_ADVANCE">
                <Button variant="outline" size="lg">
                  JEE Advance
                </Button>
              </a>
              <a href="/JEE_MAINS">
                <Button variant="outline" size="lg">
                  JEE Mains
                </Button>
              </a>
              <a href="/NEET">
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

      {/* Footer Section */}
      <footer className="bg-gray-800 px-4 pt-6 pb-4 text-center w-full">
        <p className="text-white text-lg font-semibold mb-4">Contact us</p>
        <div className="p-6 rounded-lg shadow-lg w-full">
          <div className="flex flex-col md:flex-row items-center gap-4">
            {/* Social Links */}
            <div className="flex flex-col xl:flex-row items-center">
              <Social
                containerStyles="flex gap-5"
                iconStyles="w-9 h-9 border border-accent rounded-full flex justify-center items-center text-base hover:bg-accent hover:text-primary transition-all duration-500"
              />
            </div>

            <a href="tel:+918457876843">
              <Button
                variant="outline"
                size="lg"
                className="flex text-white/80 items-center gap-2"
              >
                <IoIosCall className="text-l text-accent" />
                <span>+91 8457876843</span>
              </Button>
            </a>

            <a href="mailto:itsvikash143@gmail.com">
              <Button
                variant="outline"
                size="lg"
                className="flex text-white/80 items-center gap-2"
              >
                <SiGmail className="text-l text-accent" />
                <span>itsvikash143@gmail.com</span>
              </Button>
            </a>

            <a
              href="https://www.google.com/maps?q=plot+no+125,+Aakash+Institute,+Bhubaneswar,+Odisha,+751016"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button
                variant="outline"
                size="lg"
                className="flex text-white/80 items-center gap-2"
              >
                <FaLocationDot className="text-l text-accent" />
                <span>
                  Plot No. 125, Aakash Institute, Bhubaneswar, Odisha
                </span>
              </Button>
            </a>
          </div>
        </div>
      </footer>

      <div className="bg-black w-full">
        <Stats />
      </div>

      {/* 👇 Auto-scroll trigger (when visible → go to Resume page) */}
      <div ref={endRef} className="h-1"></div>
    </section>
  );
};

export default Home;
