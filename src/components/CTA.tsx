import Button from "./Button";
const CTA = () => {
  return (
    <div className="px-[4rem] flex flex-col items-center gap-7">
      <h2 className="text-[2.5rem] w-4/6 mx-auto text-center">
        <span className="text-accent">Ready to Scale?</span>
        <br />
        Join successful brands that chose us as their <span className="text-accent">growth accelerator</span>
      </h2>
      <Button>Book a Call</Button>
    </div>
  );
};

export default CTA;
