import "./Hero.scss";
import Img from "../../assets/moon.png";
import { FaGithub, FaInstagram, FaLinkedin, FaWhatsapp } from "react-icons/fa";

const Hero = () => {
  return (
    <section className="hero" id="home">
      <div className="wrapper hero__container">
        <div className="hero__left">
          <h1>
            Olá! Me chamo <span>Gabriel Tadeu</span>
            <h2>
              Desenvolvedor <span className="cl-extra">Front end</span>
            </h2>
          </h1>
          <div className="hero__links">
            <a
              href="https://www.instagram.com/gabrieltadeu11/"
              target="_blank"
              rel="noopener noreferrer"
              className="hero__icons"
            >
              <FaInstagram />
            </a>
            <a
              href="https://github.com/gtmnew"
              target="_blank"
              rel="noopener noreferrer"
              className="hero__icons"
            >
              <FaGithub />
            </a>
            <a
              href="https://wa.me/5511970744979"
              target="_blank"
              rel="noopener noreferrer"
              className="hero__icons"
            >
              <FaWhatsapp />
            </a>
            <a
              href="https://www.linkedin.com/in/gabrieltadeu011/"
              target="_blank"
              rel="noopener noreferrer"
              className="hero__icons"
            >
              <FaLinkedin />
            </a>
          </div>
        </div>
        <div className="hero__right">
          <div className="hero__img">
            <img src={Img} alt="hero" />
          </div>
        </div>
      </div>
      <div className="hero__buttons">
        <a
          href="https://wa.me/5511970744979"
          target="_blank"
          rel="noopener noreferrer"
          className="btn"
        >
          Contrate-me
        </a>
        <a href="/public/curriculo.pdf" download className="btn ">
          Download CV
        </a>
      </div>
    </section>
  );
};

export default Hero;
