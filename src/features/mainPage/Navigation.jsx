import { v4 as uuidv4 } from 'uuid';

import styles from './styles/navigation.module.scss';

const Navigation = ({onChangeCurrentTab, curTab}) => {

    const tabs = ['Home', 'Destination', 'Crew', 'Technology'];

    const renderItems = (tabsArr) => {
        return (
            <ul className={styles.navList}>
                {tabsArr.map((tab, i) => {
                    return (
                        <li key={uuidv4()}
                            className={curTab === tab ? styles.navItemActive : styles.navItem}
                            onClick={() => onChangeCurrentTab(tab)}
                        >
                            <span>{'0' + i}</span>
                            {tab}
                        </li>
                    )
                })}
            </ul>
        )
    }

    return (
        <div className={styles.nav}>
            {renderItems(tabs)}
        </div>
    )
}

export default Navigation;