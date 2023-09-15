import React from 'react'
import Hero from '../components/Hero'
import HeroImg from '../images/hero02.png'
import Arrivals from '../components/Arrivals'
import BigSaving from '../components/BigSaving'
import CategoriesM from '../components/CategoriesM'
import CategoriesF from '../components/CategoriesF'
import Subscribe from '../components/Subscribe'
import Features from '../components/Features'
import Footer from '../components/Footer'

function Homepage() {
  return (
    <div className="w-full h-full">
      <div className="flex w-full h-1/2 ">
        <div className="w-1/2 h-1/2">
            <h1 className=" p-4 text-5xl font-bold tracking-wider ml-40 mt-20 ">Summer 2024 Sale <br/>Starts now</h1>
           <div className="flex">
            <button className="w-60 h-10 bg-orange-500 font-bold tracking-wider p-2 text-lg ml-24 mt-24">Shop Sale</button>
            <button className="w-60 h-10 border-orange-500 border-solid border-2 p-2 text-lg ml-20  mt-24">New Collections</button>
            </div>
        </div> 
        <div className="w-1/2 h-1/2 bg-orange-100">
          <img src={HeroImg} alt="hero" className="max-w-lg p-5 "/>
        </div>
        </div>

  <Arrivals/>
  <BigSaving/>

  <CategoriesM/>

  <CategoriesF/>
  <Subscribe/>

  <Features/>
  <Footer/>

 


 
      
   </div>
  )
}

export default Homepage
