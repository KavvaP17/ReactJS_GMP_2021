import React from 'react';
import { createUseStyles } from 'react-jss';

type Props = {
    type: 'search' | 'default'
    placeholder: string,
};

const useStyles = createUseStyles({
    input: {
        height: 30,
        border: 'none',
        borderRadius: 5,
        padding: 10,
        width: '100%',
        color: '#ffffff',
        fontSize: 24
    },
    search: {
        backgroundColor: 'rgba(85, 85, 85, 0.8)',
    },
    default: {
        backgroundColor: '#555555',
    }
});

export const Input = ({ type, placeholder }: Props): JSX.Element => {
    const styles = useStyles();
    return (
        <input className={`${styles.input} ${styles[type]}`} placeholder={placeholder}></input>
    )
}
