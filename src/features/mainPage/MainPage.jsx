import { useState } from 'react';

import Navigation from './Navigation';
import Home from '../home/Home';
import Destination from '../destination/Destination';
import Crew from '../crew/Crew';

// import BackgroundHome from '../home/images/background-home-desktop.jpg';
// import BackgroundDestination from '../destination/images/background-destination-desktop.jpg';
// import BackgroundCrew from '../crew/images/background-crew-desktop.jpg';
// import BackgroundTechnology from '../technology/images/background-technology-desktop.jpg';

import styles from './styles/mainPage.module.scss';
import Logo from '../../assets/shared/logo';

const MainPage = () => {
    return (
        <div className={styles.mainContainer}>
            <div className={styles.header}>
                <div className={styles.logo}>
                    <a href="#">
                        <Logo/>
                    </a>
                </div>
                <Navigation/>
            </div>
            {/* <div className="content-section"> */}
                {/* <Home/> */}
                {/* <Destination/> */}
                <Crew/>
            {/* </div> */}
        </div>
    )
}

export default MainPage;