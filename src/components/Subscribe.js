import React from 'react'
import {NavLink} from 'react-router-dom'
import Cartoon from '../images/cartoon-1.png'

function Subscribe() {
  return (
    <div className="w-full h-1/2 flex bg-gray-100 mt-4">
        <div className="w-1/2 ">
            <h1 className="tracking-wider text-4xl ml-48 mt-32">Subscribe for Updates</h1>

            <h2 className="tracking-wider text-lg p-1 text-gray-500 mt-8 ml-32">Subscribe for exclusive early sales access and new arrivals</h2>
            <div className="flex space-x-3 mt-5 ml-32">
                <NavLink className="text-gray-600 border-2 border-gray-300 bg-gray-300 tracking-wider text-md p-2 w-28 text-center">Men</NavLink>
                <NavLink className="text-gray-600 border-2 border-gray-300 bg-gray-300 tracking-wider text-md p-2 w-28 text-center">Women</NavLink>
                <NavLink className="text-gray-600 border-2 border-gray-300 bg-gray-300 tracking-wider text-md p-2 w-28 text-center">Girls</NavLink>
                <NavLink className="text-gray-600 border-2  border-gray-300 bg-gray-300 tracking-wider text-md p-2 w-28 text-center">Boys</NavLink>
            </div>
            <h3 className="text-lg font-medium text-gray-600 mt-5 ml-32">Email</h3>
            <div className="flex ml-32 mt-4">
                <input type="text" placeholder="Your working e-mail" className="border border-gray-200 w-72 text-gray-200 text-center pt-2" />
                <button className="w-60 p-2 bg-green-800 text-white text-lg tracking-wider">Subscribe</button>
            </div>
            
           

        </div>
        <img src={Cartoon} alt="cartoon" className="w-1/3 ml-2" />
      
    </div>
  )
}

export default Subscribe
