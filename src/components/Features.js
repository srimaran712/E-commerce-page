import React from 'react'
import Feat from '../Feat'

function Features() {
  return (
    <>
    <div className="w-full h-1/3 flex">
        {Feat.map((items =>{
            return(
                <div className="w-72 h-8 ml-32" key={items.id}>
                    <img src={items.img} className="w-20 m-10" alt="icons"/>
                    <h2 className=" font-medium text-lg text-black tracking-widest">{items.name}</h2>
                    <h2 className="text-gray-600 font-medium text-md tracking-wider ">{items.content}</h2>
                </div>
            )
        }))}
      
    </div>
    </>
  )
}

export default Features
