import "./Skills.scss";
import { skillsData } from "../../Data";

const Skills = () => {
  return (
    <section className="skills section-padding" id="skills">
      <div className="section-title">
        <span>Skills</span>
        <h3>
          Explore abaixo as sólidas fundações das minhas habilidades, que
          refletem meu domínio em diversas tecnologias e frameworks
        </h3>
      </div>

      <div className="skills__container-wrapper">
        <div className="skills__container wrapper">
          {skillsData.map(({ name, img }) => (
            <div className="skills_card" key={name}>
              <div className="skills__image">
                <img src={img} alt="skills-image" />
              </div>
              <span>{name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
