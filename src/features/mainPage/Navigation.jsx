import { v4 as uuidv4 } from 'uuid';
import { Tab } from '../../ui';

import './styles/navigation.scss';

const Navigation = ({onChangeCurrentTab, curTab}) => {

    const tabs = ['Home', 'Destination', 'Crew', 'Technology'];

    const renderItems = (tabsArr) => {
        return (
            <ul className='flex w-full px-28'>
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
        <div className='nav'>
            {renderItems(tabs)}
        </div>
    )
}

export default Navigation;