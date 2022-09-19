import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import Button from "../../atoms/Button";
import Modal from "../../organisms/modals";
import LoginModal from "../../organisms/modals/loginModal";
import LogoIcon from "../../vectors/Logo";
import "./Navbar.scss";

const Navbar = () => {
  const loc = window.location.pathname;
  const [openLoginModal, setOpenLoginModal] = useState(false);

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
        <Button
          customClasses="bg-whitee text-primary rounded-md font-bold"
          onClick={() => setOpenLoginModal(true)}
        >
          <p>Login</p>
        </Button>
      </div>
      <Modal
        title="Login"
        openModal={openLoginModal}
        closeModal={() => setOpenLoginModal(false)}
      >
        <LoginModal />
      </Modal>
    </div>
  );
};

export default Navbar;
