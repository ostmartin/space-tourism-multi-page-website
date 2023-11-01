import { useState } from 'react';

import { Tab, Heading, SubHeading, BodyText } from '../../ui';

import Moon from './images/image-moon.png';

const Destination = () => {
    return (
        <div className='px-40'>
            <div className='heading-5 text-[#fff!important] text-center tablet:text-left mobile:text-[16px] tablet:text-[20px]'>
                <span className='font-bold opacity-[0.25] pe-4'>01</span>
                pick your destination
            </div>
            <section className='flex flex-row justify-between'>
                <div className='w-[65%]'>
                    <img className='m-auto' src={Moon} alt="Moon" />
                </div>
                <div className='container h-full max-w-[50%] w-[35%]'>
                    <ul className='flex w-full gap-8 mb-4'>
                        <Tab text={'Moon'} addClass='active'/>
                        <Tab text={'Mars'}/>
                        <Tab text={'Europa'}/>
                        <Tab text={'Titan'}/>
                    </ul>
                    <div>
                        <Heading text={'Moon'} level={'2'}/>
                        <BodyText addClass={'pb-10 pe-4'} text={'See our planet as you’ve never seen it before. A perfect relaxing trip away to help regain perspective and come back refreshed. While you’re there, take in some history by visiting the Luna 2 and Apollo 11 landing sites.'}/>
                        <div className='flex flex-row justify-between pt-4 border-t-[1px] border-solid border-[#383b4b]'>
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