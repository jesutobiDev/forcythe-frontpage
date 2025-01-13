import { Link } from "react-router-dom"
import logo from "../assets/forcythe logo.svg"
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaPodcast } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FiYoutube } from "react-icons/fi";

const Footer = () => {
  return (
    <footer className="divide-y divide-accent px-5 md:px-10 lg:px-12 xl:px-32 pb-12 pt-40 bg-gradient-to-b from-accent-dark via-accent-dark to-accent-dark">
      <div className="flex gap-16 pb-10 flex-wrap lg:flex-nowrap  ">
        <form className="md:w-full lg:w-5/12 space-y-7">
        <div className="border border-white flex overflow-hidden rounded-full h-12 md:w-3/4">
          <input type="text" className="bg-transparent outline-none flex-1  pl-4 text-sm" placeholder="Your Email Address" />
          <button type="submit" className="px-5 bg-white text-primary text-sm font-semibold transition-all duration-300 ease-in-out hover:bg-[#064386] hover:text-white">Subscribe</button>
        </div>
        <div className="flex items-center gap-2">
          <input type="radio" id="agree" name="notifications" className="accent-accent" />
          <label htmlFor="agree" className="text-accent-light">I agree to receive other notifications from Forcythe</label>
        </div>
        </form>
        <div className="space-y-7 md:w-3/5 lg:w-5/12">
          <img src={logo} alt="logo" />
          <p className="leading-relaxed opacity-60 text-balance">We are the growth company for businesses looking to scale. We are dedicated to transforming businesses with bespoke digital solutions that drive growth.</p>
          <div className="flex gap-1 text-accent text-lg">
            <Link to="" className="border border-accent w-10 h-10 rounded-full flex items-center justify-center"><FaFacebookF/></Link>
            <Link to="" className="border border-accent w-10 h-10 rounded-full flex items-center justify-center"><FaInstagram/></Link>
            <Link to="" className="border border-accent w-10 h-10 rounded-full flex items-center justify-center"><FaXTwitter/></Link>
            <Link to="" className="border border-accent w-10 h-10 rounded-full flex items-center justify-center"><FaLinkedinIn/></Link>
            <Link to="" className="border border-accent w-10 h-10 rounded-full flex items-center justify-center"><FiYoutube/></Link>
            <Link to="" className="border border-accent w-10 h-10 rounded-full flex items-center justify-center"><FaPodcast/></Link>
            
          </div>
        </div>
        <div className="space-y-7 md:w-auto lg:w-2/12">
          <h3 className="text-2xl font-semibold">Company</h3>
          <div className="flex flex-col gap-3 text-accent-light font-semibold">
            <Link to="">About</Link>
            <Link to="">Services</Link>
            <Link to="">Portfolio</Link>
            <Link to="">Studio</Link>
            <Link to="">Foundation</Link>
            <Link to="">Careers</Link>
            <Link to="">Blog</Link>
          </div>
        </div>
      </div>
      <p className="text-accent-light text-sm pt-6">Copyright © 2024 Forcythe. All rights reserved.</p>
    </footer>
  )
}

export default Footer