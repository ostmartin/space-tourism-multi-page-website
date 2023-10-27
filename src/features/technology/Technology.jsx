import styles from './styles/technology.module.scss';
import Vehicle from './images/image-launch-vehicle-portrait.jpg';

const Technology = () => {
    return (
        <div className={styles.techContainer}>
            <div className={styles['heading-5']}>
                <span>03</span>
                space launch 101
            </div>
            <section className={styles.techContant}>
                <div className={styles.techTabs}>
                    <div className={styles.techTabsDescription}>
                        <div className={styles['nav-text']}>THE TERMINOLOGY…</div>
                        <div className={styles['heading-3']}>LAUNCH VEHICLE</div>
                        <div className={styles['body-text']}>A launch vehicle or carrier rocket is a rocket-propelled vehicle used to carry a payload from Earth's surface to space, usually to Earth orbit or beyond. Our WEB-X carrier rocket is the most powerful in operation. Standing 150 metres tall, it's quite an awe-inspiring sight on the launch pad!</div>
                    </div>
                    <div className={styles.techTabsDots}>
                        <span>1</span>
                        <span>2</span>
                        <span>3</span>
                    </div>
                </div>
                <div className={styles.techImage}>
                    <img src={Vehicle} alt="Launch vehicle" />
                </div>
            </section>
        </div>
    )
}

export default Technology;