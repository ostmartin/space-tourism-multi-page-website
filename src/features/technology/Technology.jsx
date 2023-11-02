import { Heading, BodyText } from '../../ui';

import Vehicle from './images/image-launch-vehicle-portrait.jpg';

const Technology = () => {

    const tabsClasses = 'heading-4 h-[40px] w-[40px] rounded-full bg-opacity-0 border-light/25 border-solid border-[1px] flex justify-center items-center tablet:w-[60px] tablet:h-[60px] desktop:w-[80px] desktop:h-[80px] hover:border-light/100';

    return (
        <div className='ps-40 max-w-[1440px] xxl:mx-auto'>
            <div className='heading-5 pt-20 pb-10 text-[#fff!important] text-center tablet:text-left'>
                <span className='font-bold opacity-[0.25] pe-4'>03</span>
                space launch 101
            </div>
            <section className='flex flex-row justify-between gap-10 pb-20'>
                <div className='flex shrink flex-row-reverse pt-20 justify-between gap-20'>
                    <div className='flex flex-col gap-2 justify-start'>
                        <div className='text-h14 tracking-2.7 font-barl text-purple'>THE TERMINOLOGY…</div>
                        <Heading text={'LAUNCH VEHICLE'} level={'3'}/>
                        <BodyText addClass={'desktop:w-[60%]'} text={"A launch vehicle or carrier rocket is a rocket-propelled vehicle used to carry a payload from Earth's surface to space, usually to Earth orbit or beyond. Our WEB-X carrier rocket is the most powerful in operation. Standing 150 metres tall, it's quite an awe-inspiring sight on the launch pad!"}/>
                    </div>
                    <div className='flex flex-col justify-start gap-8 dots'>
                        <span className={`${tabsClasses} tabActive`}>1</span>
                        <span className={`${tabsClasses}`}>2</span>
                        <span className={`${tabsClasses}`}>3</span>
                    </div>
                </div>
                <div className='basis-full'>
                    <img className='w-full' src={Vehicle} alt="Launch vehicle" />
                </div>
            </section>
        </div>
    )
}

export default Technology;