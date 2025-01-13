import Button from "./Button";
import { BiSolidUpArrow } from "react-icons/bi";
import splitString from "../utilities/splitString";
import { motion } from "framer-motion";
import RevealText from "../utilities/RevealText";

const Hero = () => {
  const headingTextOne = "We build";
  const headingTextTwo = "products";
  const headingTextThree = "that shape a better future";
  const paragraphText =
    "We’re the architects of digital excellence across industries. We redefine business with cutting-edge digital strategies that invoke sector-wide transformation.";

  const headingCharOne = splitString(headingTextOne);
  const headingCharTwo = splitString(headingTextTwo);
  const headingCharThree = splitString(headingTextThree);

  const typingVariant = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.12 } },
  };

  return (
    <div className="px-5 md:px-10 lg:px-12 w-full xl:px-32">
      <div className="h-fit rounded-[2rem] md:rounded-[3rem] bg-white/10 px-5 py-12 md:p-10 lg:p-16 space-y-7">
        <motion.h1
          className="text-6xl md:text-6xl lg:text-7xl md:w-10/12 lg:w-4/5"
          initial="hidden"
          whileInView="visible"
          variants={typingVariant}
        >
          {headingCharOne.map((char, index) => (
            <motion.span key={index} variants={typingVariant}>
              {char}
            </motion.span>
          ))}{" "}
          <span className="text-accent">
            {headingCharTwo.map((char, index) => (
              <motion.span key={index} variants={typingVariant}>
                {char}
              </motion.span>
            ))}
          </span>{" "}
          {headingCharThree.map((char, index) => (
            <motion.span key={index} variants={typingVariant}>
              {char}
            </motion.span>
          ))}
        </motion.h1>
        <motion.p
          initial="hidden"
          whileInView="visible"
          className="text-light-grey/70 w-11/12 lg:w-3/4 tracking-wide leading-relaxed md:text-lg"
        >
          <RevealText text={paragraphText} staggerDelay={0.012} delay={5} />
        </motion.p>
        <Button>
          Book a Call <BiSolidUpArrow className="rotate-90" />
        </Button>
      </div>
    </div>
  );
};

export default Hero;
