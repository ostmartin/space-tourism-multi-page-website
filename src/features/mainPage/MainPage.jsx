import Navigation from './Navigation';
import Home from '../home/Home';

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
            <div className="content-section">
                <Home/>
            </div>
        </div>
    )
}

export default MainPage;