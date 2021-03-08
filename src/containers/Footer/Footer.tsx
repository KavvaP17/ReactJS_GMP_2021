import React from 'react';
import { createUseStyles } from 'react-jss';

const useStyles = createUseStyles({
    footer: {
        backgroundColor: '#555555',
        display: 'flex',
        alignItems: 'center',
        flexDirection: 'column',
        justifyContent: 'center',
        height: 70
    }
});

type Props = {
    children: JSX.Element
};

export const Footer = ({children}: Props): JSX.Element => {
    const classes = useStyles();
    return (
        <div className={classes.footer}>
            {children}
        </div>
    )
}
