import React from 'react';
import { createUseStyles } from 'react-jss';

type Props = {
    title: string,
    color: 'red' | 'transparent'
};

const useStyles = createUseStyles({
    button: {
        fontSize: 18,
        border: 'none',
        borderRadius: 5,
        textTransform: 'uppercase',
        cursor: 'pointer',
        padding: 15
    },
    red: {
        color: '#ffffff',
        backgroundColor: '#f65261',
    },
    transparent: {
        backgroundColor: 'rgba(85, 85, 85, 0.8)',
        color: '#f65261'
    }
});

export const Button = ({ title, color }: Props): JSX.Element => {
    const classes = useStyles();
    return (
        <button className={`${classes.button} ${classes[color]}`}>{title}</button>
    )
}
