import React from 'react';
import { createUseStyles } from 'react-jss';

import { FilterBar } from '../../components/FilterBar';
import { Header } from '../../components/Header';

const useStyles = createUseStyles({
    homeConteiner: {
        backgroundColor: '#232323',
        minHeight: 'calc(100vh - 70px)'
    },
    mainWrapper: {
        backgroundColor: '#232323',
        padding: '5px 5% 20px'
    },
    contentContainer: {
        display: 'flex',
        justifyContent: 'center',
        padding: 40


    },
    messageContainer: {
        fontSize: 40,
        color: 'white'
    }
});

export const Home = (): JSX.Element => {
    const styles = useStyles();

    return (
        <div className={styles.homeConteiner}>
            <Header />
            <div className={styles.mainWrapper}>
                <FilterBar />
                <div className={styles.contentContainer}>
                    <p className={styles.messageContainer}>No Movie Found</p>
                </div>
            </div>
        </div>
    )
}

