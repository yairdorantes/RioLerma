import { Swiper, SwiperSlide } from "swiper/react";

import lerma1 from "../media/river.jpg";
import lerma2 from "../media/river2.jpg";
import lerma3 from "../media/river3.jpg";

import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";

// import required modules

import {
  EffectCoverflow,
  Pagination,
  Autoplay,
  Navigation,
  Mousewheel,
  Keyboard,
} from "swiper";
import "./styles/swiperLerma.css";

const SwiperLerma = () => {
  return (
    <>
      <section id="swiper-anchor">
        <Swiper
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
          slidesPerView={2}
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
          <SwiperSlide>
            <div>
              <img className="img-swiper" src={lerma1} alt="" />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div>
              <img className="img-swiper" src={lerma2} alt="" />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div>
              <img className="img-swiper" src={lerma3} alt="" />
            </div>
          </SwiperSlide>
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
