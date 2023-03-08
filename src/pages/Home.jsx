import React from 'react'
import { AiOutlineArrowRight } from 'react-icons/ai'

const Home = () => {
  return (
    <div className='mt-[100px] p-[30px] sm:flex flex-none gap-5 h-screen sm:justify-between'>
        <div className='flex w-[500px] h-fit'>
            <div className='flex flex-col gap-3'>
                <h1 className='text-2xl sm:text-5xl font-Lora mb-2 tracking-wide'>
                    Enjoy Delicious <br/>
                    <div className='flex gap-1 items-center sm:leading-11 mt-4 '>
                        <img className='w-11' src="../src/assets/img/home-sushi-title.png"/>
                        <h1>Sushi Food</h1> 
                    </div>
                </h1>
                <p className='text-para font-Poppins mb-3'>
                    Enjoy a good dinner with the best <br/>
                     dishes in the restaurant and improve <br/> your day.
                </p>
                <button className='flex gap-1 text-white font-Poppins items-center justify-center w-[150px] px-2 py-2 bg-dark-orange rounded-full '>
                   <span>Order Now</span>  
                   <AiOutlineArrowRight className='font-bold text-xl'/>
                </button>
            </div>
        </div>
        <div className='h-fit w-[450px]'>
            <img className='' src="../src/assets/img/home-sushi-rolls.png" alt="" />
        </div>
    </div>
  )
}

export default Home