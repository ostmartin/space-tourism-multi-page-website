import { NavLink, useLoaderData } from 'react-router-dom';

import { getData } from '../../service';
import PlanetDescription from './PlanetDescription';

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

export const loader = async ({params}) => {
    const item = params.planetId.charAt(0).toUpperCase() + params.planetId.slice(1);
    const planet = await getData(item, 'destinations');
    return planet;
}

const Destination = () => {
    const currentPlanet = useLoaderData();

    if (!currentPlanet) {
        return (
            <div className='text-center text-light font-barl text-h32 m-auto'>There don't seem to be any more planets in this system...</div>
        )
    }

    const {name, description, distance, travel} = currentPlanet;

    const navLinkClasses = 'font-barl text-h16 text-purple tracking-2.7 uppercase pb-3 cursor-pointer relative afterTab'

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
                        <NavLink to='/destination/moon' className={({isActive}) => isActive ? (navLinkClasses + ' active') : navLinkClasses}>
                            Moon
                        </NavLink>
                        <NavLink to='/destination/mars' className={({isActive}) => isActive ? (navLinkClasses + ' active') : navLinkClasses}>
                            Mars
                        </NavLink>
                        <NavLink to='/destination/europa' className={({isActive}) => isActive ? (navLinkClasses + ' active') : navLinkClasses}>
                            Europa
                        </NavLink>
                        <NavLink to='/destination/titan' className={({isActive}) => isActive ? (navLinkClasses + ' active') : navLinkClasses}>
                            Titan
                        </NavLink>
                    </ul>
                    <PlanetDescription
                        name={name}
                        description={description}
                        distance={distance}
                        travel={travel}
                    />
                </div>
            </section>
        </div>
    )
}

export default Destination;