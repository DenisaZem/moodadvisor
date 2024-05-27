import { Swiper, SwiperSlide } from "swiper/react";
import {EffectCoverflow} from "swiper/modules"

import "swiper/css";
import "swiper/css/effect-coverflow";
import "./style.css";

const slides = [
  "https://media.gettyimages.com/id/1152829238/vector/mindfulness-meditation-and-yoga-background-in-pastel-vintage-colors-with-women-sit-with.jpg?b=1&s=1024x1024&w=gi&k=20&c=_zYSpX6lWyNwsGOtaiDC49YePFSKHot86Z4Ac0mgwwc=",
  "https://lh3.googleusercontent.com/proxy/I9TtPgOIXunwel5Fg4avOTXJkgr2xJNFalBBbetz85Yumo3HM_nxsNDqTY-L92dSPTSCa642Eqv-TjkzlHt9IFmKoiR8NgqBdON7SN8Krp6hewavc_eX3hfsYEPWwqg",
  "https://www.blossomandberry.com/wp-content/uploads/2021/10/Featured-Images-for-Blog-Post-Sharing-Sessions-BB.jpg",
  "https://st3.depositphotos.com/1003536/35713/v/450/depositphotos_357132824-stock-illustration-coping-with-stress-and-anxiety.jpg",
  "https://californiaranchmarket.com/cdn/shop/articles/mindfulness_1024x1024.jpg?v=1674453770",
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQvZf8Jkjmfrie5_19TJCCAQRuC9ShIF9-W63UY5IBtSm_wAyKG-aZVfyyyqw0v0x3o98Q&usqp=CAU",
  "https://lh3.googleusercontent.com/proxy/JVTqrsIDnhuzXvWpgS8OuZbDQjg8Hfsd37yglQ6eEAjoPzOk7ohchag7BVGLXLfqomJGrRt9kKvIWxPH7NJm8cz2JLhLmYb_tXEnJ6w4_68i-5hYtaQ",
  "https://t4.ftcdn.net/jpg/01/87/77/77/360_F_187777755_t7kGekuBjDUTTSwBnTRXmBeYDIwODBxx.jpg",
];

export const SoundMenu = () => {
  return (
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
      {/* <div className="swiper-pagination"></div> */}
      <a href="/menu-music/music">Odkaz na detail-nefugnuje</a>
    </Swiper>
  );
};


