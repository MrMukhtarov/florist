import axios from 'axios'
import React from 'react'
import { useState } from 'react'
import { TiArrowBack } from 'react-icons/ti'
import { Link, useNavigate } from 'react-router-dom'
import './AddArrivals.css'

const AddArrivals = () => {
    const navigate = useNavigate();

    const history=useNavigate()
    const [inputs, setinputs] = useState({
        status : "",
        img : "",
        title : "",
        price : ""
})

const sendRequest = async () => {
    await axios.post('http://localhost:3002/arrivals',{
        status : String(inputs.status),
        img : String(inputs.img),
        title : String(inputs.title),
        price : Number(inputs.price)
    }).then(res => res.data)
}

const handleChange = (e) => {
    setinputs((prevState) => ({
        ...prevState,
        [e.target.name] : e.target.value
    }))
}

const handleSubmit = (e) => {
    e.preventDefault();
    sendRequest().then(() => history('/admin'))
}
  return (
    <div className="addArrivals">
    <div className="login">
      <div className="form">
        <p>Add Arrivals</p>
        <form key={inputs._id} className="login-form" onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Status"
            required
            aria-required
            value={inputs.status}
            name="status"
            onChange={handleChange}
          />
          <input
            type="text"
            placeholder="Img"
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
            placeholder="Price"
            required
            aria-required
            value={inputs.price}
            name='price'
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

export default AddArrivals