import React from 'react'
import RightArrow from '../images/right-arrows.png'
import BigCollection from '../Big'
import SubCollection from '../bigsub'

function BigSaving() {
  return (
    <div className="w-full h-2/5 mt-40">
        <h2 className="text-black font-bold text-3xl tracking-widest mt-10 ml-10">Big Saving Zone  <img src={RightArrow} alt="right-arrow" className="w-10 ml-5 inline-block"/></h2>
        <div className="w-full h-1/2 grid  grid-cols-3 gap-10 mt-10">
            {BigCollection.map((item =>{
                return(
                    <div className="w-90 h-80 relative ml-10">
                        <img src={item.img} alt="big-collections"/>
                        <div className="z-40 absolute -mt-32 text-white ml-5 font-bold"><h2 className=" text-2xl tracking-wider ">{item.title}</h2>
                        <h3 className="text-xl  tracking-wider">{item.subtitle}</h3>
                        <h4 className=" font-lg font-bold tracking-wider">{item.offer}</h4></div>
                    </div>
                )
            }))}


        </div>


        <div className="w-full h-1/2 grid  grid-cols-2 gap-6 mt-10">
            {SubCollection.map((items =>{
                return(
                    <div className="w-90 h-80 relative ml-20 mt-16">
                        <img src={items.img} alt="big-collections"/>
                        <div className="z-40 absolute -mt-48 text-black  font-bold ml-72"><h2 className=" text-3xl tracking-wider p-1 ">{items.title}</h2>
                        <h3 className="text-2xl  tracking-wider p-1">{items.subtitle}</h3>
                        <h4 className=" text-xl font-bold tracking-wider p-1">{items.offer}</h4>
                        <button className="text-white text-lg tracking-wider  border-white border-2 w-32 p-1 mt-3">Shop Now</button></div>
                    </div>
                )
            }))}

            </div>
      
    </div>
  )
}

export default BigSaving
