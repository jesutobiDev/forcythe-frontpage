import Button from "./Button";
const CTA = () => {
  return (
    <div className="px-5 md:px-10 lg:px-12 xl:px-32 flex flex-col items-center gap-7 bg-gradient-to-b from-primary to-accent-dark">
      <h2 className="text-3xl md:text-4xl lg:text-[2.5rem] lg:w-4/6 mx-auto text-center">
        <span className="text-accent">Ready to Scale?</span>
        <br />
        Join successful brands that chose us as their <span className="text-accent">growth accelerator</span>
      </h2>
      <Button>Book a Call</Button>
    </div>
  );
};

export default CTA;
