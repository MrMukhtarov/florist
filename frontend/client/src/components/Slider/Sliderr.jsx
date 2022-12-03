import React from "react";
import "./Slider.css";
import { useSlider } from "../Context/SliderContext.jsx";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";

const Sliderr = () => {
  const { slider } = useSlider();

  return (
    <div>
    <Carousel autoPlay interval="10000" transitionTime="1000" infiniteLoop>
      {slider &&
        slider.map((sliders) => (
          <div>
            <img className="carouselimage img-fluid" src={sliders.img} alt={sliders.title}/>
            <div className="slidercontent col-lg-3">
              <span className="slidertitle">{sliders.title}</span>
              <h2 className="sliderdesc">{sliders.desc}</h2>
              <button className="pirmary-btn">SHOP NOW</button>
            </div>
          </div>
        ))}
    </Carousel>
  </div>
  );
};

export default Sliderr;
