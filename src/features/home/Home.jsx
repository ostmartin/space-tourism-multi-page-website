import {
    ExploreButton,
    Heading,
    BodyText
} from '../../ui';

const Home = () => {
    return (
        <div className='flex flex-col mobile:pt-10 mobile:gap-20 tablet:pt-20 tablet:gap-40 desktop:px-24 desktop:pt-60 items-center desktop:flex-row desktop:items-start max-w-[1440px] xxl:mx-auto'>
            <div className='text-center w-full mobile:px-10 tablet:px-20 desktop:w-[60%] desktop:text-left'>
                <Heading text={'So, you want to travel to'} level={'5'}/>
                <Heading text={'Space'} level={'1'}/>
                <BodyText addClass={'desktop:w-[60%]'} text={'Let’s face it; if you want to go to space, you might as well genuinely go to outer space and not hover kind of on the edge of it. Well sit back, and relax because we’ll give you a truly out of this world experience!'}/>
            </div>
            <div className='desktop:pt-28 tablet:pb-20 desktop:pb-0'>
                <ExploreButton/>
            </div>
        </div>
    )
}

export default Home;