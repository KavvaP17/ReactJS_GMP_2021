import React from 'react';
import { createUseStyles } from 'react-jss';
import { Link } from 'react-router-dom';
import { Button } from '../../components/Button';
import { Logo } from '../../components/Logo';

const useStyles = createUseStyles({
    pageContainer: {
        backgroundColor: '#232323',
        minHeight: 'calc(100vh - 70px)'
    },
    topContainer: {
        padding: '20px 5%',
    },
    contentContainer: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center'
    },
    errorText: {
        color: 'white',
        fontSize: 40,
        padding: 20
    },
    errorImage:{
        width: 200
    },
    backBtn: {
        width: '30%',
        maxWidth: '240px',
        margin: 20
    }
});

export const ErrorPage = (): JSX.Element => {
    const styles = useStyles();
    return (
        <div className={styles.pageContainer}>
            <div className={styles.topContainer}>
                <Logo />
            </div>
            <div className={styles.contentContainer}>
                <p className={styles.errorText}>Page Not Found</p>
                <img className={styles.errorImage} src="static/404.png"/>
                <Link to="/" className={styles.backBtn}>
                    <Button title='go back to home' color='redText' />
                </Link>
            </div>
        </div>
    )
};

