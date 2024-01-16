import "./HeroCards.scss";
import { heroData } from "../../Data";

const HeroCards = () => {
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
    </section>
  );
};

export default HeroCards;
