import { useState } from "react";
import idea_img from "../assets/images/process/idea.svg";
import design_img from "../assets/images/process/design.svg";
import develop_img from "../assets/images/process/develop.svg";
import launch_img from "../assets/images/process/launch.svg";
import Button from "./Button";
import { BiSolidUpArrow } from "react-icons/bi";
import RevealText from "../utilities/RevealText";
import { motion } from "framer-motion";

const Process = () => {
  const [currentStep, setCurrentStep] = useState("Idea");

  const steps = [
    {
      name: "Idea",
      header: "Your vision is unique",
      description:
        "Nurture your idea into a blueprint for success with our strategic insights and industry expertise. Your vision is unique, let us shape it.",
      image: idea_img,
    },
    {
      name: "Design",
      header: "Crafting the blueprint for success",
      description:
        "Design is more than aesthetics, it’s about creating user experiences that resonate and convert. Our design experts shape your vision into a stunning reality.",
      image: design_img,
    },
    {
      name: "Develop",
      header: "Turning blueprints into reality",
      description:
        "We breathe life into designs, building robust platforms ready to disrupt markets. Harness the experience of our development team to bring your concept to life.",
      image: develop_img,
    },
    {
      name: "Launch",
      header: "Your launchpad to the market",
      description:
        "Launching is just the beginning, we ensure your product makes a splash and keeps making waves, ensuring continual customer acquisition.",
      image: launch_img,
    },
  ];

  const activeStep = steps.find((step) => step.name === currentStep);

  return (
    <div className="px-5 md:px-10 lg:px-12 xl:px-32">
      <motion.h2
        initial="hidden"
        whileInView="visible"
        className="text-left text-3xl md:text-4xl lg:text-[2.5rem] lg:w-4/6"
      >
        <RevealText text="From " />
        <span className="text-accent">
          <RevealText text="Spark" delay={0.3} />
        </span>{" "}
        <RevealText text="to" delay={0.5} />
        {" "}
        <span className="text-accent">
          <RevealText text="Spotlight" delay={0.7} />
        </span>
        <RevealText delay={1} text=" : we take you every step of the way to success." />
      </motion.h2>

      <div className="flex flex-col md:flex-row mt-10 md:mt-20 h-auto md:h-[400px] gap-20">
        <div className="space-y-10 w-full md:w-1/2 flex flex-col justify-between">
          <div className="border-2 border-accent-light p-3 rounded-full flex gap-2 ">
            {steps.map((step) => (
              <button
                key={step.name}
                onClick={() => setCurrentStep(step.name)}
                className={`flex-1 rounded-full py-4 font-medium ${
                  currentStep === step.name
                    ? "bg-accent-light text-primary"
                    : "bg-transparent text-accent-light"
                }`}
              >
                {step.name}
              </button>
            ))}
          </div>
          {activeStep && (
            <motion.div
              key={activeStep.name}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="text-left space-y-9"
            >
              <motion.h3
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 20 }}
                transition={{ duration: 0.3 }}
                className="text-[2rem] font-semibold"
              >
                <RevealText text={activeStep.header} staggerDelay={0.02} />
              </motion.h3>
              <motion.p
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 20 }}
                transition={{ duration: 0.3 }}
                className="mt-3 text-light-grey/70 text-lg"
              >
                <RevealText text={activeStep.description} staggerDelay={0.02} />
              </motion.p>
            </motion.div>
          )}
          <Button>
            Book a Call <BiSolidUpArrow className="rotate-90" />
          </Button>
        </div>

        <div className="w-full md:w-1/2">
          {activeStep && (
            <motion.img
              key={activeStep.name} 
              src={activeStep.image}
              alt={activeStep.name}
              className="mx-auto mw-full h-full mb-5"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
            />
          )}
        </div>
      </div>
    </div>
  );
};

export default Process;
