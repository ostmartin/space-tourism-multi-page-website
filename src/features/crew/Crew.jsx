import { Heading, BodyText } from '../../ui';

import Commander from './images/image-douglas-hurley.png';

const Crew = () => {
    return (
        <div className='px-6 tablet:px-8 desktop:px-40 pt-10 desktop:pt-20 max-w-[1440px] xxl:mx-auto'>
            <div className='heading-5 mobile:text-center text-[#fff!important] tablet:text-left mobile:text-[16px] tablet:text-[20px]'>
                <span className='font-bold opacity-[0.25] pe-4'>02</span>
                meet your crew
            </div>
            <section className='flex flex-col pt-10 mobile:flex-col-reverse justify-between desktop:flex-row desktop:pt-0'>
                <div className='pt-10 flex flex-col justify-around text-center items-center desktop:items-start gap-12 desktop:text-left desktop:w-[45%] pb-20 desktop:pt-28'>
                    <div className='mobile:order-2'>
                        <Heading text={'commander'} level={'4'} addClass='opacity-50'/>
                        <Heading text={'douglas hurley'} level={'3'}/>
                        <BodyText addClass={'mobile:text-[15px] tablet:w-[70%] mx-auto desktop:mx-0'} text={'Douglas Gerald Hurley is an American engineer, former Marine Corps pilot and former NASA astronaut. He launched into space for the third time as commander of Crew Dragon Demo-2.'}/>
                    </div>
                    <div className='flex flex-row gap-8 w-fit'>
                        <span className='h-4 w-4 rounded-full bg-[#fff] opacity-[0.174363] block hover:opacity-50 active'></span>
                        <span className='h-4 w-4 rounded-full bg-[#fff] opacity-[0.174363] block hover:opacity-50'></span>
                        <span className='h-4 w-4 rounded-full bg-[#fff] opacity-[0.174363] block hover:opacity-50'></span>
                        <span className='h-4 w-4 rounded-full bg-[#fff] opacity-[0.174363] block hover:opacity-50'></span>
                    </div>
                </div>
                <div className='mobile:border-b-grey mobile:border-b-[1px] desktop:w-[45%]'>
                    <img className='mx-auto h-full max-w-[70%] tablet:max-w-full' src={Commander} alt="Douglas Hurley" />
                </div>
            </section>
        </div>
    )
}

export default Crew;