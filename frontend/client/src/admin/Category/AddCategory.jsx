import axios from 'axios'
import React, { useState } from 'react'
import { TiArrowBack } from 'react-icons/ti'
import { Link, useNavigate } from 'react-router-dom'
import './AddCategory.css'

const AddCategory = () => {
    const navigate = useNavigate();

    const history=useNavigate()

  const [inputs,setInputs]=useState({
    img: '',
    title:'',
    count:''
}) 

const sendRequest=async()=>{
  await axios.post('http://localhost:3002/category',{
      img: String(inputs.img),
      title: String(inputs.title),
      count: String(inputs.count)
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
    <div className="addcategory">
      <div className="login">
        <div className="form">
          <p>Add Category</p>
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
              placeholder="Count"
              required
              aria-required
              value={inputs.count}
              name="count"
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

export default AddCategory