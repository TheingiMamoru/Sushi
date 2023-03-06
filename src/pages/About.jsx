import React from 'react'

const About = () => {
  return (
    <div className='container mx-auto mt-[100px] p-[30px] sm:flex flex-none gap-5 bg-cover bg-pale-peach h-screen sm:justify-between '>
        <div className=' h-fit w-[300px]'>
            <img className='' src="../src/assets/img/about-sushi.png" alt="" />
        </div>
        <div className=' w-[450px] h-fit'>
            <h1 className='mb-1 font-Dancing-Script text-orange text-xl '>
                About Us
            </h1>
            <div className='flex flex-col gap-3'>
                <h1 className='text-xl sm:text-3xl font-Lora mb-2 tracking-wide'>
                        <div className='flex gap-1 items-center sm:leading-11 mt-4 '>
                            <h1>We Provide</h1>
                            <img className='w-11' src="../src/assets/img/about-sushi-title.png"/>
                        </div>
                        Healthy Food
                    </h1>
                    <p className='text-para font-Poppins mb-3'>
                    Food comes to us from our relatives, whether <br/> 
                    they have wings or roots. This is how we <br/>
                    consider food, it also has a culture. It has <br/>
                    a history that passes from generation <br/> 
                    to generation.
                    </p>
            </div>
        </div>
    </div>
  )
}

export default About