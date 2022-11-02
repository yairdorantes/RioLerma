import { Swiper, SwiperSlide } from "swiper/react";

import lerma1 from "../media/river.jpg";
import lerma2 from "../media/river2.jpg";
import lerma3 from "../media/river3.jpg";

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
    resume: "El rio lerma apesta",
  },
  {
    img: lerma2,
    resume: "el rio lerma huele a qlo",
  },
  {
    img: lerma3,
    resume: "el rio lerma es asqueroso ",
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
                  <strong className="swipe-text">{slide.resume}</strong>
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
