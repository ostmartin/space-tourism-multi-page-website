import { useCallback, useState } from 'react';

import Navigation from './Navigation';
import Background from '../../ui/Background';

import Logo from '../../assets/shared/logo';
import { Outlet, Link } from 'react-router-dom';

const MainPage = () => {
    const [curTab, setCurTab] = useState('home');
    
    const onChangeCurrentTab = useCallback((tab) => {
        setCurTab(tab);
    }, [curTab])

    return (
        <div className='container min-w-full min-h-full flex flex-col relative z-10 handleOverflow'
            >
            <Background image={curTab}/>
            <div className='container w-full flex flex-row justify-between items-center desktop:pt-10 mobile:pt-10 max-w-[1440px] mx-auto relative'>
                <div className='ps-6 mobile:scale-75 tablet:ps-8 desktop:ps-14 flex justify-center flex-col'>
                    <Link to='/' onClick={() => onChangeCurrentTab('home')}>
                        <Logo/>
                    </Link>
                </div>
                <Navigation onChangeCurrentTab={onChangeCurrentTab} curTab={curTab}/>
            </div>
            <Outlet context={onChangeCurrentTab}/>
        </div>
    )
}

export default MainPage;