import "./Hero.scss";
import Img from "../../assets/heroimage.png";

const Hero = () => {
  return (
    <section className="hero" id="home">
      <div className="wrapper hero__container">
        <div className="hero__left">
          <h1>
            Gabriel <span className="cl-extra">Tadeu</span>
          </h1>
          <p>Desenvolvedor Frontend</p>
          <a href="#" className="btn">
            <span>Seja bem vindo!</span>
          </a>
        </div>

        <div className="hero__right">
          <div className="hero__img">
            <img src={Img} alt="hero" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
