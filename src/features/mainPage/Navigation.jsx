import { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { Tab } from '../../ui';

import './styles/navigation.scss';
import IconHumburger from '../../assets/shared/icon-hamburger';
import IconClose from '../../assets/shared/icon-close';

const Navigation = ({onChangeCurrentTab, curTab}) => {
    const [menuOpen, setMenuOpen] = useState(false);

    const toggleBurgerMenu = () => {
        setMenuOpen(!menuOpen);
        document.body.classList.toggle('handleOverflow');
    }

    const tabs = ['Home', 'Destination', 'Crew', 'Technology'];

    const renderItems = (tabsArr) => {
        return (
            <ul className={'flex w-full px-8 bg-light/[0.04] backdrop-blur-2xl desktop:px-28 z-20 menu' + (menuOpen ? ' show' : '')}>
                {tabsArr.map((tab, i) => {
                    return (
                        <Tab
                            key={uuidv4()}
                            text={tab}
                            isNavTab={true}
                            index={i}
                            onTabClick={() => {
                                onChangeCurrentTab(tab);
                                setMenuOpen(false);
                            }}
                            addClass={curTab === tab ? 'active' : ''}
                        />
                    )
                })}
            </ul>
        )
    }

    return (
        <div className='nav container h-full w-fit tablet:relative z-10'>
            {renderItems(tabs)}
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