import "./Navbar.scss";
import { useState } from "react";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
import { TbCircleLetterG, TbCircleLetterT } from "react-icons/tb";

const Navbar = () => {
  const [showNav, setShowNav] = useState(false);

  return (
    <nav className="navbar">
      <div className="wrapper navbar__container">
        <a
          href="#home"
          className="navbar__logo"
          onClick={() => setShowNav(false)}
        >
          <TbCircleLetterG className="logo-icon" />
          <TbCircleLetterT className="logo-icon" />
        </a>

        <div className="navbar__links">
          <ul className={`${showNav ? "show" : ""}`}>
            <li onClick={() => setShowNav(false)}>
              <a href="#home">Home</a>
            </li>
            <li onClick={() => setShowNav(false)}>
              <a href="#projetos">Projetos</a>
            </li>
            <li onClick={() => setShowNav(false)}>
              <a href="#skills">Skills</a>
            </li>
            <li onClick={() => setShowNav(false)}>
              <a href="#sobre">Sobre</a>
            </li>
            <li onClick={() => setShowNav(false)}>
              <a href="#contato">Contato</a>
            </li>
          </ul>
        </div>
        <div className="navbar__menu" onClick={() => setShowNav(!showNav)}>
          {showNav ? <AiOutlineClose /> : <AiOutlineMenu />}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
