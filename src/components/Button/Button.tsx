import React from 'react';
import { createUseStyles } from 'react-jss';

type Props = {
    title: string,
    color: 'red' | 'transparent' | 'redText',
    type?: 'button' | 'submit' | 'reset' | undefined
    clickHandler?: () => void
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
        width: '100%'
    },
    transparent: {
        backgroundColor: 'rgba(85, 85, 85, 0.8)',
        color: '#f65261'
    },
    redText: {
        color: '#f65261',
        backgroundColor: 'inherit',
        border: '1px solid #f65261',
        boxSizing: 'border-box',
        width: '100%'
    }
});

export const Button = ({ title, color, clickHandler, type = 'button'}: Props): JSX.Element => {
    const styles = useStyles();
    return (
        <button className={`${styles.button} ${styles[color]}`} onClick={clickHandler} type={type}>{title}</button>
    )
}
