import { useState, useEffect } from "react";
import testimonialsList from "../dummy-data/testimonials.json";
import TestimonialCard from "./CardComponents/TestimonialCard";
import RevealText from "../utilities/RevealText";
import { motion } from "framer-motion";

const Testimonials = () => {
  const [selectedTestimonialIndex, setSelectedTestimonialIndex] = useState(0);

  const calculateLeftPosition = (index: number) => {
    switch (index) {
      case 0:
        return "0%";
      case 1:
        return "20%";
      case 2:
        return "40%";
      case 3:
        return "30%";
      case 4:
        return "50%";
      default:
        return "0%";
    }
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setSelectedTestimonialIndex((prevIndex) => {
        const nextIndex = (prevIndex + 1) % testimonialsList.length;
        return nextIndex;
      });
    }, 20000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="px-[4rem]">
      <motion.h2
        initial="hidden"
        whileInView="visible"
        className="text-center text-[2.5rem] w-5/6 mx-auto"
      >
        <RevealText text="Discover the" />{" "}
        <span className="text-accent">
          <RevealText
            text="transformative stories"
            delay={0.7}
            className="inline-block"
          />
        </span>{" "}
        <RevealText text="of startups that scaled new heights with us" delay={2} />{" "}
      </motion.h2>
      <div className="flex justify-center mt-8 w-full rounded-full border border-accent overflow-hidden h-16">
        {testimonialsList.map((testimonial, index) => (
          <button
            key={index}
            className={`flex-1 flex items-center justify-center ${
              selectedTestimonialIndex === index ? "bg-accent-dark" : ""
            }`}
            onClick={() => setSelectedTestimonialIndex(index)}
          >
            <img
              src={testimonial.logo}
              alt={`Logo of ${testimonial.organization}`}
              className="max-w-24"
            />
          </button>
        ))}
      </div>
      <div className="mt-8 relative w-full h-[400px]">
        {testimonialsList.map((testimonial, index) => (
          <div
            key={index}
            className={`absolute transition-opacity duration-300 w-1/2 h-full ${
              selectedTestimonialIndex === index ? "opacity-100" : "opacity-0"
            }`}
            style={{
              left: calculateLeftPosition(index),
            }}
          >
            {selectedTestimonialIndex === index && (
              <TestimonialCard {...testimonial} />
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Testimonials;
