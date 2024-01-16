import "./Services.scss";
import { serviceData } from "../../Data";
import RocketImage from "../../assets/pinkrocket.png";

const Services = () => {
  return (
    <section className="services section-padding" id="serviços">
      <div className="rocket-overlay">
        <img src={RocketImage} alt="rocket" />
      </div>

      <div className="section-title">
        <span>Serviços</span>
        <h3>O que ofereço aos meus clientes:</h3>
      </div>

      <div className="services__container wrapper">
        {serviceData.map(({ name, des, img }) => (
          <div className="services__card" key={name}>
            <div className="services__icon">
              <img src={img} alt={name} />
            </div>
            <h3>{name}</h3>
            <p>{des}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Services;
