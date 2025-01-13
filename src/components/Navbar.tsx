import { useState} from "react";
import logo from "../assets/forcythe logo.svg";
import { NavLink, Link } from "react-router-dom";
import Button from "./Button";
import { HiOutlineMenuAlt2 } from "react-icons/hi";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen((prevState) => !prevState);
  };



  return (
    <nav className="fixed top-0 left-0 w-full h-24 bg-transparent backdrop-blur-lg flex md:gap-5 lg:gap-20 items-center px-5 md:px-10 lg:px-12 xl:px-32 justify-between shadow-md z-50">
      <Link to="/" className="">
        <img src={logo} alt="logo" className="h-6 lg:h-10" />
      </Link>
      {/* Mobile Menu Icon */}
      <button
        className="flex md:hidden items-center justify-center ml-auto bg-white/20 w-12 h-12 rounded-lg cursor-pointer"
        onClick={toggleMenu}
      >
        <HiOutlineMenuAlt2 className="text-lg" />
      </button>
      {/* Navigation Links */}
      <div
        className={`${
          isMenuOpen ? "flex" : "hidden"
        } absolute top-28 bg-primary rounded-3xl md:rounded-none md:bg-transparent w-1/2 md:w-auto h-fit right-5 md:static flex-col md:flex-row md:items-center p-7 md:p-0 gap-7 md:gap-5 lg:mr-auto md:flex`}
      >
        <NavLink to="" onClick={() => setIsMenuOpen(false)}>
          About
        </NavLink>
        <NavLink to="" onClick={() => setIsMenuOpen(false)}>
          Services
        </NavLink>
        <NavLink to="" onClick={() => setIsMenuOpen(false)}>
          Portfolio
        </NavLink>
        <NavLink to="" onClick={() => setIsMenuOpen(false)}>
          Studio
        </NavLink>
        <NavLink to="" onClick={() => setIsMenuOpen(false)}>
          Foundation
        </NavLink>
        <NavLink to="" onClick={() => setIsMenuOpen(false)} className="md:hidden">
          Careers
        </NavLink>
        <NavLink to="" onClick={() => setIsMenuOpen(false)} className="md:hidden">
          Blog
        </NavLink>
      </div>
      {/* Call-to-Action Button */}
      <div className="hidden md:flex">
        <Button>Book a Call</Button>
      </div>{" "}
    </nav>
  );
};

export default Navbar;
