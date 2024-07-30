import { portfolioData } from "../../Data";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCoverflow, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";

import "./Projects.scss";

const Projects = () => {
  return (
    <section className="projects section-padding" id="projetos">
      <div className="section-title">
        <span>Estudos de Casos | Projetos</span>
        <h3>Projetos / Freelancer</h3>
      </div>
      <Swiper
        effect={"coverflow"}
        centeredSlides={true}
        loop={true}
        grabCursor={true}
        slidesPerView={"auto"}
        coverflowEffect={{
          rotate: 0,
          stretch: 0,
          depth: 100,
          modifier: 2.5,
        }}
        pagination={{ el: ".swiper-pagination", clickable: true }}
        modules={[EffectCoverflow, Pagination]}
        className="swiper_container"
      >
        {portfolioData.map(({ id, img, url }) => (
          <SwiperSlide key={id}>
            <a href={url} target="_blank" rel="nopener noreferrer">
              <img src={img} alt="project-thumb" />
            </a>
          </SwiperSlide>
        ))}
        <div className="slider-controller">
          <div className="swiper-pagination"></div>
        </div>
      </Swiper>
    </section>
  );
};
export default Projects;
