import "./style.css";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCoverflow } from "swiper/modules";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "./style.css";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

export const CarouselMenu = ({ musicData, breathData }) => {
  const { t } = useTranslation();
  return (
    <div className="container__carouselMenu">
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
          {musicData &&
            musicData.map((slide, index) => (
              <SwiperSlide
                key={slide.id}
                style={{
                  backgroundImage: `url(${slide.picture})`,
                }}
              >
                <Link
                  className="swiper-wrapper--link"
                  to={`/music/${slide.id}`}
                >
                  <img
                    className="swiper-wrapper__image"
                    src={slide.picture}
                    alt="Ikona s notami"
                  />
                  <h4 className="swiper-wrapper--title"> {t(`sound.${index}.title`)}</h4>
                </Link>
              </SwiperSlide>
            ))}
          {breathData &&
            breathData.map((slide, index) => (
              <SwiperSlide
                key={slide.id}
                style={{
                  backgroundImage: `url(${slide.picture})`,
                }}
              >
                <Link
                  className="swiper-wrapper--link"
                  to={`/breath/${slide.id}`}
                >
                  <img
                    className="swiper-wrapper__image"
                    src={slide.picture}
                    alt="Ikona s notami"
                  />
                  <h4 className="swiper-wrapper--title"> {t(`breath.${index}.title`)}</h4>
                </Link>
              </SwiperSlide>
            ))}
        </div>
      </Swiper>
    </div>
  );
};
