import { useState } from "react";
import idea_img from "../assets/images/process/idea.svg";
import design_img from "../assets/images/process/design.svg";
import develop_img from "../assets/images/process/develop.svg";
import launch_img from "../assets/images/process/launch.svg";
import Button from "./Button";
import { BiSolidUpArrow } from "react-icons/bi";

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
    <div className="px-12">
      <h2 className="text-left text-[2.5rem] w-4/6">
        From <span className="text-accent">Spark</span> to{" "}
        <span className="text-accent">Spotlight:</span> we take you every step
        of the way to success.
      </h2>

      <div className="flex mt-20 h-[400px] gap-20">
        {/* Step Navigation */}
        <div className="space-y-10 w-1/2 flex flex-col justify-between">
          <div className="border-2 border-accent-light p-3 rounded-full flex gap-5 ">
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
            {
              activeStep && (
                <div className="text-left space-y-9">

                <h3 className="text-[2rem] font-semibold">{activeStep.header}</h3>
                <p className="mt-3 text-light-grey/70 text-lg">{activeStep.description}</p>
              </div>
              )
            }
            <Button>Book a Call <BiSolidUpArrow className="rotate-90" /></Button>
        </div>

        {/* Step Content */}
        <div className="w-1/2">
          {activeStep && (
            <img
              src={activeStep.image}
              alt={activeStep.name}
              className="mx-auto w-full h-full mb-5"
            />
          )}
        </div>
      </div>
    </div>
  );
};

export default Process;
