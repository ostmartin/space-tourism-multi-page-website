import styles from './styles/navigation.module.scss';

const Navigation = () => {
    return (
        <div className={styles.nav}>
            <ul className={styles.navList}>
                <li className={styles.navItem}>
                    <span>00</span>
                    Home
                </li>
                <li className={styles.navItem}>
                    <span>01</span>
                    Destination
                </li>
                <li className={styles.navItem}>
                    <span>02</span>
                    Crew
                </li>
                <li className={styles.navItem}>
                    <span>03</span>
                    Technology
                </li>
            </ul>
        </div>
    )
}

export default Navigation;