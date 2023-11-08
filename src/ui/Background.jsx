import HomeDesktop from '../assets/images/backgroundImages/home/background-home-desktop.jpg';
import HomeTablet from '../assets/images/backgroundImages/home/background-home-tablet.jpg';
import HomeMobile from '../assets/images/backgroundImages/home/background-home-mobile.jpg';

import DestinationDesktop from '../assets/images/backgroundImages/destination/background-destination-desktop.jpg';
import DestinationTablet from '../assets/images/backgroundImages/destination/background-destination-tablet.jpg';
import DestinationMobile from '../assets/images/backgroundImages/destination/background-destination-mobile.jpg';

import CrewDesktop from '../assets/images/backgroundImages/crew/background-crew-desktop.jpg';
import CrewTablet from '../assets/images/backgroundImages/crew/background-crew-tablet.jpg';
import CrewMobile from '../assets/images/backgroundImages/crew/background-crew-mobile.jpg';

import TechnologyDesktop from '../assets/images/backgroundImages/technology/background-technology-desktop.jpg';
import TechnologyTablet from '../assets/images/backgroundImages/technology/background-technology-tablet.jpg';
import TechnologyMobile from '../assets/images/backgroundImages/technology/background-technology-mobile.jpg';

const BG_IMGS = {
    'home': {
        desktop: HomeDesktop,
        tablet: HomeTablet,
        mobile: HomeMobile
    },
    'destination': {
        desktop: DestinationDesktop,
        tablet: DestinationTablet,
        mobile: DestinationMobile
    },
    'crew': {
        desktop: CrewDesktop,
        tablet: CrewTablet,
        mobile: CrewMobile
    },
    'technology': {
        desktop: TechnologyDesktop,
        tablet: TechnologyTablet,
        mobile: TechnologyMobile
    }
}

const Background = ({image}) => {
    return (
        <div className="absolute w-full h-full -z-10">
            <picture className='h-full block'>
                <source media="(min-width: 1280px)"
                        srcSet={`${BG_IMGS[image].desktop} 1280w`}/>
                <source media="(min-width: 421px)"
                        srcSet={`${BG_IMGS[image].tablet} 768w`}/>
                <img className='w-full h-full' src={BG_IMGS[image].mobile} alt="background"/>
            </picture>
        </div>
    )
}

export default Background;