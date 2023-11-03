import VehiclePortrait from '../assets/images/TechImages/image-launch-vehicle-portrait.jpg';
import VehicleLandscape from '../assets/images/TechImages/image-launch-vehicle-landscape.jpg';

import SpaceCapsulePortrait from '../assets/images/TechImages/image-space-capsule-portrait.jpg';
import SpaceCapsuleLandscape from '../assets/images/TechImages/image-space-capsule-landscape.jpg';

import SpacePortPortrait from '../assets/images/TechImages/image-spaceport-portrait.jpg';
import SpacePortLandscape from '../assets/images/TechImages/image-spaceport-landscape.jpg';

const IMGS = {
    'Launch vehicle': {
        portrait: VehiclePortrait,
        landscape: VehicleLandscape
    },
    'Space capsule': {
        portrait: SpaceCapsulePortrait,
        landscape: SpaceCapsuleLandscape
    },
    'Spaceport': {
        portrait: SpacePortPortrait,
        landscape: SpacePortLandscape
    }
}

const TechImage = ({image}) => {
    return (
        <picture>
            <source media="(min-width: 1024px)"
                        srcSet={`${IMGS[image].portrait}`}/>
            <img className='w-full max-h-full' src={IMGS[image].landscape} alt={image} />
        </picture>
        
    )
}

export default TechImage;