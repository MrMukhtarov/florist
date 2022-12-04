import React from "react";
import "./Benefits.css";

const Benefits = () => {
  return (
    <section className="benefits p-5">
      <div className="container">
        <div className="all row">
          <div className="beneiftsBox col-lg-3 row justify-content-between col-12">
            <div className="left col-lg-2 col-3">
              <img
                src="https://preview.colorlib.com/theme/florist/img/benefit/benefit-1.png.webp"
                alt="img"
              />
            </div>
            <div className="right col-lg-9 col-9">
              <h4>100% Freshness</h4>
              <p>Most people are unaware of the less common flower</p>
            </div>
          </div>
          <div className="beneiftsBox col-lg-3 row justify-content-between">
            <div className="left col-lg-2 col-3">
              <img
                src="https://preview.colorlib.com/theme/florist/img/benefit/benefit-2.png.webp"
                alt="img"
              />
            </div>
            <div className="right col-lg-9 col-9">
              <h4>Made by artist</h4>
              <p>Most people are unaware of the less common flower</p>
            </div>
          </div>
          <div className="beneiftsBox col-lg-3 row justify-content-between">
            <div className="left col-lg-2 col-3">
              <img
                src="https://preview.colorlib.com/theme/florist/img/benefit/benefit-3.png.webp"
                alt="img"
              />
            </div>
            <div className="right col-lg-9 col-9">
              <h4>Own courier</h4>
              <p>Most people are unaware of the less common flower</p>
            </div>
          </div>
          <div className="beneiftsBox col-lg-3 row justify-content-between">
            <div className="left col-lg-2 col-3">
              <img
                src="https://preview.colorlib.com/theme/florist/img/benefit/benefit-4.png.webp"
                alt="img"
              />
            </div>
            <div className="right col-lg-9 col-9">
              <h4>100% Freshness</h4>
              <p>Most people are unaware of the less common flower</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Benefits;
