import { Swiper, SwiperSlide } from "swiper/react";

import lerma1 from "../media/lerma1.jpg";
import lerma2 from "../media/lerma2.jpg";
import lerma3 from "../media/lerma3.jpg";
import lerma4 from "../media/lerma4.jpg";

import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import { isBrowser, isMobile } from "react-device-detect";

import {
  EffectCoverflow,
  Pagination,
  Autoplay,
  Navigation,
  Mousewheel,
  Keyboard,
} from "swiper";
import "./styles/swiperLerma.css";

const slides = [
  {
    img: lerma1,
    resume:
      "Entre las 29 empresas que arrojan contaminantes están Hershey's México, Nestlé, Urrea Herramientas y Honda.",
  },
  {
    img: lerma2,
    resume: "el rio lerma huele a qlo",
  },
  {
    img: lerma3,
    resume:
      "El río Lerma está biológicamente muerto. Ambientalistas lo describen como una cloaca enorme y maloliente que requiere un esfuerzo sin precedente para sanearlo.",
  },
  {
    img: lerma4,
    resume:
      "El río Lerma es el río interior más largo de México. Nace en los manantiales de Almoloya del Río, en el Estado de México, y atraviesa hacia el noroeste el Valle de Toluca, Querétaro, Guanajuato, Michoacán y desagua en el lago de Chapala.",
  },
];

const SwiperLerma = () => {
  {
    isMobile ? console.log("mobile") : console.log("nooo");
    console.log(isBrowser);
  }
  return (
    <>
      <section id="swiper-anchor">
        <Swiper
          style={{ marginTop: "100px" }}
          keyboard={true}
          mousewheel={true}
          className="mySwiper"
          effect={"coverflow"}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          loop={true}
          grabCursor={true}
          centeredSlides={true}
          slidesPerView={isMobile ? 1 : 2}
          coverflowEffect={{
            rotate: 50,
            stretch: 0,
            depth: 100,
            modifier: 1,
            slideShadows: true,
          }}
          pagination={{ clickable: true }}
          modules={[
            Autoplay,
            EffectCoverflow,
            Pagination,
            Navigation,
            Mousewheel,
            Keyboard,
          ]}
        >
          {slides.map((slide, key) => {
            return (
              <SwiperSlide key={key}>
                <div className="container-swipe">
                  <strong
                    className="swipe-text"
                    style={{ width: isMobile && "90%" }}
                  >
                    <div className="textito">{slide.resume}</div>
                  </strong>
                  <img
                    style={{ padding: isMobile && "10px" }}
                    className="img-swiper"
                    src={slide.img}
                    alt=""
                  />
                </div>
              </SwiperSlide>
            );
          })}
        </Swiper>
      </section>
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
    </>
  );
};

export default SwiperLerma;
