import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import "./LogoUpdate.css";
import { TiArrowBack } from "react-icons/ti";

const LogoUpdate = () => {
  const [inputs, setInputs] = useState([]);

  const navigate = useNavigate();

  const history = useNavigate();

  const id = useParams().id;

  useEffect(() => {
    const fetchHandler = async () => {
      await axios
        .get(`http://localhost:3002/logo/${id}`)
        .then((res) => res.data)
        .then((data) => setInputs(data.logo));
    };
    fetchHandler();
  }, [id]);

  const handleSubmit = (e) => {
    e.preventDefault();
    sendRequest().then(() => history("/admin"));
  };

  const sendRequest = async () => {
    await axios
      .put(`http://localhost:3002/logo/${id}`, {
        img: String(inputs.img),
      })
      .then((res) => res.data);
  };

  const handleChange = (e) => {
    setInputs((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };
  return (
    <div className="updatelogo">
      <div class="login">
        <div class="form">
          <p>Logo</p>
          <form key={inputs._id} class="login-form" onSubmit={handleSubmit}>
            <input
              type="text"
              placeholder="IMAGE"
              required
              aria-required
              value={inputs.img}
              name="img"
              onChange={handleChange}
            />
            <button type="submit">Save</button>
          </form>
        </div>
      </div>
      <div className="backdiv">
        <Link className="back" to="#/" onClick={() => navigate(-1)}>
          Back
          <TiArrowBack />
        </Link>
      </div>
    </div>
  );
};

export default LogoUpdate;
