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
      >
        <div className="swiper-wrapper">
          {musicData &&
            musicData.map((slide, index) => (
              <SwiperSlide key={slide.id}>
                <Link
                  className="swiper-wrapper__link"
                  to={`/music/${slide.id}`}
                >
                  <img
                    className="swiper-wrapper__image"
                    src={slide.picture}
                    alt="Položka menu zobrazující hudbu pro MoodAdvisor"
                  />
                  <h4 className="swiper-wrapper__title">
                    {" "}
                    {t(`sound.${index}.title`)}
                  </h4>
                </Link>
              </SwiperSlide>
            ))}
          {breathData &&
            breathData.map((slide, index) => (
              <SwiperSlide key={slide.id}>
                <Link
                  className="swiper-wrapper__link"
                  to={`/breath/${slide.id}`}
                >
                  <img
                    className="swiper-wrapper__image"
                    src={slide.picture}
                    alt="Položka menu zobrazující dechová cvičení pro MoodAdvisor"
                  />
                  <h4 className="swiper-wrapper__title">
                    {" "}
                    {t(`breath.${index}.title`)}
                  </h4>
                </Link>
              </SwiperSlide>
            ))}
        </div>
      </Swiper>
    </div>
  );
};
