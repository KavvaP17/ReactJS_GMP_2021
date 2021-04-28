import React from 'react';
import { createUseStyles } from 'react-jss';

type Props = {
    name: string,
    type: 'search' | 'default',
    placeholder?: string,
    value?: string | number,
    changeHandler?: (event: React.ChangeEvent<{ value: string }>) => void
};

const useStyles = createUseStyles({
    input: {
        height: 50,
        border: 'none',
        borderRadius: 5,
        padding: 10,
        width: '100%',
        color: '#ffffff',
        boxSizing: 'border-box',
        fontSize: 'inherit'
    },
    search: {
        backgroundColor: 'rgba(85, 85, 85, 0.8)',
    },
    default: {
        backgroundColor: '#555555',
    }
});

export const Input = ({ name, type, placeholder, value, changeHandler }: Props): JSX.Element => {
    const styles = useStyles();

    return (
        <input name={name}
            className={`${styles.input} ${styles[type]}`}
            placeholder={placeholder}
            value={value}
            onChange={changeHandler}/>
    )
}
