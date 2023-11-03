import { useState } from 'react';

import { Tab, Heading, SubHeading, BodyText } from '../../ui';

import Moon from './images/image-moon.png';

const Destination = () => {
    return (
        <div className='px-6 tablet:px-8 desktop:px-40 pt-10 desktop:pt-20 max-w-[1440px] xxl:mx-auto'>
            <div className='heading-5 desktop:text-h28 mobile:text-center text-[#fff!important] tablet:text-left mobile:text-[16px] tablet:text-[20px]'>
                <span className='font-bold opacity-[0.25] pe-4'>01</span>
                pick your destination
            </div>
            <section className='flex flex-col pt-16 justify-between desktop:flex-row items-center'>
                <div className='w-4/6 desktop:w-[55%]'>
                    <img className='m-auto' src={Moon} alt="Moon" />
                </div>
                <div className='h-full w-5/6 desktop:max-w-[50%] desktop:w-[35%] py-16'>
                    <ul className='flex w-full gap-8 mb-4 justify-center desktop:justify-start'>
                        <Tab text={'Moon'} addClass='active'/>
                        <Tab text={'Mars'}/>
                        <Tab text={'Europa'}/>
                        <Tab text={'Titan'}/>
                    </ul>
                    <div className='text-center desktop:text-left'>
                        <Heading text={'Moon'} level={'2'}/>
                        <BodyText addClass={'pb-10 pe-4'} text={'See our planet as you’ve never seen it before. A perfect relaxing trip away to help regain perspective and come back refreshed. While you’re there, take in some history by visiting the Luna 2 and Apollo 11 landing sites.'}/>
                        <div className='flex flex-row mobile:flex-col mobile:gap-10 justify-around desktop:justify-between pt-4 border-t-[1px] border-solid border-[#383b4b]'>
                            <div>
                                <SubHeading text={'avg. distance'} level={'2'}/>
                                <SubHeading text={'384,400 km'} level={'1'}/>
                            </div>
                            <div>
                                <SubHeading text={'est. travel time'} level={'2'}/>
                                <SubHeading text={'3 days'} level={'1'}/>                                
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Destination;