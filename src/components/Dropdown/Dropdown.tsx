import React from 'react';
import { createUseStyles } from 'react-jss';

type Option = {
    title: string
}
type Props = {
    options: Option[]
};

const useStyles = createUseStyles({
    dropdown: {
        minWidth: 190,
        border: 'none',
        backgroundColor: '#232323',
        color: '#ffffff',
        textTransform: 'uppercase',
        fontSize: 18,
        margin: '5px 0 5px 20px',
        padding: 10,
        cursor: 'pointer'
    }
})

export const Dropdown = ({ options }: Props): JSX.Element => {
    const styles = useStyles();
    return (
        <select className={styles.dropdown}>
            {options.map((option, index) => (
                <option key={index} value={option.title}>
                    {option.title}
                </option>
            ))}
        </select>
    )
}
