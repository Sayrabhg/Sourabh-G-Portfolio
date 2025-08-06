import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const SliderPage = () => {
  const settings = {
    dots: true,
    infinite: true,
    autoplay: true,
    speed: 800,
    slidesToShow: 1,
    slidesToScroll: 1
  };

  return (
    <Slider {...settings}>
      <div>
        <h2>Crafting Scalable Web Solutions</h2>
        <p>I’m a Java Full Stack Developer skilled in Spring Boot and React.</p>
      </div>
      <div>
        <h2>Tech Stack Expertise</h2>
        <ul>
          <li>React.js, Spring Boot, MySQL, Docker, Git</li>
        </ul>
      </div>
      <div>
        <h2>Recent Projects Showcase</h2>
        <p>Inventory System, Online Bookstore, Student Portal</p>
      </div>
      <div>
        <h2>Let’s Work Together</h2>
        <p>Open to freelance or full-time roles</p>
      </div>
    </Slider>
  );
};

export default SliderPage;