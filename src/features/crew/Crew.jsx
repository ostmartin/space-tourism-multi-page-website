import { Heading, BodyText, Dots } from '../../ui';

import DATA from '../../data.json';
import { getData, capitalizeFirstLetter } from '../../service';

import Commander from '../../assets/images/crew/image-douglas-hurley.png';
import Specialist from '../../assets/images/crew/image-mark-shuttleworth.png';
import Pilot from '../../assets/images/crew/image-victor-glover.png';
import Engineer from '../../assets/images/crew/image-anousheh-ansari.png';
import { useLoaderData } from 'react-router-dom';

const CREW_IMGS = {
    'Douglas Hurley': Commander,
    'Mark Shuttleworth': Specialist,
    'Victor Glover': Pilot,
    'Anousheh Ansari': Engineer
}

export const loader = async ({params}) => {
    const item = params.memberId.split('-').map(word => capitalizeFirstLetter(word)).join(' ')
    
    return getData(item, 'crew');
}

const Crew = () => {
    const currentMember = useLoaderData();

    const crewList = DATA.crew.map(member => member.name);

    if (!currentMember) {
        return (
            <div className='text-center text-light font-barl text-h32 m-auto'>You seem to be the only one here...</div>
        )
    }

    const {name, role, bio} = currentMember;

    return (
        <div className='px-6 tablet:px-8 desktop:ps-40 pt-10 desktop:pt-20 max-w-[1440px] xxl:mx-auto'>
            <div className='heading-5 desktop:text-h28 mobile:text-center text-[#fff!important] tablet:text-left mobile:text-[16px] tablet:text-[20px]'>
                <span className='font-bold opacity-[0.25] pe-4'>02</span>
                meet your crew
            </div>
            <section className='flex flex-col pt-12 mobile:flex-col-reverse justify-between desktop:flex-row desktop:pt-0 desktop:h-[645px]'>
                <div className='pt-10 flex flex-col justify-between desktop:justify-around text-center items-center tablet:h-[380px] desktop:items-start gap-12 desktop:text-left desktop:max-w-[50%] pb-20 desktop:pt-28 desktop:h-full'>
                    <div className='mobile:order-2 desktop:min-h-[340px]'>
                        <Heading text={role} level={'4'} addClass='opacity-50'/>
                        <Heading text={name} level={'3'}/>
                        <BodyText addClass={'mobile:text-[15px] tablet:max-w-[70%] mx-auto desktop:mx-0'} text={bio}/>
                    </div>
                    <div className='flex flex-row gap-8 w-fit'>
                        <Dots count={4} itemsList={crewList} current={currentMember.name}/>
                    </div>
                </div>
                <div className='mobile:border-b-grey mobile:border-b-[1px] mobile:h-[310px] desktop:w-1/2 mobile:flex mobile:items-end'>
                    <img className='mx-auto max-h-full mobile:min-h-[80%] mobile:max-w-[65%] tablet:max-w-full tablet:min-h-[700px] desktop:min-h-[auto]' src={CREW_IMGS[name]} alt={name} />
                </div>
            </section>
        </div>
    )
}

export default Crew;