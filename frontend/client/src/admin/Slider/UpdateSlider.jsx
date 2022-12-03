import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { TiArrowBack } from 'react-icons/ti';
import { Link, useNavigate, useParams } from 'react-router-dom';
import './UpdateSlider.css'

const UpdateSlider = () => {
    const [inputs, setInputs] = useState([]);

    const navigate = useNavigate();
  
    const history = useNavigate();
  
    const id = useParams().id;
  
    useEffect(() => {
      const fetchHandler = async () => {
        await axios
          .get(`http://localhost:3002/slider/${id}`)
          .then((res) => res.data)
          .then((data) => setInputs(data.slider));
      };
      fetchHandler();
    }, [id]);
  
    const handleSubmit = (e) => {
      e.preventDefault();
      sendRequest().then(() => history("/admin"));
    };
  
    const sendRequest = async () => {
      await axios
        .put(`http://localhost:3002/slider/${id}`, {
          title: String(inputs.title),
          desc: String(inputs.desc),
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
    <div className="updateslider">
      <div className="login">
        <div className="form">
          <p>Update Slider</p>
          <form key={inputs._id} className="login-form" onSubmit={handleSubmit}>
            <input
              type="text"
              placeholder="Image"
              required
              aria-required
              value={inputs.img}
              name="img"
              onChange={handleChange}
            />
                <input
              type="text"
              placeholder="Title"
              required
              aria-required
              value={inputs.title}
              name="title"
              onChange={handleChange}
            />
                <input
              type="text"
              placeholder="Description"
              required
              aria-required
              value={inputs.desc}
              name="desc"
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
  )
}

export default UpdateSlider