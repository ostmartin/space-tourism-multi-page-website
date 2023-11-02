import { useState } from 'react';

import Navigation from './Navigation';
import Background from '../../ui/Background';
import Home from '../home/Home';
import Destination from '../destination/Destination';
import Crew from '../crew/Crew';
import Technology from '../technology/Technology';

import Logo from '../../assets/shared/logo';

const MainPage = () => {
    const [curTab, setCurTab] = useState('Home');
    
    const onChangeCurrentTab = (tab) => {
        setCurTab(tab);
    }

    return (
        <div className='container min-w-full min-h-full flex flex-col relative z-10'
            >
            <Background image={curTab}/>
            <div className='container w-full flex flex-row justify-between desktop:pt-10 mobile:pt-10 max-w-[1440px] mx-auto'>
                <div className='ps-6 scale-75 tablet:scale-100 tablet:ps-8 desktop:ps-14 flex justify-center flex-col'>
                    <a href="#">
                        <Logo/>
                    </a>
                </div>
                <Navigation onChangeCurrentTab={onChangeCurrentTab} curTab={curTab}/>
            </div>
            {/* <Home/> */}
            {/* <Destination/> */}
            {/* <Crew/> */}
            <Technology/>
        </div>
    )
}

export default MainPage;