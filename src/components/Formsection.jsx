import React from 'react'
import ellipse2 from '../assets/images/ellipse2.png'

const Formsection = () => {
    return (
        <div className='relative z-20  pt-36'>
            <div className='max-w-[1140px] translate-y-12 py-16 lg:py-20 mx-auto px-3 gradient-1 rounded-xl flex justify-center items-center flex-col bg-[url(./assets/images/bgpurple.webp)] bg-center bg-no-repeat bgSize'>
                <h3 className='font-plus font-bold text-white text-md'>Get <span className='font-normal'>Connected With</span> Us</h3>
                <p className='font-plus font-normal text-base text-offwhite max-w-sm leading-6 pt-4 text-center'>Unlock the Power of AI Editing and Actionable Insights! Join our community of satisfied customers and take your content to the next level.</p>
                <form>
                    <div className='w-xxs bg-white p-1 rounded-md flex justify-between mt-8'>
                        <input type="text" placeholder='Email here' className='outline-none font-plus font-normal text-base ps-4' />
                        <button className='text-white font-raleway bg-purplep py-2 px-6 rounded '>Submit</button>
                    </div>
                </form>
            </div>
            <img src={ellipse2} alt="ellipse2" className='absolute bottom-0 left-4 -z-10 ' />
        </div>
    )
}

export default Formsection