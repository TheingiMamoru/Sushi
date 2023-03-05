import React from 'react'
import {AiFillShopping} from 'react-icons/ai'

const Popular = () => {
  return (
    <div className='contiaer mx-auto w-[1000px] flex flex-col'>
        <div className='flex flex-col gap-1 justify-center items-center'>
            <h1 className='font-Dancing-Script text-orange text-xl'>The Best Food</h1>
            <h2 className='text-xl sm:text-3xl font-Lora mb-2 tracking-wide'>Popular Dishes</h2>
        </div>
        <div className='flex gap-[50px] my-[100px]'>
            <div className='flex flex-col gap-1 items-center w-[300px] h-fit bg-white rounded-lg p-5 shadow-lg'>
                <img src="../src/assets/img/popular-onigiri.png" alt="" />
                <h1 className='font-Lora text-xl'>Onigiri</h1>
                <h2 className='font-Poppins text-light-para text-sm'>Japanese Dish</h2>
                <div className='flex gap-1 mb-3 items-center font-bold'>
                    <p className='font-Poppins text-dark-orange'><span className='text-lg'>$</span>10.99</p>
                    <button className='text-dark-orange'>
                        <AiFillShopping/>
                    </button>
                </div>
            </div>

            <div className='flex flex-col gap-1 items-center w-[300px] h-fit bg-white rounded-lg p-5 shadow-lg'>
                <img src="../src/assets/img/popular-spring-rols.png" alt="" />
                <h1 className='font-Lora text-xl'>Spring Rolls</h1>
                <h2 className='font-Poppins text-light-para text-sm'>Japanese Dish</h2>
                <div className='flex gap-1 mb-3 items-center font-bold'>
                    <p className='font-Poppins text-dark-orange'><span className='text-lg'>$</span>15.99</p>
                    <button className='text-dark-orange'>
                        <AiFillShopping/>
                    </button>
                </div>
            </div>

            <div className='flex flex-col gap-1 items-center w-[300px] h-fit bg-white rounded-lg p-5 shadow-lg'>
                <img src="../src/assets/img/popular-sushi-rolls.png" alt="" />
                <h1 className='font-Lora text-xl'>Sushi Rolls</h1>
                <h2 className='font-Poppins text-light-para text-sm'>Japanese Dish</h2>
                <div className='flex gap-1 mb-3 items-center font-bold'>
                    <p className='font-Poppins text-dark-orange'><span className='text-lg'>$</span>19.99</p>
                    <button className='text-dark-orange'>
                        <AiFillShopping/>
                    </button>
                </div>
            </div>
            
        </div>
    </div>
  )
}

export default Popular