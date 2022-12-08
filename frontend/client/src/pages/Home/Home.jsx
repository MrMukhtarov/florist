import React, { useEffect } from 'react'
import AboutUs from '../../components/AbouUs/AboutUs.jsx';
import Arrivals from '../../components/Arrivals/Arrivals.jsx';
import Benefits from '../../components/Benefits/Benefits.jsx';
import Categories from '../../components/Categories/Categories.jsx';
import Sliderr from '../../components/Slider/Sliderr.jsx'
import './Home.css'

const Home = () => {
  useEffect(() => {
    document.title = 'Florist | Home';
  });
  return (
    <div>
        <Sliderr/>
        <Benefits/>
        <Categories/>
        <AboutUs/>
        <Arrivals/>
    </div>
  )
}

export default Home