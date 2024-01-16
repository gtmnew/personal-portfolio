import "./About.scss";
import Img from "../../assets/astronaut.png";

const About = () => {
  return (
    <section className="about section-padding" id="sobre">
      <div className="section-title">
        <span>Sobre mim</span>
        <h3>
          A diversidade de abordagens e a constante evolução tecnológica me
          inspiram
        </h3>
      </div>

      <div className="wrapper about__container">
        <div className="about__left">
          <img src={Img} alt="about" />
        </div>
        <div className="about__right">
          <h3>Sobre</h3>
          <p>
            Dedico-me ao estudo aprofundado de JavaScript e seus frameworks, de
            forma independente, ansioso por uma oportunidade que permita
            demonstrar meu potencial e contribuir significativamente.
            Comprometo-me a abordar desafios com resiliência e a realizar com
            excelência quaisquer tarefas necessárias para o sucesso.
          </p>

          <div className="about__info">
            <div className="about__infos">
              <ul>
                <li>
                  <span>Celular</span>
                  <p>(11)97074-4979</p>
                </li>
                <li>
                  <span>Email</span>
                  <p>gabrieltadeums11@outlook.com</p>
                </li>
                <li>
                  <span>Localização</span>
                  <p>São Paulo / SP</p>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
