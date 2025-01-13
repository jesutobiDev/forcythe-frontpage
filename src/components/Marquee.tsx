import Marquee from "react-fast-marquee";
import RevealText from "../utilities/RevealText";
import { motion } from "framer-motion";

const MarqueeSection = () => {
  // List of image URLs
  const images = [
    "https://forcythe.com/images/Project%20Images/stac.svg",
    "https://forcythe.com/images/Project%20Images/activity.svg",
    "https://forcythe.com/images/Project%20Images/africaFund.svg",
    "https://forcythe.com/images/Project%20Images/exec-pro.svg",
    "https://forcythe.com/images/Project%20Images/phone.svg",
    "https://forcythe.com/images/Project%20Images/phone.svg",
  ];

  return (
    <div className="space-y-10">
      <motion.h2
        className="text-center text-3xl md:text-4xl lg:text-[2.5rem] lg:w-5/6 mx-auto"
        initial="hidden"
        whileInView="visible"
      >
        <RevealText
          text="Success in"
          className="inline-block"
        />{" "}
        
        <span className="text-accent">
          <RevealText
            text="Motion"
            delay={0.7}
            className="inline-block"

          />
        </span>{" "}
        
        <RevealText
          text="- Our clients' journey"
          delay={1.1}
          className="inline-block"
        />
      </motion.h2>

      <Marquee direction="left" speed={100} delay={5}>
        {images.map((image, index) => (
          <img
            key={index}
            src={image}
            alt={`Client ${index + 1}`}
            className="h-full"
          />
        ))}
      </Marquee>

      <Marquee direction="right" speed={100} delay={5}>
        {images.map((image, index) => (
          <img
            key={index}
            src={image}
            alt={`Client ${index + 1}`}
            className="w-full h-full"
          />
        ))}
      </Marquee>
    </div>
  );
};

export default MarqueeSection;
