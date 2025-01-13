import RevealText from "../../utilities/RevealText";
import { motion } from "framer-motion";

interface TestimonialCardProps {
  organization: string;
  comment: string;
  reviewer: {
    name: string;
    position: string;
    image: string;
  };
}

const TestimonialCard: React.FC<TestimonialCardProps> = ({ organization, comment, reviewer }) => {
  return (
    <div className="bg-accent-dark rounded-3xl p-7 h-fit w-full flex flex-col md:flex-row gap-10 md:gap-4">
      <div className="space-y-7 flex-1">
        <motion.h4 initial="hidden" whileInView="visible" className="font-medium text-lg">
          <RevealText text={organization} staggerDelay={0.015} />
        </motion.h4>
        <motion.p initial="hidden" whileInView="visible" className="leading-relaxed">
          <RevealText text={comment} delay={0.5} staggerDelay={0.05} />
        </motion.p>
        <motion.p initial="hidden" whileInView="visible" className="font-medium">
          <RevealText text={`${reviewer.name}, ${reviewer.position}`} delay={5} staggerDelay={0.015} />
        </motion.p>
      </div>
      <div className="w-full md:w-2/5 rounded-2xl h-[400px] md:h-auto overflow-hidden">
        <img src={reviewer.image} alt={`${reviewer.name}`} className="w-full h-full object-cover" />
      </div>
    </div>
  );
};

export default TestimonialCard;
