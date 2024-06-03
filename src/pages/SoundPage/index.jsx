import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCoverflow } from "swiper/modules";
import obrazek1 from "./img/1.png";
import obrazek2 from "./img/2.png";
import obrazek3 from "./img/3.png";
import obrazek4 from "./img/4.png";
import obrazek5 from "./img/5.png";
import obrazek6 from "./img/6.png";

import "swiper/css";
import "swiper/css/effect-coverflow";
import "./style.css";
import { Link } from "react-router-dom";

// const slides = [
//   obrazek1, obrazek2, obrazek3, obrazek4, obrazek5, obrazek6
// ]

const musicData = [
  {
    title: "Skladba1",
    audioUrl: "/components/Sound/music/zkouska.mp3",
    picture: obrazek1,
  },
  {
    title: "Skladba2",
    audioUrl: "/components/Sound/music/zkouska2.mp3",
    picture: obrazek2,
  },
  {
    title: "Skladba3",
    audioUrl: "/components/Sound/music/zkouska3.mp3",
    picture: obrazek3,
  },
  {
    title: "Skladba4",
    audioUrl: "/components/Sound/music/zkouska4.mp3",
    picture: obrazek4,
  },
  {
    title: "Skladba5",
    audioUrl: "/components/Sound/music/zkouska5.mp3",
    picture: obrazek5,
  },
  {
    title: "Skladba6",
    audioUrl: "/components/Sound/music/zkouska6.mp3",
    picture: obrazek6,
  },
];

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
          {musicData.map((slide) => (
            <SwiperSlide
              key={slide.picture}
              style={{
                backgroundImage: `url(${slide.picture})`,
              }}
            >
              <Link className="swiper-wrapper--link" to="/music/item">
                {slide.title}
                <img
                  className="swiper-wrapper"
                  src={slide.picture}
                  alt="Ikona s notami"
                />
              </Link>
            </SwiperSlide>
          ))}
        </div>
      </Swiper>
    </div>
  );
};
