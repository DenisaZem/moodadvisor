import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCoverflow } from "swiper/modules";
import obrazek1 from "./img/1.png"
import obrazek2 from "./img/2.png"
import obrazek3 from "./img/3.png"
import obrazek4 from "./img/4.png"
import obrazek5 from "./img/5.png"
import obrazek6 from "./img/6.png"

import "swiper/css";
import "swiper/css/effect-coverflow";
import "./style.css";
import { Link } from "react-router-dom";

const slides = [
  obrazek1, obrazek2, obrazek3, obrazek4, obrazek5, obrazek6
]

export const SoundMenu = () => {
  return (
    <div className="container__mainSoundMenu">
      <Swiper 
        grabCursor
        centeredSlides
        slidesPerView="auto"
        effect="coverflow"
        loop
        coverflowEffect={{
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: true,
        }}
        modules={[EffectCoverflow]}
      >
        <div className="swiper-wrapper">
          {slides.map((slide) => (
            <SwiperSlide
              key={slide}
              style={{
                backgroundImage: `url(${slide})`,
              }}
            />
          ))}
        </div>
        <Link to="/music/item">Odkaz na detail - funguje</Link>
        {/* <div className="swiper-pagination"></div> */}
      </Swiper>
    </div>
  );
};
