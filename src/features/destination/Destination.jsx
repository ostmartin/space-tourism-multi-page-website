import { useState, useEffect, useCallback } from 'react';

import { Tab, Heading, SubHeading, BodyText } from '../../ui';

import DATA from '../../data.json';

import Moon from '../../assets/images/destination/image-moon.png';
import Mars from '../../assets/images/destination/image-mars.png';
import Europa from '../../assets/images/destination/image-europa.png';
import Titan from '../../assets/images/destination/image-titan.png';

const PLANETS_IMGS = {
    'Moon': Moon,
    'Mars': Mars,
    'Europa': Europa,
    'Titan': Titan
}

const Destination = () => {
    const [currentPlanet, setCurrentPlanet] = useState(null);

    const getPlanet = useCallback((planet) => {
        const curPlanet = DATA['destinations'].find(destination => destination.name === planet);
        setCurrentPlanet(curPlanet);
    }, [])

    useEffect(() => {
        getPlanet('Moon');
    }, [])

    if (!currentPlanet) {
        return (
            <div className='text-center text-light font-barl text-h32 m-auto'>There don't seem to be any more planets in this system...</div>
        )
    }

    const {name, description, distance, travel} = currentPlanet;

    return (
        <div className='px-6 tablet:px-8 desktop:px-40 pt-10 desktop:pt-20 max-w-[1440px] xxl:mx-auto'>
            <div className='heading-5 desktop:text-h28 mobile:text-center text-[#fff!important] tablet:text-left mobile:text-[16px] tablet:text-[20px]'>
                <span className='font-bold opacity-[0.25] pe-4'>01</span>
                pick your destination
            </div>
            <section className='flex flex-col pt-12 justify-between desktop:flex-row items-center'>
                <div className='w-4/6 desktop:w-[55%]'>
                    <img className='m-auto' src={PLANETS_IMGS[name]} alt={name} />
                </div>
                <div className='h-full w-5/6 desktop:max-w-[50%] desktop:w-[35%] py-16'>
                    <ul className='flex w-full gap-8 mb-4 justify-center desktop:justify-start'>
                        <Tab text={'Moon'} onTabClick={getPlanet} addClass={currentPlanet['name'] === 'Moon' ? 'active' : ''}/>
                        <Tab text={'Mars'} onTabClick={getPlanet} addClass={currentPlanet['name'] === 'Mars' ? 'active' : ''}/>
                        <Tab text={'Europa'} onTabClick={getPlanet} addClass={currentPlanet['name'] === 'Europa' ? 'active' : ''}/>
                        <Tab text={'Titan'} onTabClick={getPlanet} addClass={currentPlanet['name'] === 'Titan' ? 'active' : ''}/>
                    </ul>
                    <div className='text-center flex flex-col justify-between desktop:text-left tablet:min-h-[340px] desktop:min-h-[375px]'>
                        <Heading text={name} level={'2'}/>
                        <BodyText addClass={'pb-10 pe-4 mobile:min-h-[175px]'} text={description}/>
                        <div className='flex flex-row mobile:flex-col mobile:gap-10 justify-around desktop:justify-between pt-4 border-t-[1px] border-solid border-[#383b4b]'>
                            <div>
                                <SubHeading text={'avg. distance'} level={'2'}/>
                                <SubHeading text={distance} level={'1'}/>
                            </div>
                            <div>
                                <SubHeading text={'est. travel time'} level={'2'}/>
                                <SubHeading text={travel} level={'1'}/>                                
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Destination;