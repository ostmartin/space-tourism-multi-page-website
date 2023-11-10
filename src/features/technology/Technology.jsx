import { Heading, BodyText, TechImage } from '../../ui';

import { capitalizeFirstLetter, getData } from '../../service';

import { NavLink, useLoaderData } from 'react-router-dom';

export const loader = async ({params}) => {
    const item = params.techId.split('-').map((word, i) => {
        if (i === 0) {
            return capitalizeFirstLetter(word);
        } else {
            return word;
        }
    }).join(' ');

    return getData(item, 'technology');
}

const Technology = () => {
    const currentItem = useLoaderData();

    if (!currentItem) {
        return (
            <div className='text-center text-light font-barl text-h32 m-auto'>Try again later...</div>
        )
    }

    const {name, description} = currentItem;
    const tabClasses = 'heading-4 h-[40px] w-[40px] rounded-full bg-opacity-0 border-light/25 border-solid border-[1px] flex justify-center items-center tablet:w-[60px] tablet:h-[60px] desktop:w-[80px] desktop:h-[80px] hover:border-light/100';

    return (
        <div className='desktop:ps-40 max-w-[1440px] pt-10 desktop:pt-20 xxl:mx-auto'>
            <div className='heading-5 ps-6 desktop:ps-0 desktop:text-h28 mobile:text-center text-[#fff!important] tablet:text-left mobile:text-[16px] tablet:text-[20px]'>
                <span className='font-bold opacity-[0.25] pe-4'>03</span>
                space launch 101
            </div>
            <section className='flex flex-col-reverse desktop:flex-row justify-between gap-10 pb-20 pt-12'>
                <div className='flex flex-col-reverse items-center desktop:items-start desktop:flex-row-reverse px-28 mobile:px-4 desktop:px-0 pt-20 justify-between gap-20'>
                    <div className='flex flex-col gap-2 items-center desktop:items-start desktop:justify-start'>
                        <div className='text-h14 tracking-2.7 font-barl text-purple'>THE TERMINOLOGY…</div>
                        <Heading text={name} level={'3'}/>
                        <BodyText addClass={'desktop:w-[60%] text-center desktop:text-left'} text={description}/>
                    </div>
                    <div className='flex desktop:flex-col justify-start gap-8 dots'>
                        <NavLink
                            to='/technology/launch-vehicle'
                            className={({isActive}) => isActive ? (tabClasses + ' techTabActive') : tabClasses}
                            >
                            1
                        </NavLink>
                        <NavLink
                            to='/technology/spaceport'
                            className={({isActive}) => isActive ? (tabClasses + ' techTabActive') : tabClasses}
                            >
                            2
                        </NavLink>
                        <NavLink
                            to='/technology/space-capsule'
                            className={({isActive}) => isActive ? (tabClasses + ' techTabActive') : tabClasses}
                            >
                            3
                        </NavLink>
                    </div>
                </div>
                <div className='basis-full desktop:max-w-[500px] desktop:max-h-[500px]'>
                    <TechImage image={name}/>
                </div>
            </section>
        </div>
    )
}

export default Technology;