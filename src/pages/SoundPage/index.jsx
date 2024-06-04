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


const musicData = [
  {
    id: "01",
    title: "Stimulující nálada",
    audioUrl: "/components/Sound/music/zkouska.mp3",
    picture: obrazek1,
  },
  {
    id: "02",
    title: "Meditační symfonie",
    audioUrl: "/components/Sound/music/zkouska2.mp3",
    picture: obrazek2,
  },
  {
    id: "03",
    title: "Tóny lesa",
    audioUrl: "/components/Sound/music/zkouska3.mp3",
    picture: obrazek3,
  },
  {
    id: "04",
    title: "Harmonická melodie",
    audioUrl: "/components/Sound/music/zkouska4.mp3",
    picture: obrazek4,
  },
  {
    id: "05",
    title: "Party disko náladička",
    audioUrl: "/components/Sound/music/zkouska5.mp3",
    picture: obrazek5,
  },
  {
    id: "06",
    title: "Příroda zklidující mysl",
    audioUrl: "/components/Sound/music/zkouska6.mp3",
    picture: obrazek6,
  },
];

export const SoundPage = () => {
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
        // mousewheel={{ enabled: true, sensitivity: 1 }} // Snaha o posun menu kolečkem myší
      >
        <div className="swiper-wrapper">
          {musicData.map((slide) => (
            <SwiperSlide
              key={slide.picture}
              style={{
                backgroundImage: `url(${slide.picture})`,
              }}
            >
              <Link className="swiper-wrapper--link" to={`/music/${slide.id}`}>
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
