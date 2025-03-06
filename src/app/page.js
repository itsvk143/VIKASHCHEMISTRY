import Photo from "@/components/Photo";
import Social from "@/components/Social";
import { Button } from "@/components/ui/button";
import { IoIosCall } from "react-icons/io";
import { SiGmail } from "react-icons/si";
import { FaLocationDot } from "react-icons/fa6";

const Home = () => {
  return (
    <section className="h-full">
      <div className="container mx-auto h-full">
        <div className="flex flex-col xl:flex-row items-center justify-between xl:pt-8 xl:pb-24">
          <div className="text-center xl:text-left order-1 xl:order-none">
            <span className="text-yellow-500 text-xl">Passionate about making Chemistry easy and interesting.</span>
            <h1 className="text-6xl mb-6">
              CHEMISTRY MENTOR
              <br /> <span className="h1 text-accent">VIKASH KUMAR</span>
            </h1>

            <p className="max-w-[500px] mb-2 text-white/80">
              SENIOR CHEMISTRY LECTURAR WITH 9+ YEAR OF EXPERIENCE  
           </p>

            {/* Exam Buttons */}
            <div className="grid w-full gap-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
              <a href="/JEE_ADVANCE">
                <Button variant="outline" size="lg">JEE Advance</Button>
              </a>
              <a href="/JEE_MAINS">
                <Button variant="outline" size="lg">JEE Mains</Button>
              </a>
              <a href="/NEET">
                <Button variant="outline" size="lg">NEET</Button>
              </a>
              <a href="/ComingSoon">
                <Button variant="outline" size="lg">CBSE Board</Button>
              </a>
              <a href="/ComingSoon">
                <Button variant="outline" size="lg">ICSE Board</Button>
              </a>
              <a href="/ComingSoon">
                <Button variant="outline" size="lg">CUET</Button>
              </a>
              <a href="/ComingSoon">
                <Button variant="outline" size="lg">OLYMPIAD</Button>
              </a>
              <a href="/ComingSoon">
                <Button variant="outline" size="lg">KVPY Exam</Button>
              </a>
              <a href="/ComingSoon">
                <Button variant="outline" size="lg">NTSE</Button>
              </a> 
            </div>
          </div>
          {/* Profile Photo */}
          <div className="order-1 xl:order-none mb-4 xl:mb-0">
            <Photo />
          </div>
        </div>
      </div>
      {/* Contact Section */}
      <div className="bg-gray-900 p-6 rounded-lg shadow-lg w-full">
        <div className="flex flex-col md:flex-row items-center gap-4">
          <span className="bg-accent text-black p-2 rounded-lg text-lg font-semibold">Contact:-</span>
        
         {/* Social Links */}
          <div className="flex flex-col xl:flex-row items-center">
              <Social
                containerStyles="flex gap-5"
                iconStyles="w-9 h-9 border border-accent rounded-full flex justify-center items-center text-accent text-base hover:bg-accent hover:text-primary hover:transition-all duration-500 "
              />
            </div>

          <a href="tel:+918457876843">
            <Button variant="outline" size="lg" className="flex items-center gap-2">
              <IoIosCall className="text-xl" />
              <span>+91 8457876843</span>
            </Button>
          </a>

          <a href="mailto:itsvikash143@gmail.com">
            <Button variant="outline" size="lg" className="flex items-center gap-2">
              <SiGmail className="text-xl" />
              <span>itsvikash143@gmail.com</span>
            </Button>
          </a>
          <a href="https://www.google.com/maps?q=plot+no+125,+Aakash+Institute,+Bhubaneswar,+Odisha,+751016" target="_blank" rel="noopener noreferrer">
            <Button variant="outline" size="lg" className="flex items-center gap-2">
              <FaLocationDot className="text-xl" />
              <span>Plot No. 125, Aakash Institute, Bhubaneswar, Odisha</span>
            </Button>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Home;