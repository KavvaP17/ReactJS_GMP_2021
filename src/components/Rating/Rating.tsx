import React from 'react';
import { createUseStyles } from 'react-jss';

type Props = {
    vote: number | undefined
}

const useStyles = createUseStyles({
    rating: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        width: 60,
        height: 60,
        borderRadius: '50%',
        border: '2px #555555 solid',
        color: '#34bd34',
        fontSize: 24
    }

});


export const Rating = ({ vote }: Props): JSX.Element => {
    const styles = useStyles();

    return (
        <div className={styles.rating}>
            {vote}
        </div>
    )
}
