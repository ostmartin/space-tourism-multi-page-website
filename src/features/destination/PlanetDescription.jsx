import { Heading, SubHeading, BodyText } from "../../ui";

const PlanetDescription = ({name, description, distance, travel}) => {
    return (
        <div className='text-center flex flex-col justify-between desktop:text-left tablet:min-h-[340px] desktop:min-h-[375px]'>
            <Heading text={name} level={'2'}/>
            <BodyText addClass={'pb-10 pe-4 mobile:min-h-[175px]'} text={description}/>
            <div className='flex flex-row mobile:flex-col mobile:gap-10 justify-around desktop:justify-between pt-4 border-t-[1px] border-solid border-[#383b4b]'>
                <div>
                    <SubHeading text={'avg. distance'} level={'2'}/>
                    <SubHeading text={distance} level={'1'}/>
                </div>
                <div>
                    <SubHeading text={'est. travel time'} level={'2'}/>
                    <SubHeading text={travel} level={'1'}/>                                
                </div>
            </div>
        </div>
    )
}

export default PlanetDescription;