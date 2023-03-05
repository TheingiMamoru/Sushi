import React from 'react'
import {HiOutlineShoppingBag} from 'react-icons/hi'

const Popular = () => {
  return (
    <div className='contiaer mx-auto w-[1000px] flex flex-col'>
        <div className='flex flex-col gap-1 justify-center items-center'>
            <h1 className='font-Dancing-Script text-orange text-xl'>The Best Food</h1>
            <h2 className='text-xl sm:text-3xl font-Lora mb-2 tracking-wide'>Popular Dishes</h2>
        </div>
        <div className='flex gap-[50px] my-[100px]'>
            <div className='flex flex-col gap-1 items-center w-[300px] h-fit bg-white rounded-lg p-5 shadow-lg relative'>
                <img src="../src/assets/img/popular-onigiri.png" alt="" />
                <h1 className='font-Lora text-xl'>Onigiri</h1>
                <h2 className='font-Poppins text-light-para text-sm'>Japanese Dish</h2>
                <p className='font-Poppins text-dark-orange'><span className='text-lg'>$</span>10.99</p>
                <button className='p-2 bg-dark-orange text-white rounded-full absolute bottom-5 right-5'>
                    <HiOutlineShoppingBag/>
                </button>
            </div>

            <div className='flex flex-col gap-1 items-center w-[300px] h-fit bg-white rounded-lg p-5 shadow-lg relative'>
                <img src="../src/assets/img/popular-spring-rols.png" alt="" />
                <h1 className='font-Lora text-xl'>Spring Rolls</h1>
                <h2 className='font-Poppins text-light-para text-sm'>Japanese Dish</h2>
                <p className='font-Poppins text-dark-orange'><span className='text-lg'>$</span>15.99</p>
                <button className='p-2 bg-dark-orange text-white rounded-full absolute bottom-5 right-5'>
                    <HiOutlineShoppingBag/>
                </button>
            </div>

            <div className='flex flex-col gap-1 items-center w-[300px] h-fit bg-white rounded-lg p-5 shadow-lg relative'>
                <img src="../src/assets/img/popular-sushi-rolls.png" alt="" />
                <h1 className='font-Lora text-xl'>Sushi Rolls</h1>
                <h2 className='font-Poppins text-light-para text-sm'>Japanese Dish</h2>
                <p className='font-Poppins text-dark-orange'><span className='text-lg'>$</span>19.99</p>
                <button className='p-2 bg-dark-orange text-white rounded-full absolute bottom-5 right-5'>
                    <HiOutlineShoppingBag/>
                </button>
            </div>
            
        </div>
    </div>
  )
}

export default Popular