import './style.css';

export const SoundMenu = () => {
  const slideStyle1 = {
    backgroundImage: "url('https://media.gettyimages.com/id/1152829238/vector/mindfulness-meditation-and-yoga-background-in-pastel-vintage-colors-with-women-sit-with.jpg?b=1&s=1024x1024&w=gi&k=20&c=_zYSpX6lWyNwsGOtaiDC49YePFSKHot86Z4Ac0mgwwc=')"
  };


  return (
    <div className='SoundMenu'>
      <div className="swiper">
        <div className="swiper-menu">
          <div className="swiper-slide" style={slideStyle1}></div>
        </div>
      </div>
    </div>
  );
}
