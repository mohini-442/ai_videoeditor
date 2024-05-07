import React from 'react'
import { myarray1 } from '../common/helper'
import { Circle, Starsvg } from '../common/icons'
import Button from './Button'
import videoeditor from '../assets/images/videoeditor.webp';
import ellipse from '../assets/images/ellipse.png'
import library from '../assets/images/library.webp'

const AIContentForge = () => {
    return (
        <div className='relative z-10'>
            <div className='max-w-[1140px] px-3 mx-auto pt-44'>
                <div className='flex flex-wrap flex-row pt-9'>
                    <div className='lg:w-5/12 px-3 pt-10'>
                        <h2 className='text-black font-bold text-xs leading-41'>AI Video Editor</h2>
                        <p className=' font-plus font-normal text-base leading-6 text-offblack pt-3'>Transforming Your Content ExperienceRevolutionize your video editing process with our AI-powered Video Editor.</p>
                        {myarray1.map((data, index) => (
                            <div key={index}>
                                <div className='pt-3'>
                                    <div className='flex gap-1 items-center'>
                                        <Circle />
                                        <p className='font-plus font-normal text-base leading-6 text-offblack'>{data.para}</p>
                                    </div>
                                </div>
                            </div>
                        ))}
                        <Button />
                    </div>
                    <div className='lg:w-7/12 px-3'>
                        <img src={videoeditor} alt="videoeditor" />
                    </div>

                </div>
                <div className='flex flex-wrap flex-row pt-9'>
                    <div className='lg:w-6/12 px-3'>
                        <img src={library} alt="library" />
                    </div>
                    <div className='lg:w-6/12 px-3 pt-10'>
                        <h2 className='text-black font-bold text-xs leading-41'>Library & Branding Integration</h2>
                        <p className=' font-plus font-normal text-base leading-6 text-offblack pt-3'>Centralize, Customize, and Amplify Streamline your content management with our Library & Branding Integration. </p>
                        {myarray1.map((data, index) => (
                            <div key={index}>
                                <div className='pt-3'>
                                    <div className='flex gap-1 items-center'>
                                        <Circle />
                                        <p className='font-plus font-normal text-base leading-6 text-offblack'>{data.para}</p>
                                    </div>
                                </div>
                            </div>
                        ))}
                        <Button />
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