import { motion } from "framer-motion";
import splitString from "./splitString";

interface RevealTextProps {
  text: string;
  staggerDelay?: number;
  delay?: number;
  className?: string;
}

const RevealText: React.FC<RevealTextProps> = ({
  text,
  staggerDelay = 0.05,
  delay = 0,
  className = "",
}) => {
  const textChars = splitString(text);

  const parentVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: staggerDelay,
        delayChildren: delay,
      },
    },
  };

  const defaultVariants = {
    hidden: { opacity: 0, y: 10 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 },
    },
  };

  return (
    <motion.span
      variants={parentVariants} 
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      className={className}
    >
      {textChars.map((char, index) => (
        <motion.span key={index} variants={defaultVariants}>
          {char}
        </motion.span>
      ))}
    </motion.span>
  );
};

export default RevealText;
