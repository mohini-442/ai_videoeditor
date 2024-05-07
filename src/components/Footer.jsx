import React from 'react'
import { Instagram, Linkedin, Logo, Twitter, Starsvg2 } from '../common/icons'

const Footer = () => {
    return (
        <div className='bg-black pt-24 relative z-10'>
            <div className='max-w-[1140px] mx-auto px-3 pb-20'>
                <div className='flex flex-wrap flex-row'>
                    <div className='xl:w-7/12 w-full px-3'>
                        <a href=""> <Logo /></a>
                        <p className='text-offwhite2 text-base font-normal font-plus leading-6 pt-2 max-w-s'>Demobites is dedicated to providing innovative solutions for content creation, designed to empower individuals and businesses to unleash their creativity and captivate their audience</p>
                    </div>
                    <div className='xl:w-5/12 px-3 w-full pt-8 xl:pt-0'>
                        <div className='sm:flex '>
                            <div className='flex sm:w-8/12 w-full'>
                                <div className='w-1/2'>
                                    <p className='text-white font-plus font-semibold text-base'>Company</p>
                                    <ul>
                                        <li className='pt-4'><a href="#ai" className='text-offwhite2 text-base font-normal font-plus leading-6'>Product</a></li>
                                        <li className='pt-4'><a href="#form" className='text-offwhite2 text-base font-normal font-plus leading-6'>About Us</a></li>
                                        <li className='pt-4'><a href="#form" className='text-offwhite2 text-base font-normal font-plus leading-6'>Use Cases</a></li>
                                        <li className='pt-4'><a href="#ai" className='text-offwhite2 text-base font-normal font-plus leading-6'>Resources</a></li>
                                    </ul>
                                </div>
                                <div className='w-1/2'>
                                    <p className='text-white font-plus font-semibold text-base'>Information</p>
                                    <ul>
                                        <li className='pt-4'><a href="#ai" className='text-offwhite2 text-base font-normal font-plus leading-6 text-nowrap'>Terms & Conditions</a></li>
                                        <li className='pt-4'><a href="#form" className='text-offwhite2 text-base font-normal font-plus leading-6'>Privacy Policy</a></li>

                                    </ul>
                                </div>
                            </div>
                            <div className='w-4/12 flex xl:items-end flex-col pt-8 sm:pt-0'>
                                <div className='ps-1'>
                                    <p className='text-white font-plus font-semibold text-base'>Follow Us</p>
                                    <div className='flex gap-2 pt-4'>
                                        <div className='duration-300 hover:translate-y-[-12%]'>
                                            <Linkedin />
                                        </div>
                                        <div className='duration-300 hover:translate-y-[-12%]'>
                                            <Instagram />
                                        </div>
                                        <div className='duration-300 hover:translate-y-[-12%]'>
                                            <Twitter />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
            <div className='w-full h-[1px] bg-lightgrey'></div>
            <p className='text-offwhite2 text-base font-normal font-plus leading-6 py-4 text-center'>© 2024 Demobites. All Rights Reserved</p>
            <div className='absolute bottom-20 right-16 -z-10 ' >
                <Starsvg2 />
            </div>
        </div>
    )
}

export default Footer