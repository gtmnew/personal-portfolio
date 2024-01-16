import { portfolioData } from "../../Data";
import "./Projects.scss";
const Projects = () => {
  return (
    <section className="projects section-padding" id="projetos">
      <div className="section-title">
        <span>Estudos de Casos | Projetos</span>
        <h3>Projetos realizados para estudos/freelancer:</h3>
      </div>
      <div className="projects__container wrapper">
        {portfolioData.map(({ id, img, url }) => (
          <a href={url} key={id} target="_blank" rel="noopener noreferrer">
            <img src={img} alt="images" />
          </a>
        ))}
      </div>
    </section>
  );
};
export default Projects;
