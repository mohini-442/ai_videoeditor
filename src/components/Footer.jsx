import React from 'react'
import { Logo } from '../common/icons'

const Footer = () => {
    return (
        <div className='bg-black pt-24 pb-12'>
            <div className='max-w-[1140px] mx-auto px-3'>
                <div className='row flex-wrap flex-row'>
                    <div className='lg:w-4/12'>
                        <Logo />
                        <p className='text-offwhite2 text-base font-normal font-plus leading-6 pt-1'>Demobites is dedicated to providing innovative solutions for content creation, designed to empower individuals and businesses to unleash their creativity and captivate their audience</p>
                    </div>
                    <div className='lg:w-8/12'>
                        <div className='flex flex-wrap '>
                            <div className='w-1/3 px-3'>
                                <p className=''>Company</p>

                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer