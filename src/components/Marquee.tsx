import Marquee from "react-fast-marquee";

const MarqueeSection = () => {
  // List of image URLs
  const images = [
    "https://forcythe.com/images/Project%20Images/stac.svg",
    "https://forcythe.com/images/Project%20Images/activity.svg",
    "https://forcythe.com/images/Project%20Images/africaFund.svg",
    "https://forcythe.com/images/Project%20Images/exec-pro.svg",
    "https://forcythe.com/images/Project%20Images/phone.svg",
    "https://forcythe.com/images/Project%20Images/phone.svg"
  ];

  return (
    <div className="space-y-10">
      <h2 className="text-center text-[2.5rem] w-5/6 mx-auto">
        Success in <span className="text-accent">Motion</span> - Our clients'
        journey
      </h2>
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
