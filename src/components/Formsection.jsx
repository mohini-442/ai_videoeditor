import React from 'react'
import ellipse2 from '../assets/images/ellipse2.png'
import { Starsvg } from '../common/icons'

const Formsection = () => {
    return (
        <div className='relative z-20 pt-2 lg:pt-16' id='form'>
            <div className='mx-2 sm:mx-5 max-w-[1140px] translate-y-12 py-10 lg:py-20 lg:mx-auto px-3 gradient-1 rounded-xl flex justify-center items-center flex-col bg-[url(./assets/images/bgpurple.webp)] bg-center bg-no-repeat bgSize'>
                <h3 className='font-plus font-bold text-white text-xs sm:text-ss lg:text-md text-center leading-44'>Get <span className='font-normal'>Connected With</span> Us</h3>
                <p className='font-plus font-normal text-base text-offwhite max-w-sm leading-6 md:pt-4 text-center'>Unlock the Power of AI Editing and Actionable Insights! Join our community of satisfied customers and take your content to the next level.</p>
                <form>
                    <div className='sm:w-xxs bg-white p-1 rounded-md flex justify-between mt-4 lg:mt-8'>
                        <input type="text" placeholder='Email here' className='outline-none font-plus font-normal text-base ps-4' />
                        <button className='text-white font-raleway bg-purplep py-2 px-6 rounded '>Submit</button>
                    </div>
                </form>
            </div>
            <img src={ellipse2} alt="ellipse2" className='absolute bottom-0 left-4 -z-10 ' />
            <div className='absolute top-32 left-12 -z-10 ' >
                <Starsvg />
            </div>
            <div className='absolute bottom-8 right-12 -z-10 ' >
                <Starsvg />
            </div>
        </div>
    )
}

export default Formsection