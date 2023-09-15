import React from 'react'
import RightArrow from '../images/right-arrows.png'
import CategoryWomen from '../CategoryWomen'

function CategoriesF() {
  return (
    <div>
    <h2 className="text-black font-bold text-3xl tracking-widest mt-32 ml-10">Categories Women  <img src={RightArrow} alt="right-arrow" className="w-10 ml-5 inline-block"/></h2>
      
    <div className='w-full p-1 h-1/2 grid grid-cols-4 mt-20 gap-10 ml-12'>

{CategoryWomen.map((items =>{
    return(
        <div className="w-60 h-96 p-2 bg-gray-50 rounded-lg">
            <img src={items.img} alt="c-1" className="w-60 h-72 rounded-lg"/>
            <div className="flex ">
                <div className="p-1"><h2 className='text-lg text-black font-bold tracking-wider'>{items.name}</h2>
                <button className="text-md text-gray-500 tracking-wider">Explore Now</button></div>
                <img src={RightArrow} className="w-5 h-5 ml-12 mt-5" alt="arrow"/>
        </div>
        </div>

    )
}))}

</div>
    </div>
  )
}

export default CategoriesF
