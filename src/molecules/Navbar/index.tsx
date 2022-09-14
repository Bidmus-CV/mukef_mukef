import { useEffect } from "react";
import { Link, NavLink } from "react-router-dom";
import Button from "../../atoms/Button";
import LogoIcon from "../../vectors/Logo";
import "./Navbar.scss";

const Navbar = () => {
  const loc = window.location.pathname;

  return (
    <div className="nav">
      <div className="logo-wrap">
        <LogoIcon />
        <p>MUKEF</p>
      </div>

      <div className="links">
        <Link to="/" className={loc === "/" ? "active" : ""}>
          Home
        </Link>
        <Link to="/news" className={loc === "/news" ? "active" : ""}>
          News
        </Link>
        <Link to="/project" className={loc === "/project" ? "active" : ""}>
          Projects
        </Link>
        <Link to="/about" className={loc === "/about" ? "active" : ""}>
          About us
        </Link>
        <Link to="/contact" className={loc === "/contact" ? "active" : ""}>
          Contacts
        </Link>
      </div>
      <div className="log-in w-[8.06rem]">
        <Button customClasses="bg-whitee text-primary rounded-md font-bold">
          Login
        </Button>
      </div>
    </div>
  );
};

export default Navbar;
