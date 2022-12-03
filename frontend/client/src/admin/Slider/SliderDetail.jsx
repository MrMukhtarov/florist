import axios from "axios";
import React from "react";
import { TiArrowBack } from "react-icons/ti";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { useSlider } from "../../components/Context/SliderContext";
import "./SliderDetail.css";

const SliderDetail = () => {
  const { slider } = useSlider();
  const navigate = useNavigate();

  const slider_arr =
    slider &&
    slider.map((item) => {
      return item._id;
    });

  return (
    <div className="sliderdetail p-5">
      <table className="m-auto mt-5 w-75">
        <thead>
          <tr>
            <th scope="col">Count</th>
            <th scope="col">image</th>
            <th scope="col">Title</th>
            <th scope="col">Description</th>
            <th scope="col">Button</th>
          </tr>
        </thead>
        {slider &&
          slider.map((sliders, _id) => (
            <tbody>
              <tr>
                <th key={sliders._id} scope="row">
                  1
                </th>
                <td>
                  <img src={sliders.img} alt="" className="img-fluid" />
                </td>
                <td>{sliders.title}</td>
                <td>{sliders.desc}</td>
                <td>
                  <NavLink
                    to={`/admin/updateslider/${slider_arr[_id]}`}
                    onClick={async () => {
                      await axios
                        .put(`http://localhost:3002/slider/${slider_arr[_id]}`)
                        .then((res) => res.data);
                    }}
                    className="me-1 btn btn1"
                  >
                    Update
                  </NavLink>
                  <NavLink
                    to={`/admin/sliderdetail`}
                    onClick={async () => {
                      await axios
                        .delete(
                          `http://localhost:3002/slider/${slider_arr[_id]}`
                        )
                        .then(() => window.location.reload());
                    }}
                    className="btn btn2 ms-2 btndel"
                  >
                    {" "}
                    Delete
                  </NavLink>
                </td>
              </tr>
            </tbody>
          ))}
      </table>
      <div className="backdiv">
        <Link className="back" to="#/" onClick={() => navigate(-1)}>
          Back
          <TiArrowBack />
        </Link>
      </div>
    </div>
  );
};

export default SliderDetail;
