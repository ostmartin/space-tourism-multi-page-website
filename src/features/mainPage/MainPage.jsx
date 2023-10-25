import Navigation from './Navigation';

import styles from './styles/mainPage.module.scss';
import Logo from '../../assets/shared/logo';

const MainPage = () => {
    return (
        <div className={styles.mainContainer}>
            <div className={styles.header}>
                <div className={styles.logo}>
                    <a href="#">
                        <Logo/>
                    </a>
                </div>
                <Navigation/>
            </div>
            <div className="content-section"></div>
        </div>
    )
}

export default MainPage;