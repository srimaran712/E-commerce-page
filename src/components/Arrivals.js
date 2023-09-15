import React from 'react'
import RightArrow from '../images/right-arrows.png'
import {NavLink} from 'react-router-dom'
import Arrivalss from '../arrival'
import {useState,useEffect} from 'react'
import {Link} from 'react-router-dom'

function Arrivals() {
    const[products,setProducts]=useState([])
    let url="https://fakestoreapi.com/products";
    async function getAllProduct(){
        let response=  await fetch(url);
        let data = await  response.json()
        setProducts(data)
    }
    useEffect(() =>{
        getAllProduct()
    },[])
        
    

  return (
    <div className="w-full h-1/2 ">
        <div className=' w-90'>
            <h1 className="text-3xl font-mono font-bold tracking tracking-wider mt-24 ml-12">New Arrivals <img src={RightArrow} alt="arroe" className="w-10 ml-5 inline-block"/></h1>
            <div className='ml-96 mt-10 w-90'>
                <h2 className="text-gray-400 font-mono tracking-wide text-xl ml-4">Check out our latest arrivals for the upcoming season</h2>
                <NavLink to="/women" className="text-green-500 font-medium font-mono text-lg ml-48">See the Collections here</NavLink>
            </div>
        </div>
        <div className='grid grid-cols-3 w-full gap-3 ml-20 mt-8'>
           {products.map((items =>{
            return(
                <div key={items} className="w-72 h-96 m-2">
                    <div className="w-full"><img src={items.image} className="h-72  w-full"/></div>
                    <h2 className="text-sm font-mono text-gray-500 tracking-wider mt-2">{items.title}</h2>
                    <h3 className="text-lg font-mono text-gray-700 font-bold">${items.price}</h3>
                     <Link to={`products/${items.id}`} className="shadow-lg text-gray-700 tracking-wider p-2 m-auto ">Explore</Link>
                    
                </div>
            )
           }))} 
        </div>

      
    </div>
  )
}

export default Arrivals
