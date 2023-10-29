import {
    ExploreButton,
    Heading,
    BodyText
} from '../../ui';

const Home = () => {
    return (
        <div className='flex flex-col px-40 pt-60 items-center desktop:flex-row desktop:items-start'>
            <div className='w-[60%]'>
                <Heading text={'So, you want to travel to'} level={'5'}/>
                <Heading text={'Space'} level={'1'}/>
                <BodyText addClass={'w-[60%] m-w-full'} text={'Let’s face it; if you want to go to space, you might as well genuinely go to outer space and not hover kind of on the edge of it. Well sit back, and relax because we’ll give you a truly out of this world experience!'}/>
            </div>
            <div>
                <ExploreButton addClass='translate-x-[70%] translate-y-[50%]' />
            </div>
        </div>
    )
}

export default Home;