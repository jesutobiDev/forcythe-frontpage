import { useState, useEffect } from "react";
import RevealText from "../utilities/RevealText";
import { motion } from "framer-motion";

const advantageList = [
  {
    name: "Experience",
    text: "Decades of collective wisdom. Leverage our extensive experience to avoid common pitfalls and accelerate your business growth.",
  },
  {
    name: "Quick Support",
    text: "We are your reliable partner, always there when you need us, ensuring smooth operations at every stage of your growth.",
  },
  {
    name: "Cost Savings",
    text: "Maximising impact, minimising costs efficiency is key. We provide cost-effective solutions without compromising on quality.",
  },
];

const achievementList = [
  {
    name: "Clients",
    value: 50,
  },
  {
    name: "Projects",
    value: 120,
  },
  {
    name: "Team Leads",
    value: 10,
  },
  {
    name: "Glorious Years",
    value: 10,
  },
];

const Advantages = () => {
  return (
    <div className="md:px-10 lg:px-12 xl:px-32 space-y-20 bg-gradient-to-b from-primary via-accent-dark to-primary">
      <motion.h2 className="px-5 md:px-0 text-3xl md:text-4xl lg:text-[2.5rem] text-accent-light mx-auto lg:w-5/6 text-center">
        <RevealText text="Your best call for B2B/B2C product innovation" />
      </motion.h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-7 px-5 md:px-0">
        {advantageList.map((advantage, index) => (
          <div
            key={index}
            className="bg-primary rounded-xl p-7 h-fit space-y-3"
          >
            <div></div>
            <div className="bg-[#5d91c3] w-12 h-12 rounded-lg flex items-center justify-center">
              <img
                src="https://forcythe.com/images/layers-three.svg"
                alt="icon-three-layers"
                className="w-7 h-7"
              />
            </div>
            <h4 className="text-2xl font-medium">{advantage.name}</h4>
            <motion.p className="text-lg opacity-70"><RevealText text={advantage.text} /></motion.p>
          </div>
        ))}
      </div>
      <div className="w-full h-[300px] md:w-[600px] md:h-[300px] lg:w-[880px] rounded-t-full lg:h-[440px] mx-auto border-t-2 border-accent-light flex flex-col items-center justify-end gap-16">
        <motion.h3 className="w-11/12 text-xl px-5 md:px-0 md:text-2xl lg:text-3xl md:w-3/5 text-center font-medium">
          <RevealText text="We build solutions that help " />
          <span className="text-accent">
            <RevealText text="businesses" delay={1.2} />
          </span>
          <RevealText text=" of all sizes to " delay={1.7} />
          <span className="text-accent">
            <RevealText text="scale" delay={2.5} />
          </span>
        </motion.h3>
        <div className="flex gap-10 px-5">
          {achievementList.map((achievement, index) => (
            <Achievement key={index} achievement={achievement} />
          ))}
        </div>
      </div>
    </div>
  );
};

const Achievement = ({ achievement }: { achievement: { name: string; value: number } }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let isMounted = true;
    const interval = setInterval(() => {
      if (count < achievement.value && isMounted) {
        setCount((prev) => Math.min(prev + 1, achievement.value));
      }
    }, 10);

    return () => {
      isMounted = false;
      clearInterval(interval);
    };
  }, [count, achievement.value]);

  return (
    <div className="">
      <motion.h4 className="text-accent text-3xl md:text-5xl font-medium">
        {count}+
      </motion.h4>
      <p className="md:text-lg mt-[2px]">{achievement.name}</p>
    </div>
  );
};

export default Advantages;
