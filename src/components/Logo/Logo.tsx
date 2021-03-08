import React from 'react';
import { createUseStyles } from 'react-jss';

const useStyles = createUseStyles({
    logo: {
        color: '#f65261',
        fontSize: 24
    },
    logoBold: {
        fontWeight: 'bold'
    }
})

export const Logo = (): JSX.Element => {
    const classes = useStyles();
    return (
        <div className={classes.logo}>
            <span className={classes.logoBold}>netflix</span>
            <span>roulette</span>
        </div>
    )
}
