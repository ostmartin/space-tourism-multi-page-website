import { Heading, BodyText, TechTab } from '../../ui';
import TechImage from './TechImage';

const Technology = () => {

    return (
        <div className='desktop:ps-40 max-w-[1440px] xxl:mx-auto'>
            <div className='heading-5 mobile:text-center tablet:ps-8 pt-20 pb-10 text-[#fff!important] tablet:text-left desktop:ps-0'>
                <span className='font-bold opacity-[0.25] pe-4'>03</span>
                space launch 101
            </div>
            <section className='flex flex-col-reverse desktop:flex-row justify-between gap-10 pb-20'>
                <div className='flex shrink flex-col-reverse items-center desktop:items-start desktop:flex-row-reverse px-28 mobile:px-4 desktop:px-0 pt-20 justify-between gap-20'>
                    <div className='flex flex-col gap-2 items-center desktop:items-start desktop:justify-start'>
                        <div className='text-h14 tracking-2.7 font-barl text-purple'>THE TERMINOLOGY…</div>
                        <Heading text={'LAUNCH VEHICLE'} level={'3'}/>
                        <BodyText addClass={'desktop:w-[60%] text-center desktop:text-left'} text={"A launch vehicle or carrier rocket is a rocket-propelled vehicle used to carry a payload from Earth's surface to space, usually to Earth orbit or beyond. Our WEB-X carrier rocket is the most powerful in operation. Standing 150 metres tall, it's quite an awe-inspiring sight on the launch pad!"}/>
                    </div>
                    <div className='flex desktop:flex-col justify-start gap-8 dots'>
                        <TechTab text={'1'} addClass='tabActive'/>
                        <TechTab text={'2'}/>
                        <TechTab text={'3'}/>
                    </div>
                </div>
                <div className='basis-full'>
                    <TechImage image={'Launch Vehicle'}/>
                </div>
            </section>
        </div>
    )
}

export default Technology;