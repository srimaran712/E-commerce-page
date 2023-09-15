import React from 'react'
import {useState,useEffect} from 'react'
import {useParams} from 'react-router-dom'

function ProductPage() {
    let {items} = useParams()
  const[products,setProducts]=useState({})
  let url="https://fakestoreapi.com/products/";
  async function getAllProductDetails(){
      let response=  await fetch(url+items);
      let data = await  response.json()
      setProducts(data)
  }
  useEffect(() =>{
      getAllProductDetails()
  },[items]) 
  return (
    <div>
      
    
<div className='grid grid-cols-3 w-full gap-3 ml-20 mt-8'>
           {products.map((items =>{
            return(
                <div key={items.id} className="w-full shadow-md flex">
                    <div className="w-1/2 h-auto"><img src={items.image} className="h-auto  w-full"/></div>
                    <h2 className="text-3xl   text-gray-500 tracking-wider mt-2">{items.title}</h2>
                    <p className="text-lg tracking-wider text-gray-600 capitalize">{items.Description}</p>
                    <h3 className="text-lg text-gray-700 font-bold">${items.price}</h3>
                    <div className="flex w-auto h-auto shadow-lg">
                        <button className="w-96 bg-orange-400 p-3 flex space-x-2"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6 text-gray-800">
  <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 10.5V6a3.75 3.75 0 10-7.5 0v4.5m11.356-1.993l1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 01-1.12-1.243l1.264-12A1.125 1.125 0 015.513 7.5h12.974c.576 0 1.059.435 1.119 1.007zM8.625 10.5a.375.375 0 11-.75 0 .375.375 0 01.75 0zm7.5 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z" />
</svg>
Buy Now
</button>
<button className="w-96 bg-slate-900 p-3 flex space-x-2">
<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
  <path stroke-linecap="round" stroke-linejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z" />
</svg>

Add to Cart
</button>

                        </div>
                </div>
            )
           }))} 
        </div>
    </div>
  )
  
  
}

export default ProductPage
