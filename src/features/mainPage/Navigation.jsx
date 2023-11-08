import { useState } from 'react';
import { NavLink } from 'react-router-dom';

import './styles/navigation.scss';
import IconHumburger from '../../assets/shared/icon-hamburger';
import IconClose from '../../assets/shared/icon-close';

const Navigation = ({onChangeCurrentTab}) => {
    const [menuOpen, setMenuOpen] = useState(false);

    const toggleBurgerMenu = () => {
        setMenuOpen(!menuOpen);
        document.body.classList.toggle('handleOverflow');
    }

    const tabs = ['', 'destination', 'crew', 'technology'];

    const classes = 'flex gap-2 py-9 px-5 text-h16 tracking-2.7 font-barl text-light uppercase cursor-pointer relative afterTab'

    return (
        <div className='nav container h-full w-fit tablet:relative z-10'>
            <ul className={'flex w-full px-8 bg-light/[0.04] backdrop-blur-2xl desktop:px-28 z-20 menu' + (menuOpen ? ' show' : '')}>
                <li>
                    <NavLink 
                        to='/'
                        className={({isActive, isPending}) => isActive ? (classes + ' active') : classes} 
                        onClick={() => {
                            onChangeCurrentTab('home');
                            setMenuOpen(false);
                            document.body.classList.remove('handleOverflow');
                        }}>
                        <span className="font-bold hidden mobile:block desktop:block">00</span>
                        home
                    </NavLink>
                </li>
                <li>
                    <NavLink 
                        to='/destination/moon'
                        className={({isActive, isPending}) => isActive ? (classes + ' active') : classes} 
                        onClick={() => {
                            onChangeCurrentTab('destination');
                            setMenuOpen(false);
                            document.body.classList.remove('handleOverflow');
                        }}>
                        <span className="font-bold hidden mobile:block desktop:block">01</span>
                        destination
                    </NavLink>
                </li>
                <li>
                    <NavLink 
                        to='/crew/douglas-hurley'
                        className={({isActive, isPending}) => isActive ? (classes + ' active') : classes} 
                        onClick={() => {
                            onChangeCurrentTab('crew');
                            setMenuOpen(false);
                            document.body.classList.remove('handleOverflow');
                        }}>
                        <span className="font-bold hidden mobile:block desktop:block">02</span>
                        crew
                    </NavLink>
                </li>
                <li>
                    <NavLink 
                        to='/technology/launch-vehicle'
                        className={({isActive, isPending}) => isActive ? (classes + ' active') : classes} 
                        onClick={() => {
                            onChangeCurrentTab('technology');
                            setMenuOpen(false);
                            document.body.classList.remove('handleOverflow');
                        }}>
                        <span className="font-bold hidden mobile:block desktop:block">03</span>
                        technology
                    </NavLink>
                </li>
            </ul>
            <div 
                onClick={toggleBurgerMenu}
                className={menuOpen ? 'tablet:hidden pe-6 mobile:bg relative z-50 hide' : 'mobile:block hidden pe-6 mobile:bg relative z-50'}>
                <IconHumburger/>
            </div>
            <div 
                onClick={toggleBurgerMenu}
                className={menuOpen ? 'tablet:hidden pe-6 mobile:bg relative z-50 show' : 'tablet:hidden pe-6 mobile:bg relative z-50 hide'}>
                <IconClose/>
            </div>
        </div>
    )
}

export default Navigation;