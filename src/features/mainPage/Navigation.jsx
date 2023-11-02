import { v4 as uuidv4 } from 'uuid';
import { Tab } from '../../ui';

import './styles/navigation.scss';
import IconHumburger from '../../assets/shared/icon-hamburger';
import IconClose from '../../assets/shared/icon-close';

const Navigation = ({onChangeCurrentTab, curTab}) => {

    const tabs = ['Home', 'Destination', 'Crew', 'Technology'];

    const renderItems = (tabsArr) => {
        return (
            <ul className='flex w-full px-8 bg-light/[0.04] backdrop-blur-2xl desktop:px-28 mobile:hidden relative z-20'>
                {tabsArr.map((tab, i) => {
                    return (
                        <Tab
                            key={uuidv4()}
                            text={tab}
                            isNavTab={true}
                            index={i}
                            onTabClick={() => onChangeCurrentTab(tab)}
                            addClass={curTab === tab ? 'active' : ''}
                        />
                    )
                })}
            </ul>
        )
    }

    return (
        <div className='nav container h-full w-fit relative z-10'>
            {renderItems(tabs)}
            <div className='mobile:block hidden pe-6 mobile:bg relative z-50'>
                <IconHumburger/>
                {/* <IconClose/> */}
            </div>
        </div>
    )
}

export default Navigation;