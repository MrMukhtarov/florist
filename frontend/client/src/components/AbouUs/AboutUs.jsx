import React from "react";
import "./AboutUs.css";

const AboutUs = () => {
  return (
    <section className="aboutus p-5">
      <div className="container">
        <div className="row all">
          <div className="top row">
            <div className="left col-lg-4 col-12">
              <span>About us</span>
              <h2>
                We provide all <br /> kinds of fresh flower services
              </h2>
            </div>
            <div className="right col-lg-8 col-12">
              <p>
                For Heather Henson, of Boreal Blooms in Cold Lake, Alberta,
                Canada, growing flowers that can be dried and incorporated into
                late fall and winter floral arrangements has been a
                game-changer. During her growing season, this farmer-florist
                relies on a vivid palette of annuals, perennials and ornamental
                grasses to supply her studio.
              </p>
            </div>
          </div>
          <div className="bottom row justify-content-between">
            <div className="left col-lg-5 col-12">
              <div className="imgdiv">
                <img
                  src="https://preview.colorlib.com/theme/florist/img/about/about-video.jpg.webp"
                  alt=""
                />
              </div>
              <div className="play">
                <a
                  href="https://www.youtube.com/watch?v=5QXeJwQ0Sy4"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i class="fa-regular fa-circle-play"></i>
                </a>
              </div>
            </div>
            <div className="right col-lg-6 col-12">
              <span>Slow Flowers’ Floral Insights</span>
              <h2>
                Dried flowers are having a renaissance
              </h2>
              <p>
                This awareness has been stimulated by sustainable sourcing
                practices and the desire on the part of North American flower
                growers to “extend the season” beyond the last frost.
              </p>
              <button>CONTACT US</button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
