import React from 'react';
import { createUseStyles } from 'react-jss';
import { Button } from '../Button';

const useStyles = createUseStyles({
    header: {
        fontSize: 35,
        textTransform: 'uppercase',
        color: '#ffffff',
        padding: '20px 0'

    },
    description: {
        color: '#ffffff',
        fontSize: 24,
        padding: '10px 0 40px'
    },
    actionContainer: {
        display: 'flex',
        paddingBottom: 20,
        justifyContent: 'flex-end'
    },
    confirmBtn: {
        width: 160,
    }
});

export const DeleteMovieModal = (): JSX.Element => {
    const styles = useStyles();
    return (
        <>
            <h2 className={styles.header}>delete movie</h2>
            <p className={styles.description}>
                Are you sure you want to delete this movie?
            </p>
            <div className={styles.actionContainer}>
                <div className={styles.confirmBtn}>
                    <Button color='red' title='confirm' clickHandler={()=>{console.log('delete')}}></Button>
                </div>
            </div>
        </>
    )
}
