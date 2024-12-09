import "./HeroCards.scss";
import { heroData } from "../../Data";
import Projects from "../Projectss/Projects";

export const HeroCards = () => {
  return (
    <section className="heroCards">
      <div className="wrapper">
        {heroData.map(({ id, name, img, des }) => (
          <div className="card" key={id}>
            <img src={img} alt={name} />
            <h3>{name}</h3>
            <p>{des}</p>
          </div>
        ))}
      </div>
      <Projects />
    </section>
  );
};

export default HeroCards;
