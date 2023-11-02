import VehiclePortrait from './images/image-launch-vehicle-portrait.jpg';
import VehicleLandscape from './images/image-launch-vehicle-landscape.jpg';

import SpaceCapsulePortrait from './images/image-space-capsule-portrait.jpg';
import SpaceCapsuleLandscape from './images/image-space-capsule-landscape.jpg';

import SpacePortPortrait from './images/image-spaceport-portrait.jpg';
import SpacePortLandscape from './images/image-spaceport-landscape.jpg';

const IMGS = {
    'Launch Vehicle': {
        portrait: VehiclePortrait,
        landscape: VehicleLandscape
    },
    'Space Capsule': {
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
            <img className='w-full' src={IMGS[image].landscape} alt={image} />
        </picture>
        
    )
}

export default TechImage;