import { Heading, BodyText } from '../../ui';

import Commander from './images/image-douglas-hurley.png';

const Crew = () => {
    return (
        <div className='px-40'>
            <section className='flex flex-row justify-between pt-20'>
                <div className='flex flex-col justify-between w-[45%]'>
                    <div className='heading-5'>
                        <span className='font-bold text-[#fff] opacity-[0.25] px-4'>02</span>
                        meet your crew
                    </div>
                    <div>
                        <Heading text={'commander'} level={'4'} addClass='opacity-50'/>
                        <Heading text={'douglas hurley'} level={'3'}/>
                        <BodyText addClass={'w-[70%]'} text={'Douglas Gerald Hurley is an American engineer, former Marine Corps pilot and former NASA astronaut. He launched into space for the third time as commander of Crew Dragon Demo-2.'}/>                    </div>
                    <div className='flex flex-row gap-8 -translate-y-20'>
                        <span className='h-4 w-4 rounded-full bg-[#fff] opacity-[0.174363] block hover:opacity-50 active'></span>
                        <span className='h-4 w-4 rounded-full bg-[#fff] opacity-[0.174363] block hover:opacity-50'></span>
                        <span className='h-4 w-4 rounded-full bg-[#fff] opacity-[0.174363] block hover:opacity-50'></span>
                        <span className='h-4 w-4 rounded-full bg-[#fff] opacity-[0.174363] block hover:opacity-50'></span>
                    </div>
                </div>
                <div className='w-[45%]'>
                    <img src={Commander} alt="Douglas Hurley" />
                </div>
            </section>
        </div>
    )
}

export default Crew;