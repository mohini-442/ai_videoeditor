import React from 'react'
import { Instagram, Linkedin, Logo, Twitter } from '../common/icons'

const Footer = () => {
    return (
        <div className='bg-black pt-24 '>
            <div className='max-w-[1140px] mx-auto px-3 pb-20'>
                <div className='flex flex-wrap flex-row'>
                    <div className='lg:w-7/12 w-full'>
                        <Logo />
                        <p className='text-offwhite2 text-base font-normal font-plus leading-6 pt-1 max-w-s'>Demobites is dedicated to providing innovative solutions for content creation, designed to empower individuals and businesses to unleash their creativity and captivate their audience</p>
                    </div>
                    <div className='lg:w-5/12 w-full pt-5 lg:pt-0'>
                        <div className='sm:flex '>
                            <div className='flex w-8/12'>
                                <div className='w-1/2'>
                                    <p className='text-white font-plus font-semibold text-base'>Company</p>
                                    <ul>
                                        <li className='pt-4'><a href="" className='text-offwhite2 text-base font-normal font-plus leading-6'>Product</a></li>
                                        <li className='pt-4'><a href="" className='text-offwhite2 text-base font-normal font-plus leading-6'>About Us</a></li>
                                        <li className='pt-4'><a href="" className='text-offwhite2 text-base font-normal font-plus leading-6'>Use Cases</a></li>
                                        <li className='pt-4'><a href="" className='text-offwhite2 text-base font-normal font-plus leading-6'>Resources</a></li>
                                    </ul>
                                </div>
                                <div className='w-1/2'>
                                    <p className='text-white font-plus font-semibold text-base'>Information</p>
                                    <ul>
                                        <li className='pt-4'><a href="" className='text-offwhite2 text-base font-normal font-plus leading-6 text-nowrap'>Terms & Conditions</a></li>
                                        <li className='pt-4'><a href="" className='text-offwhite2 text-base font-normal font-plus leading-6'>Privacy Policy</a></li>

                                    </ul>
                                </div>
                            </div>
                            <div className='w-4/12 flex lg:items-end flex-col pt-5 sm:pt-0'>
                                <div className='ps-1'>
                                    <p className='text-white font-plus font-semibold text-base'>Follow Us</p>
                                    <div className='flex gap-2 pt-4'>
                                        <Linkedin />
                                        <Instagram />
                                        <Twitter />
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
            <div className='w-full h-[1px] bg-lightgrey'></div>
            <p className='text-offwhite2 text-base font-normal font-plus leading-6 py-4 text-center'>© 2024 Demobites. All Rights Reserved</p>
        </div>
    )
}

export default Footer