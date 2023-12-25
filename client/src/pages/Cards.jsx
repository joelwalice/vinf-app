import React from 'react'

const Cards = () => {
  return (

    <div className='w-screen mx-auto py-12 px-4 grid md:grid-cols-3 gap-6'>
        <div className='rounded-xl relative hover:scale-105 duration-300'>
            <div className='absolute w-full h-full bg-black/50 rounded-xl text-white'>
                <p className='font-semibold text-2xl px-8 pt-12'>Camera's Great, Avoids Brand's Hate</p>
                <p className='text-xl px-8 pt-5'>Delivered within 2 Days</p>
                <div className='py-3 px-6'>
                    <button className=' border-white bg-white text-black hover:bg-black hover:text-white hover:border-black'>Order Now</button>
                </div>
            </div>
            <img className='object-cover' src="https://www.psdmockups.com/wp-content/uploads/2022/09/iPhone-14-Pro-Mockup-2.jpg" alt="" />
        </div>
        <div className='rounded-xl relative hover:scale-105 duration-300'>
            <div className='absolute w-full h-full bg-black/50 rounded-xl text-white'>
                <p className='font-semibold text-2xl px-8 pt-12'>EcoSystem's Best, Rest are Just</p>
                <p className='text-xl px-8 pt-5'>Delivered within 2 Days</p>
                <div className='py-3 px-6'>
                    <button className='  border-white bg-white text-black hover:bg-black hover:text-white hover:border-black'>Order Now</button>
                </div>
            </div>
            <img className='object-cover' src="https://www.bhphotovideo.com/images/images2500x2500/apple_mvvm2ll_a_16_macbook_pro_late_1520437.jpg" alt="" />
        </div>
        <div className='rounded-xl relative hover:scale-105 duration-300'>
            <div className='absolute w-full h-full bg-black/50 rounded-xl text-white'>
                <p className='font-semibold text-2xl px-8 pt-12'>Shaky Shots, but Stable Videos</p>
                <p className='text-xl px-8 pt-5'>Delivered within 2 Days</p>
                <div className='py-3 px-6'>
                    <button className=' border-white bg-white text-black hover:bg-black hover:text-white hover:border-black'>Order Now</button>
                </div>
            </div>
            <img className='object-cover' src="https://www.bhphotovideo.com/images/images2500x2500/feiyu_fya2000sh_a2000_handheld_gimbal_for_1347015.jpg" alt="" />
        </div>

    </div>


  )
}

export default Cards