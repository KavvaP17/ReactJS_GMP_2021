import React, { useState } from 'react';
import { createUseStyles } from 'react-jss';

type Props = {
    type: 'search' | 'default'
    placeholder?: string,
    value?: string
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

export const Input = ({ type, placeholder, value }: Props): JSX.Element => {
    const styles = useStyles();
    const [inputValue, setInputValue] = useState(value);

    const handleInputValueChange = (event: React.ChangeEvent<{ value: string }>) => {
        setInputValue(event.target.value as string);
    };

    return (
        <input className={`${styles.input} ${styles[type]}`} placeholder={placeholder}
            value={inputValue}
            onChange={handleInputValueChange}/>
    )
}
