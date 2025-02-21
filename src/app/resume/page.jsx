"use client";

import {
  FaHtml5,
  FaCss3,
  FaReact,
  FaJs,
  FaFigma,
  FaNodeJs,
} from "react-icons/fa";
import { SiTailwindcss, SiNextdotjs } from "react-icons/si";

import { Tabs, TabsContent, TabsTrigger, TabsList } from "@/components/ui/tabs";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { ScrollArea } from "@/components/ui/scroll-area";
import { motion } from "framer-motion";
import Photo1 from "@/components/Photo1";
import { FiDownload } from "react-icons/fi";
import { Button } from "@/components/ui/button";



const about = {
  title: "About Me",
  description:
    "My teaching methodology focuses on strong fundamentals, analytical thinking, and practical application of concepts to help students achieve their academic and career goals.",
  info: [
    {
      fieldName: "Name:-",
      fieldValue: "Vikash Kumar",
    },
    {
      fieldName: "Phone:-",
      fieldValue: "(+91)8457876843",
    },
    {
      fieldName: "Experience:-",
      fieldValue: "9+ Years",
    },
    {
      fieldName: "Email:-",
      fieldValue: "itsvikash143@gmail.com",
    },
    {
      fieldName: "Nationality:-",
      fieldValue: "Indian",
    },
    {
      fieldName: "Freelance:-",
      fieldValue: "Available",
    },
    {
      fieldName: "Language",
      fieldValue: "English, Hindi",
    },
  ],
};

const experience = {
  icon: "/assets/resume/badge.svg",
  title: "My Experience",
  description:
   "Senior Chemistry Educator with over 9 years of Experience in mentoring students for NATIONAL & STATE LEVEL competitive exams like IIT-JEE (Mains & Advanced)| NEET| CUET| Boards| KVPY| Olympiads and various other national and international examinations. I have guided numerous students from India and abroad to excel in their respective exams through in-depth subject knowledge with a strategic approach conceptual clarity, problem-solving techniques, and result-oriented mentorship. Passionate about making Chemistry easy and interesting.",
  
items: [
    {
      company: "Aakash Institute, Bhubaneswar",
      position: "Senior Chemistry Lecturer",
      duration: "June 2022 - Till now",
    },
    {
      company: "Narayana Institute",
      position: "Senior Chemistry Lecturer",
      duration: "May 2021 - May 2022",
    },
    {
      company: "Aakash Institute, Haldwani",
      position: "Chemistry Lecturer",
      duration: "Feb 2019 - March 2020",
    },
    {
      company: "Resonance Edv",
      position: "Chemistry Lecturer",
      duration: "June 2016 - Jan 2019",
    },
  ],
};
const education = {
  icon: "/assets/resume/cap.svg",
  title: "My Education",
  description:
    "I completed my Bachelor of Technology (B.Tech) in Chemical Engineering from NIT, Rourkela, from June 2012 to May 2016. During these four years, I developed a strong foundation in Chemistry and chemical engineering.",
  items: [
    {
      institution: "B-Tech(Chemical Engineering)",
      degree: "NIT Rourkela",
      duration: "June 2012 - May 2016",
    },
    {
      institution: " JEE Preparation ",
      degree: "MAGADH SUPER 30",
      duration: "June 2010 - March 2012",
    },
    {
      institution: " 12 BOARD",
      degree: "JAI HIND PUBLIC SCHOOL",
      duration: "June 2010 - March 2012",
    },
    {
      institution: "10 BOARD",
      degree: " MANAV BHARTI NATIONAL SCHOOL",
      duration: "June 2001 - March 2010",
    },
  ],
};

const skills = {
  title: "Results",
  description:
    " ",
  skillList: [
    // {
    //   icon: <FaHtml5 />,
    //   name: "html5",
    // },
    
  ],
};

