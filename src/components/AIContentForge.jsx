import React from 'react'
import { myarray1 } from '../common/helper'
import { Circle, Starsvg } from '../common/icons'
import Button from './Button'
import videoeditor from '../assets/images/videoeditor.webp';
import ellipse from '../assets/images/ellipse.png'

const AIContentForge = () => {
    return (
        <div className='relative z-10'>
            <div className='max-w-[1140px] 2xl:max-w-[1320px] px-3 mx-auto pt-44'>
                <div className='flex flex-wrap flex-row pt-9'>
                    <div className='lg:w-5/12 px-3 pt-10'>
                        {myarray1.map((data, index) => (
                            <div key={index}>
                                <h2 className='text-black font-bold text-xs leading-41'>AI Video Editor</h2>
                                <p className=' font-plus font-normal text-base leading-6 text-offblack pt-3'>Transforming Your Content ExperienceRevolutionize your video editing process with our AI-powered Video Editor.</p>
                                <div className='pt-3'>
                                    <div className='flex gap-1 items-center'>
                                        <Circle />
                                        <p className='font-plus font-normal text-base leading-6 text-offblack'>{data.para}</p>
                                    </div>
                                    <div className='flex gap-1 items-center pt-2'>
                                        <Circle />
                                        <p className='font-plus font-normal text-base leading-6 text-offblack'>{data.para2}</p>
                                    </div>
                                    <div className='flex gap-1 items-center pt-2'>
                                        <Circle />
                                        <p className='font-plus font-normal text-base leading-6 text-offblack'>{data.para3}</p>
                                    </div>
                                    <div className='flex gap-1 items-center pt-2'>
                                        <Circle />
                                        <p className='font-plus font-normal text-base leading-6 text-offblack'>{data.para4}</p>
                                    </div>
                                </div>
                                <Button />
                            </div>
                        ))}
                    </div>
                    <div className='lg:w-7/12 px-3'>
                        <img src={videoeditor} alt="videoeditor" />
                    </div>

                </div>

            </div>
            <img src={ellipse} alt="ellipse" className='absolute top-0 left-0 -z-10' />
            <div className='absolute top-12 left-12 -z-10 ' >
                <Starsvg />
            </div>
            <div className='absolute bottom-0 right-12 -z-10 ' >
                <Starsvg />
            </div>
        </div>
    )
}

export default AIContentForge