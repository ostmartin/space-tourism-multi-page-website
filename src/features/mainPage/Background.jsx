import './styles/background.scss';

import HomeDesktop from './backgroundImages/home/background-home-desktop.jpg';
import HomeTablet from './backgroundImages/home/background-home-tablet.jpg';
import HomeMobile from './backgroundImages/home/background-home-mobile.jpg';

import DestinationDesktop from './backgroundImages/destination/background-destination-desktop.jpg';
import DestinationTablet from './backgroundImages/destination/background-destination-tablet.jpg';
import DestinationMobile from './backgroundImages/destination/background-destination-mobile.jpg';

import CrewDesktop from './backgroundImages/crew/background-crew-desktop.jpg';
import CrewTablet from './backgroundImages/crew/background-crew-tablet.jpg';
import CrewMobile from './backgroundImages/crew/background-crew-mobile.jpg';

import TechnologyDesktop from './backgroundImages/technology/background-technology-desktop.jpg';
import TechnologyTablet from './backgroundImages/technology/background-technology-tablet.jpg';
import TechnologyMobile from './backgroundImages/technology/background-technology-mobile.jpg';

const BG_IMGS = {
    'Home': {
        desktop: HomeDesktop,
        tablet: HomeTablet,
        mobile: HomeMobile
    },
    'Destination': {
        desktop: DestinationDesktop,
        tablet: DestinationTablet,
        mobile: DestinationMobile
    },
    'Crew': {
        desktop: CrewDesktop,
        tablet: CrewTablet,
        mobile: CrewMobile
    },
    'Technology': {
        desktop: TechnologyDesktop,
        tablet: TechnologyTablet,
        mobile: TechnologyMobile
    }
}

const Background = ({image}) => {
    return (
        <div className="absolute w-full h-full -z-10">
            <picture>
                <source media="(min-width: 1440px)"
                        srcSet={`${BG_IMGS[image].desktop} 1440w`}/>
                <source media="(min-width: 421px)"
                        srcSet={`${BG_IMGS[image].tablet} 768w`}/>
                <img src={BG_IMGS[image].mobile} alt="background"/>
            </picture>
        </div>
    )
}

export default Background;