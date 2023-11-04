import { useCallback, useState } from 'react';

import Navigation from './Navigation';
import Background from '../../ui/Background';
import Home from '../home/Home';
import Destination from '../destination/Destination';
import Crew from '../crew/Crew';
import Technology from '../technology/Technology';

import Logo from '../../assets/shared/logo';

const ViewContent = ({component, onClickHandler}) => {
    switch (component) {
        case 'Home': 
            return <Home onClick={onClickHandler}/>;
        case 'Destination':
            return <Destination/>;
        case 'Crew':
            return <Crew/>;
        case 'Technology':
            return <Technology/>;
        default:
            return (
                <div className='text-light text-h56 text-center m-auto'>Something went wrong...</div>
            )
    }
}

const MainPage = () => {
    const [curTab, setCurTab] = useState('Home');
    
    const onChangeCurrentTab = useCallback((tab) => {
        setCurTab(tab);
    }, [curTab])

    return (
        <div className='container min-w-full min-h-full flex flex-col relative z-10 handleOverflow'
            >
            <Background image={curTab}/>
            <div className='container w-full flex flex-row justify-between items-center desktop:pt-10 mobile:pt-10 max-w-[1440px] mx-auto relative'>
                <div className='ps-6 mobile:scale-75 tablet:ps-8 desktop:ps-14 flex justify-center flex-col'>
                    <a href="#">
                        <Logo/>
                    </a>
                </div>
                <Navigation onChangeCurrentTab={onChangeCurrentTab} curTab={curTab}/>
            </div>
            <ViewContent component={curTab} onClickHandler={onChangeCurrentTab}/>
        </div>
    )
}

export default MainPage;