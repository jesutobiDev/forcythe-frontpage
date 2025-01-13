import Button from "./Button"
import { BiSolidUpArrow } from "react-icons/bi";

const Hero = () => {
  return (
    <div className="mx-12 h-fit rounded-[3rem] bg-white/10 p-16 space-y-7">
      <h1 className="text-7xl w-4/5">We build <span className="text-accent">products</span> that shape a better future</h1>
      <p className="text-light-grey/70 w-2/3 tracking-wide font-light">We&apos;re the architects of digital excellence across industries. We redefine business with cutting-edge digital strategies that invokes sector-wide transformation.</p>
      <Button>Book a Call <BiSolidUpArrow className="rotate-90" /></Button>
    </div>
  )
}

export default Hero