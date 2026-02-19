"use client";

import CountUp from "react-countup";

const stats = [

  {
    num: 700,
    text: "Student Selected in JEE Mains",
  },
  {
    num: 100,
    text: "Student Selected in JEE Advance",
  },
  {
    num: 500,
    text: "Student Selected in NEET",
  },
  {
    num: 9.0,
    text: "Years of experience",
  },
];

const Stats = () => {
  return (
    <section className="pt-8 pb-8 xl:pt-0 xl:pb-0">
      <div className="container mx-auto">
        <div className="flex flex-wrap gap-6 max-w-[80vw] mx-auto xl:max-w-none">
          {stats.map((item, index) => {
            return (
              <div
                className="flex-1 flex gap-4 items-center justify-center xl:justify-start"
                key={index}
              >
                <CountUp
                  end={item.num}
                  duration={5}
                  delay={2}
                  className="text-4xl xl:text-6xl font-extrabold"
                />
                <h2 className="text-4xl p-0">
                  +</h2>
                <p
                  className={`${item.text.length < 15 ? "max-w-[100px]" : "max-w-[150px]"
                    } leading-snug text-white/80 text-sm xl:text-base`}
                >
                  {item.text}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Stats;
