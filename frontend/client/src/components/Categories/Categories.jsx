import React from "react";
import { useCategory } from "../Context/CategoryContext";
import "./Categories.css";

const Categories = () => {
  const { category } = useCategory();
  return (
    <section className="categories p-2">
      <div className="container">
        <div className="row all justify-content-between">
          {category &&
            category.map((categoryy) => (
              <div key={categoryy._id} className="box col-lg-3 col-12">
                <div className="img">
                  <img
                    src={categoryy.img}
                    alt="img"
                    className="img-fluid"
                  />
                </div>
                <div className="content">
                  <h4>{categoryy.title}</h4>
                  <span>( {categoryy.count} items )</span>
                </div>
              </div>
            ))}
        </div>
      </div>
    </section>
  );
};

export default Categories;
