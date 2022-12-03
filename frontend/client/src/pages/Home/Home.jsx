import React, { useEffect } from 'react'
import Sliderr from '../../components/Slider/Sliderr.jsx'
import './Home.css'

const Home = () => {
  useEffect(() => {
    document.title = 'Florist | Home';
  });
  return (
    <div>
        <Sliderr/>
    </div>
  )
}

export default Home