import axios from 'axios'
import React, { useState } from 'react'
import { TiArrowBack } from 'react-icons/ti'
import { Link, useNavigate } from 'react-router-dom'
import './AddSlider.css'

const AddSlider = () => {

  const navigate = useNavigate();

  const history=useNavigate()

  const [inputs,setInputs]=useState({
    title: '',
    desc:'',
    img:''
}) 

const sendRequest=async()=>{
  await axios.post('http://localhost:3002/slider',{
      title: String(inputs.title),
      desc: String(inputs.desc),
      img: String(inputs.img)
  }).then(res=>res.data)
}

const handleChange=(e)=>{
  setInputs((prevState)=>({
      ...prevState,
      [e.target.name] : e.target.value
  }))
}

const handleSubmit=(e)=>{
  e.preventDefault();
  sendRequest().then(()=>history('/admin'));
}

  return (
    <div className="addslider">
      <div className="login">
        <div className="form">
          <p>Logo</p>
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

export default AddSlider