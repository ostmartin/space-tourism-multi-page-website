import { useState } from 'react';

import Navigation from './Navigation';
import Background from './Background';
import Home from '../home/Home';
import Destination from '../destination/Destination';
import Crew from '../crew/Crew';
import Technology from '../technology/Technology';

import styles from './styles/mainPage.module.scss';
import Logo from '../../assets/shared/logo';

const MainPage = () => {
    const [curTab, setCurTab] = useState('Home');
    
    const onChangeCurrentTab = (tab) => {
        setCurTab(tab);
    }

    return (
        <div className={styles.mainContainer}
            >
            <Background image={curTab}/>
            <div className={styles.header}>
                <div className={styles.logo}>
                    <a href="#">
                        <Logo/>
                    </a>
                </div>
                <Navigation onChangeCurrentTab={onChangeCurrentTab} curTab={curTab}/>
            </div>
            <Home/>
            {/* <Destination/> */}
            {/* <Crew/> */}
            {/* <Technology/> */}
        </div>
    )
}

export default MainPage;