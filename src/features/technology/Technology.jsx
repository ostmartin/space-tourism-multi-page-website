import { Heading, BodyText, TechTab, TechImage } from '../../ui';

const Technology = () => {

    return (
        <div className='desktop:ps-40 max-w-[1440px] pt-10 desktop:pt-20 xxl:mx-auto'>
            <div className='heading-5 desktop:text-h28 mobile:text-center text-[#fff!important] tablet:text-left mobile:text-[16px] tablet:text-[20px]'>
                <span className='font-bold opacity-[0.25] pe-4'>03</span>
                space launch 101
            </div>
            <section className='flex flex-col-reverse desktop:flex-row justify-between gap-10 pb-20 pt-16'>
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