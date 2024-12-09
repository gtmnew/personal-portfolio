import "./Skills.scss";
import { skillsData } from "../../Data";

const Skills = () => {
  return (
    <section className="skills section-padding" id="skills">
      <div className="section-title">
        <span>SKILLS</span>
        <h3>Tecnologias e frameworks dominados</h3>
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
