import './App.scss'
import React from 'react'
import Navbar from './Components/Navbar/Navbar'
import Hero from './Components/Hero/Hero'
import Products from './Components/Products/Products'
import Banner from './Components/Banner/Banner'
import img from '../src/images/background/b2s.png'
import img1 from '../src/images/mockup7.png'
import Items from './Components/SaleItems/Items'
import Status from './Components/status/Status'
import Card from './Components/Card/Card'
import Index from './Components/Testimonial/Index'
import Footer from './Components/Footer/Footer'

const App = () => {
  return (
   <>
   <Navbar />
   <Hero />
   <Products />
   <Banner img={img} off="20" name="Beats" />
   <Items />
   <Banner img={img1} off="30" name="Mini" banner1="banner1" />
   <Card />
   <Status />
   <Index />
   <Footer />
   </>
  )
}

export default App
