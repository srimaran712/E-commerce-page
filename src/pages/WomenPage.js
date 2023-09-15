import React from 'react'
import{useState,useEffect} from 'react'
import {useParams} from 'react-router-dom'

function WomenPage(){
    let {items}= useParams()
  const[products,setProducts]=useState([])
  const [loading,setLoading] = useState(true)
  let url="https://fakestoreapi.com/products/category/";
  async function getAllJewelery(){
    setLoading(true)

      let response=  await fetch(url+items);
      let data = await  response.json()
      setProducts(data)
      setLoading(false)
  }
  useEffect(() =>{
      getAllJewelery()
  },[items]) 
  
  return (
    <div>
<div className='grid grid-cols-3 w-full gap-3 ml-20 mt-8'>
           {loading? ("fetching data"): (products.map((items =>{
            return(
                <div key={items} className="w-72 h-96">
                    <div className="w-full"><img src={items.image} className="h-72  w-full"/></div>
                    <h2 className="text-sm font-mono text-gray-500 tracking-wider mt-2">{items.title}</h2>
                    <h3 className="text-lg font-mono text-gray-700 font-bold">{items.price}</h3>
                </div>
            )
           })))} 
        </div>
    </div>
  )
}

export default WomenPage
