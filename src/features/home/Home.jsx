import styles from './styles/home.module.scss';

const ExploreButton = () => {
    return (
        <div className={styles.exploreBtn}>
            <span>Explore</span>
        </div>
    )
}

const Home = () => {
    return (
        <div className={styles.homeContainer}>
            <div className={styles.homePromo}>
                <div className={styles['heading-5']}>So, you want to travel to</div>
                <div className={styles['heading-1']}>Space</div>
                <div className={styles['body-text']}>
                    Let’s face it; if you want to go to space, you might as well genuinely go to outer space and not hover kind of on the edge of it. Well sit back, and relax because we’ll give you a truly out of this world experience!
                </div>
            </div>
            <div>
                <ExploreButton />
            </div>
        </div>
    )
}

export default Home;