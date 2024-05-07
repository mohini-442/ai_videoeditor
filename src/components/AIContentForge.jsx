import React from 'react'
import { myarray1, myarray2, myarray3, myarray4, myarray5 } from '../common/helper'
import { Circle, Starsvg } from '../common/icons'
import Button from './Button'
import videoeditor from '../assets/images/videoeditor.webp';
import ellipse from '../assets/images/ellipse.png'
import library from '../assets/images/library.webp'
import elevate from '../assets/images/elevatecontent.webp'
import contextual from '../assets/images/contextual.webp'
import recorder from '../assets/images/recorder.webp'

const AIContentForge = () => {
    return (
        <div className='relative z-10 bg-[#F7F6FF] overflow-hidden' id='ai'>
            <div className='max-w-[1218px] px-3 mx-auto lg:pt-44 pt-20'>
                <div className='relative'>
                    <div className='flex flex-wrap flex-col-reverse xl:flex-row pt-9'>
                        <div className='absolute top-1/4 right-12 -z-10 ' >
                            <Starsvg />
                        </div>
                        <div className='xl:w-5/12 flex flex-col items-center xl:items-start px-3 lg:pt-10'>
                            <h2 className='text-black font-bold text-xs leading-41 font-plus'>AI Video Editor</h2>
                            <p className=' font-plus font-normal text-base leading-6 text-offblack pt-3 text-center lg:text-start'>Transforming Your Content ExperienceRevolutionize your video editing process with our AI-powered Video Editor.</p>
                            {myarray1.map((data, index) => (
                                <div key={index}>
                                    <div className='pt-3'>
                                        <div className='flex gap-1'>
                                            <div className='pt-1'>
                                                <Circle />
                                            </div>
                                            <p className='font-plus font-normal text-base leading-6 text-offblack'>{data.para}</p>
                                        </div>
                                    </div>
                                </div>
                            ))}
                            <Button />
                        </div>
                        <div className='xl:w-7/12 px-3 flex justify-center xl:justify-start'>
                            <img src={videoeditor} alt="videoeditor" className='xl:absolute right-[-12%] top-0' />
                        </div>
                    </div>
                    <div className='absolute bottom-[-27%] right-[-12%] -z-10 ' >
                        <Starsvg />
                    </div>
                </div>
                <div className='relative'>
                    <div className='flex flex-wrap flex-row pt-12 lg:pt-28'>
                        <div className='xl:w-7/12 w-full px-3 flex justify-center xl:justify-start'>
                            <img src={library} alt="library" className='xl:absolute top-[25%] left-[-9%]' />
                        </div>
                        <div className='xl:w-5/12  w-full flex flex-col items-center xl:items-start px-3 pt-2 lg:pt-10'>
                            <h2 className='text-black font-bold text-xs leading-41 font-plus'>Library & Branding Integration</h2>
                            <p className=' font-plus font-normal text-base leading-6 text-offblack pt-3 text-center lg:text-start'>Centralize, Customize, and Amplify Streamline your content management with our Library & Branding Integration. </p>
                            {myarray2.map((data, index) => (
                                <div key={index}>
                                    <div className='pt-3'>
                                        <div className='flex gap-1'>
                                            <div className='pt-1'>
                                                <Circle />
                                            </div>
                                            <p className='font-plus font-normal text-base leading-6 text-offblack max-w-xs'>{data.para}</p>
                                        </div>
                                    </div>
                                </div>
                            ))}
                            <Button />
                        </div>
                    </div>
                </div>
                <div className='relative'>
                    <div className='flex flex-wrap flex-col-reverse xl:flex-row pt-12 lg:pt-28'>
                        <div className='xl:w-5/12  w-full flex flex-col items-center xl:items-start px-3 pt-4 lg:pt-10'>
                            <h2 className='text-black font-bold text-xs leading-41 font-plus text-center lg:text-start'>Elevate Long-form Content </h2>
                            <p className=' font-plus font-normal text-base leading-6 text-offblack pt-3 text-center lg:text-start'>Transform lengthy videos into engaging highlights with Pages. Our platform crafts dedicated pages featuring tidbits.</p>
                            {myarray3.map((data, index) => (
                                <div key={index}>
                                    <div className='pt-3'>
                                        <div className='flex gap-1'>
                                            <span className='pt-1'>
                                                <Circle />
                                            </span>
                                            <p className='font-plus font-normal text-base leading-6 text-offblack'>{data.para}</p>
                                        </div>
                                    </div>
                                </div>
                            ))}
                            <Button />
                        </div>
                        <div className='xl:w-7/12 px-3  flex justify-center xl:justify-start'>
                            <img src={elevate} alt="videoeditor" className='xl:absolute top-[25%] right-[-9%]' />
                        </div>
                    </div>
                    <div className='absolute top-36 left-[-7%] -z-10 ' >
                        <Starsvg />
                    </div>
                </div>
                <div className='relative'>
                    <div className='flex flex-wrap flex-row pt-12 lg:pt-28'>
                        <div className='xl:w-7/12 w-full px-3 flex justify-center xl:justify-start'>
                            <img src={contextual} alt="contextual" className='xl:absolute top-[30%] left-[-9%]' />
                        </div>
                        <div className='xl:w-5/12 w-full flex flex-col items-center xl:items-start px-3 lg:pt-10'>
                            <h2 className='text-black font-bold text-xs leading-41 font-plus'>Contextual Search</h2>
                            <p className=' font-plus font-normal text-base leading-6 text-offblack pt-3 text-center lg:text-start'>Empower Decisions Gain valuable insights into your audience and content performance with our Analytics Dashboard. </p>
                            {myarray4.map((data, index) => (
                                <div key={index}>
                                    <div className='pt-3'>
                                        <div className='flex gap-1'>
                                            <div className='pt-1'>
                                                <Circle />
                                            </div>
                                            <p className='font-plus font-normal text-base leading-6 text-offblack'>{data.para}</p>
                                        </div>
                                    </div>
                                </div>
                            ))}
                            <Button />
                        </div>
                    </div>
                    <div className='absolute top-[22%] right-[-8%] -z-10 ' >
                        <Starsvg />
                    </div>
                </div>
                <div className='relative pb-12 lg:pb-20'>
                    <div className='flex flex-wrap flex-col-reverse xl:flex-row pt-12 lg:pt-28'>
                        <div className='xl:w-6/12 px-3 pt-3 lg:pt-10 flex flex-col items-center xl:items-start'>
                            <h2 className='text-black font-bold text-xs leading-41 font-plus'>AI Screen Recorder</h2>
                            <p className=' font-plus font-normal text-base leading-6 text-offblack pt-3 text-center xl:text-start'>Elevate your screen recording endeavors with our innovative AI screen recorder. With a user-friendly interface and advanced functionalities.</p>
                            {myarray5.map((data, index) => (
                                <div key={index}>
                                    <div className='pt-3'>
                                        <div className='flex gap-1'>
                                            <div className='pt-1'>
                                                <Circle />
                                            </div>
                                            <p className='font-plus font-normal text-base leading-6 text-offblack'>{data.para}</p>
                                        </div>
                                    </div>
                                </div>
                            ))}
                            <Button />
                        </div>
                        <div className='xl:w-6/12 px-3 flex justify-center xl:justify-start'>
                            <img src={recorder} alt="recorder" className='xl:absolute top-24 right-[-7%] ' />
                        </div>
                    </div>
                    <div className='absolute top-36 left-[-6%] -z-10 ' >
                        <Starsvg />
                    </div>
                </div>
            </div>
            <img src={ellipse} alt="ellipse" className='absolute top-0 left-0 -z-10' />
            <div className='absolute top-12 left-12 -z-10 ' >
                <Starsvg />
            </div>

        </div>
    )
}

export default AIContentForge