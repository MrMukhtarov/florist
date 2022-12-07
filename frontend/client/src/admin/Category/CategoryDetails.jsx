import axios from "axios";
import React from "react";
import { TiArrowBack } from "react-icons/ti";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { useCategory } from "../../components/Context/CategoryContext";
import "./CategoryDetails.css";

const CategoryDetails = () => {
  const { category } = useCategory();

  const navigate = useNavigate();

  const category_arr =
    category &&
    category.map((item) => {
      return item._id;
    });
  return (
    <div className="categorydetail p-5">
      <table className="m-auto mt-5 w-75">
        <thead>
          <tr>
            <th scope="col">Count</th>
            <th scope="col">image</th>
            <th scope="col">Title</th>
            <th scope="col">Count</th>
            <th scope="col">Button</th>
          </tr>
        </thead>
        {category &&
          category.map((categoryy, _id) => (
            <tbody>
              <tr>
                <th key={categoryy._id} scope="row">
                  1
                </th>
                <td>
                  <img src={categoryy.img} alt="" className="img-fluid" />
                </td>
                <td>{categoryy.title}</td>
                <td>{categoryy.count}</td>
                <td>
                  <NavLink
                    to={`/admin/updatecategory/${category_arr[_id]}`}
                    onClick={async () => {
                      await axios
                        .put(
                          `http://localhost:3002/category/${category_arr[_id]}`
                        )
                        .then((res) => res.data);
                    }}
                    className="me-1 btn btn1"
                  >
                    Update
                  </NavLink>
                  <NavLink
                    to={`/admin/categorydetail`}
                    onClick={async () => {
                      await axios
                        .delete(
                          `http://localhost:3002/category/${category_arr[_id]}`
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

export default CategoryDetails;