const Resume = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { delay: 2.4, duration: 0.4, ease: "easeIn" },
      }}

      
      className="min-h-[80vh] flex items-center justyfy-center py-12 xl:py-0"
    >
      <div className="container mx-auto">
        <Tabs
          defaultValue="experience"
          className="flex flex-col xl:flex-row gap-[60px]"
        >
          <TabsList className="flex flex-col w-full max-w-[250px] mx-auto xl:mx-0 gap-6">
            <TabsTrigger value="experience">Experience</TabsTrigger>
            <TabsTrigger value="education">Education</TabsTrigger>
            <TabsTrigger value="about">About me</TabsTrigger>
            <TabsTrigger value="skills">Results</TabsTrigger>
            
            <div className="flex flex-col xl:flex-row items-center">
              <a href="/assets/VikashKumarResume.pdf" download="Vikash_Kumar_Resume.pdf">
                <Button variant="outline" size="lg" className="uppercase flex items-center gap-10">
                  <span>Download CV</span>
                  <FiDownload className="text-xl" />
                </Button>
              </a>
            </div>
            


          </TabsList>
          <div className="min-h-[90vh]" w-full>
            <TabsContent value="experience" className="w-full">
              <div className="flex flex-col gap-[30px] text-center xl:text-left">
                <h3 className="text-4xl font-bold">{experience.title}</h3>
                <p className="max-w-[660px] text-white/60 mx-auto xl:mx-0">
                  {experience.description}
                </p>
                <ScrollArea className="h-[400px]">
                  <ul className="grid grid-cols-2 lg:grid-cols-2 gap-[30px]">
                    {experience.items.map((item, index) => {
                      return (
                        <li
                          key={index}
                          className="bg-[#232329] py-6 px-10 rounded-xl flex flex-col justify-center items-center lg:items-start gap-1"
                        >
                          <span className="text-accent">{item.duration}</span>
                          <h3 className="text-xl max-w-[260px] min-h-[60px] text-center lg:text-left">
                            {item.position}
                          </h3>
                          <div className="flex items-center gap-3">
                            <span className="w-[6px] h-[6px] rounded-full bg-accent "></span>
                            <p className="text-white/60 xl:text-[13px]">
                              {item.company}
                            </p>
                          </div>
                        </li>
                      );
                    })}
                  </ul>
                </ScrollArea>
              </div>
            </TabsContent>
            <TabsContent value="education" className="w-full">
              <div className="flex flex-col gap-[30px] text-center xl:text-left">
                <h3 className="text-4xl font-bold">{education.title}</h3>
                <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">
                  {education.description}
                </p>
                <ScrollArea className="h-[400px]">
                  <ul className="grid grid-cols-1 lg:grid-cols-2 gap-[30px]">
                    {education.items.map((item, index) => {
                      return (
                        <li
                          key={index}
                          className="bg-[#232329] py-6 px-10 rounded-xl flex flex-col justify-center items-center lg:items-start gap-1"
                        >
                          <span className="text-accent">{item.duration}</span>
                          <h3 className="text-xl max-w-[260px] min-h-[60px] text-center lg:text-left">
                            {item.degree}
                          </h3>
                          <div className="flex items-center gap-3">
                            <span className="w-[6px] h-[6px] rounded-full bg-accent "></span>
                            <p className="text-white/60 xl:text-[13px]">
                              {item.institution}
                            </p>
                          </div>
                        </li>
                      );
                    })}
                  </ul>
                </ScrollArea>
              </div>
            </TabsContent>
            <TabsContent value="skills" className="w-full h-full">
              <div className="flex flex-col gap-[30px] text-center xl:text-left">
                <h3 className="text-4xl font-bold">{skills.title}</h3>
                <p className="max-w-[600px] text-white/60 mx-auto xl-mx-0">
                  {skills.description}
                </p>
              </div>
              <ul className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 xl:gap-[30px] ">
                {skills.skillList.map((skill, index) => {
                  return (
                    <li key={index}>
                      <TooltipProvider>
                        <Tooltip>
                          <TooltipTrigger className="w-full h-[150px] bg-[#232329] rounded-xl flex justify-center items-center group">
                            <div className="text-6xl group-hover:text-accent transition-all duration-300">
                              {skill.icon}
                            </div>
                          </TooltipTrigger>
                          <TooltipContent>
                            <p className="capitalize">{skill.name}</p>
                          </TooltipContent>
                        </Tooltip>
                      </TooltipProvider>
                    </li>
                  );
                })}
              </ul>
            </TabsContent>
            <TabsContent
              value="about"
              className="w-full text-center xl:text-left"
            >
              <div className="flex flex-col gap-[30px]">
                <h3 className="text-4xl font-bold">{about.title}</h3>
                <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">
                  {about.description}
                </p>
                <ul className="grid grid-cols-1 xl:grid-cols-2 gap-y-6 max-w-[620px] mx-auto xl:mx-0">
                  {about.info.map((item, index) => {
                    return (
                      <li
                        key={index}
                        className="flex items-center justify-center xl:justify-start gap-4"
                      >
                        <span className="text-white/60">{item.fieldName}</span>
                        <span className="text-xl">{item.fieldValue}</span>
                      </li>
                    );
                  })}
                </ul>
              </div>
            </TabsContent>
          </div>
        </Tabs>
      </div>
      {/* Photo section moved to the rightmost side */}
      <div className="absolute top-40 right-4 w-[27%]">
          <Photo1 />
        </div>

    </motion.div>
  );
};

export default Resume;
