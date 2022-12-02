import axios from "axios";
import React from "react";
import { NavLink } from "react-router-dom";
import { useLogo } from "../../components/Context/LogoContext";
import "./LogoDetail.css";
import { Link, useNavigate } from "react-router-dom";
import { TiArrowBack } from "react-icons/ti";

const LogoDetail = () => {
  const { logo } = useLogo();
  const navigate = useNavigate();

  const logo_arr =
    logo &&
    logo.map((item) => {
      return item._id;
    });
  return (
    <div className="logodetail p-5">
      <table className="table w-75 m-auto mt-5">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">Display</th>
            <th scope="col">Button</th>
          </tr>
        </thead>
        {logo &&
          logo.map((logos, _id) => (
            <tbody>
              <tr>
                <th key={logos._id} scope="row">
                  1
                </th>
                <td>
                  <img src={logos.img} alt="" className="img-fluid" />
                </td>
                <td>
                  <NavLink
                    to={`/admin/updatelogo/${logo_arr[_id]}`}
                    onClick={async () => {
                      await axios
                        .put(`http://localhost:3002/logo/${logo_arr[_id]}`)
                        .then((res) => res.data);
                    }}
                    className="me-1 btn btn1"
                  >
                    Update
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

export default LogoDetail;
