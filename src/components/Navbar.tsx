import logo from "../assets/forcythe logo.svg";
import { NavLink, Link } from "react-router-dom";
import Button from "./Button";

const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 w-full h-24 bg-transparent backdrop-blur-lg flex gap-20 items-center px-[4rem] justify-between shadow-md z-50">
      {/* Logo */}
      <Link to="/">
        <img src={logo} alt="logo" className="h-10" />
      </Link>

      {/* Navigation Links */}
      <div className="flex items-center gap-5 mr-auto">
        <NavLink to="">
          About
        </NavLink>
        <NavLink to="">
          Services
        </NavLink>
        <NavLink to="">
          Portfolio
        </NavLink>
        <NavLink to="">
          Studio
        </NavLink>
        <NavLink to="">
          Foundation
        </NavLink>
      </div>

      {/* Call-to-Action Button */}
      <Button>Book a Call</Button>
    </nav>
  );
};

export default Navbar;
