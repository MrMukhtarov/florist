import React from "react";
import "./Arrivals.css";
import { Link } from "react-router-dom";
import { useArrival } from "../Context/ArrivalContext";

const Arrivals = () => {
  const { arrival } = useArrival();
  return (
    <section className="arrivals">
      <div className="container">
        <div className="row all">
          <div className="content">
            <div className="heading">
              <span>Our flower</span>
              <h2>New Arrivals</h2>
            </div>
            <div className="category text-center">
              <Link to="/" className="allcategory mb-5">
                All
              </Link>
              <Link to="/">Bouquet</Link>
              <Link to="/">Flower box</Link>
              <Link to="/">Flower shelf</Link>
              <Link to="/">Basket of flower</Link>
              <Link to="/">Gift combos</Link>
            </div>
          </div>
          <div className="boxes row">
            {arrival &&
              arrival.map((arrivals) => (
                <div key={arrivals._id} className="box col-lg-3 mb-4">
                  <div className="top">
                    <img
                      src={arrivals.img}
                      alt=""
                    />
                    <div className="status">{arrivals.status}</div>
                  </div>
                  <div className="icons">
                    <Link to="/">
                      <i className="fa-solid fa-magnifying-glass"></i>
                    </Link>
                    <Link to="/">
                      <i class="fa-solid fa-bag-shopping"></i>
                    </Link>
                    <Link to="/">
                      <i class="fa-regular fa-heart"></i>
                    </Link>
                  </div>
                  <div className="bottom row text-center mt-3">
                    <Link to="/" className="mb-2">
                      {arrivals.title}
                    </Link>
                    <span>${arrivals.price}</span>
                    <div className="addcart">
                      <Link to="/">Add to cart</Link>
                    </div>
                  </div>
                </div>
              ))}
          </div>
        </div>
      </div>
      {/* <Link to="/" className="loadmore text-center">
            View all products
          </Link> */}
    </section>
  );
};

export default Arrivals;
