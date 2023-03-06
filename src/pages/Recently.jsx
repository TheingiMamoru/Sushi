import React from 'react'
import {AiOutlineArrowRight} from 'react-icons/ai'

const Recently = () => {
  return (
    <div className='container grid grid-cols-2 gap-1 mx-auto mt-[100px] p-[30px] bg-cover bg-pale-peach h-screen'>
        <div className='flex w-[500px] h-fit'>
            <div className='flex flex-col gap-3'>
                <h1 className='font-Dancing-Script text-orange text-xl'>Recently Added</h1>
                <h1 className='text-2xl sm:text-3xl font-Lora mb-2 tracking-wide'>
                    Sushi Samurai <br/>
                    Salmón Cheese
                </h1>
                <p className='text-para font-Poppins mb-3'>
                    Take a look at what's new.  And do not <br/> 
                    deprive yourself of a good meal, enjoy and <br/> be happy.
                </p>
                <button className='flex gap-1 text-white font-Poppins items-center justify-center w-[150px] px-2 py-2 bg-dark-orange rounded-full'>
                   <span>Order Now</span>  
                   <AiOutlineArrowRight className='font-bold text-xl'/>
                </button>
            </div>
        </div>
        <div className='h-fit w-[450px]'>
            <img className='' src="../src/assets/img/recently-salmon-sushi.png" alt="" />
        </div>
    </div>
  )
}

export default Recently