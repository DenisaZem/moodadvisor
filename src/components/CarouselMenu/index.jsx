import "./style.css";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCoverflow } from "swiper/modules";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "./style.css";
import { Link } from "react-router-dom";

export const CarouselMenu = ({ musicData }) => {
  return (
    <div>
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
