import React from 'react'
import {NavLink, BrowserRouter } from 'react-router-dom'
import dropdown from '../dropdown'

export default function HeaderOne() {
  return (
    <div className="w-full bg-black h-10 flex p-1 space-x-10">
        <p className="text-gray-500 font-medium ml-28 p-1">Available at <span className="font-bold text-gray-500 font-lg">(405) 001-5578</span></p>
        <div className="flex space-x-10 p-1 ml-40">
          
          <NavLink to="/" className="text-gray-500 space-x-3 tracking-wider">Delivery & returns</NavLink>
          <NavLink to="/" className="text-gray-500 space-x-3 tracking-wider">Blogs</NavLink>
          <NavLink to="/" className="text-gray-500 space-x-3 tracking-wider">Contact</NavLink>
          


          
        
        
            
            
        </div>
        <div className="flex pt-1 ml-24">
          <select className="text-white font-bold ml-20 bg-black">
            {dropdown.map((item =>{
              return(
                <option className="text-gray">{item.language} {item.currency}</option>
              )
            }))}

          </select>
         
          <NavLink className="ml-24 text-gray-400 ">Login/Register</NavLink>
          
        </div>
      
    </div>
  )
}


