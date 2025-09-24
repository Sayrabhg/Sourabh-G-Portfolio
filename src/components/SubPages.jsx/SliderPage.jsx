import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const SliderPage = () => {
  const settings = {
    dots: false,
    arrows: false,
    infinite: true,
    autoplay: true,
    speed: 800,
    slidesToShow: 1,
    slidesToScroll: 1
  };

  return (
    <Slider {...settings}>
      <div className="px-1">
        <h3 className='py-3' style={{ textAlign: 'left', fontStyle: 'italic' }}>A Java FullStack developer</h3>
        <p className='py-2' style={{ textAlign: 'justify' }}>I'm a passionate Java Full Stack Developer skilled in building robust backend systems with Spring Boot and dynamic frontends using React.js. I love solving real-world problems through code.</p>
      </div>
      <div className="px-1">
        <h3 className='py-3' style={{ textAlign: 'left', fontStyle: 'italic' }}>A Wordpress developer</h3>
        <p className='py-2' style={{ textAlign: 'justify' }}>I work with WordPress to build and customize responsive websites and themes. Skilled in integrating custom functionality, optimizing performance, and delivering user-friendly solutions.</p>
      </div>
    </Slider>
  );
};

export default SliderPage;