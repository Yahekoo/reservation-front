import React from 'react'
import Navbar from '../../components/navbar/Navbar'
import Header from '../../components/header/Header'

import Featured from '../../components/featured/Featured'
import './home.css'
import PropertyList from '../../components/propertyList/PropertyList'
import FeaturedProperies from '../../components/featuredProperies/FeaturedProperies'
import MailList from '../../components/mailList/MailList'
import Footer from '../../components/footer/Footer'

const Home = () => {
  return (
    <div>
        <Navbar/>
        <Header/>
        <div className="homeContainer">
          <Featured/>
          <h1 className='homeTitle'>Browse by property type</h1>
          <PropertyList/>
          <h1 className='homeTitle'>People also loved this</h1>
          <FeaturedProperies/>
          <MailList/>
          <Footer/>

        </div>
    </div>
  )
}

export default Home