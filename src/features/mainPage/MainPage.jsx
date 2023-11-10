import Navigation from './Navigation';
import { Background } from '../../ui';

import Logo from '../../assets/shared/logo';
import { Outlet, Link, useLocation } from 'react-router-dom';

const MainPage = () => {
    const {pathname} = useLocation();
    const currentLocation = pathname.length === 1 ? 'home' : pathname.split('/')[1];

    return (
        <div className='container min-w-full min-h-full flex flex-col relative z-10 handleOverflow'
            >
            <Background image={currentLocation}/>
            <div className='container w-full flex flex-row justify-between items-center desktop:pt-10 mobile:pt-10 max-w-[1440px] mx-auto relative'>
                <div className='ps-6 mobile:scale-75 tablet:ps-8 desktop:ps-14 flex justify-center flex-col'>
                    <Link to='/'>
                        <Logo/>
                    </Link>
                </div>
                <Navigation/>
            </div>
            <Outlet/>
        </div>
    )
}

export default MainPage;