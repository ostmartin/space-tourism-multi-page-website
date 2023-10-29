import { useState } from 'react';

import { Tab } from '../../ui';

import styles from './styles/destination.module.scss';
import Moon from './images/image-moon.png';

const Destination = () => {
    return (
        <div className={styles.destinationContainer}>
            <header>
                <div className={styles['heading-5']}>
                    <span>01</span>
                    pick your destination
                </div>
            </header>
            <section className={styles.destinationContant}>
                <div className={styles.planet}>
                    <img src={Moon} alt="Moon" />
                </div>
                <div className={styles.tabs}>
                    <ul className={styles.tabsList}>
                        <Tab text={'Moon'} addClass='active'/>
                        <Tab text={'Mars'}/>
                        <Tab text={'Europa'}/>
                        <Tab text={'Titan'}/>
                    </ul>
                    <div className={styles.tabsDescription}>
                        <div className={styles['heading-2']}>Moon</div>
                        <div className={styles['body-text']}>See our planet as you’ve never seen it before. A perfect relaxing trip away to help regain perspective and come back refreshed. While you’re there, take in some history by visiting the Luna 2 and Apollo 11 landing sites.</div>
                        <div className={styles.tabsDescriptionFooter}>
                            <div className={styles['sub-1']}>
                                <span className={styles['sub-2']}>avg. distance</span><br/>
                                384,400 km
                            </div>
                            <div className={styles['sub-1']}>
                                <span className={styles['sub-2']}>est. travel time</span><br/>
                                3 days
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Destination;