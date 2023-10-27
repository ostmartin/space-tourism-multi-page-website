import styles from './styles/crew.module.scss';
import Commander from './images/image-douglas-hurley.png';

const Crew = () => {
    return (
        <div className={styles.crewContainer}>
            <section className={styles.crewContant}>
                <div className={styles.crewTabs}>
                    <div className={styles['heading-5']}>
                        <span>02</span>
                        meet your crew
                    </div>
                    <div className={styles.crewTabsDescription}>
                        <div className={styles['heading-4']}>commander</div>
                        <div className={styles['heading-3']}>douglas hurley</div>
                        <div className={styles['body-text']}>Douglas Gerald Hurley is an American engineer, former Marine Corps pilot and former NASA astronaut. He launched into space for the third time as commander of Crew Dragon Demo-2.</div>
                    </div>
                    <div className={styles.crewTabsDots}>
                        <span></span><span></span><span></span><span></span>
                    </div>
                </div>
                <div className={styles.crewMember}>
                    <img src={Commander} alt="Douglas Hurley" />
                </div>
            </section>
        </div>
    )
}

export default Crew;