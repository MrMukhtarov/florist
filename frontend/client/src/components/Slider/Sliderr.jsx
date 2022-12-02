import React from "react";
import "./Slider.css";
// import "react-slideshow-image/dist/styles.css";
// import { Slide } from "react-slideshow-image";
import { useSlider } from "../Context/SliderContext.jsx";
import Carousel from "better-react-carousel";

const Sliderr = () => {
  const { slider } = useSlider();

  return (
    <Carousel autoplay={4000} cols={1} rows={1} gap={10} loop>
      {slider &&
        slider.map((sliders) => (
          <Carousel.Item>
            <img className="carouselimage" src={sliders.img} alt="img" />
            <div className="slidercontent col-lg-3">
              <span className="slidertitle">{sliders.title}</span>
              <h2 className="sliderdesc">{sliders.desc}</h2>
              <button className="pirmary-btn">Shop now</button>
            </div>
          </Carousel.Item>
        ))}
    </Carousel>
  );
};

export default Sliderr;
