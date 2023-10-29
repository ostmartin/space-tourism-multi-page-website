import {
    ExploreButton,
    Heading,
    BodyText
} from '../../ui';

const Home = () => {
    return (
        <div className='flex flex-col tablet:pt-40 tablet:gap-40 desktop:px-40 desktop:pt-60 items-center desktop:flex-row desktop:items-start'>
            <div className='text-center w-full mobile:px-10 tablet:px-20 desktop:w-[60%] desktop:text-left'>
                <Heading text={'So, you want to travel to'} level={'5'}/>
                <Heading text={'Space'} level={'1'}/>
                <BodyText addClass={'desktop:w-[60%]'} text={'Let’s face it; if you want to go to space, you might as well genuinely go to outer space and not hover kind of on the edge of it. Well sit back, and relax because we’ll give you a truly out of this world experience!'}/>
            </div>
            <div>
                <ExploreButton addClass='desktop:translate-x-[70%] desktop:translate-y-[30%]' />
            </div>
        </div>
    )
}

export default Home;