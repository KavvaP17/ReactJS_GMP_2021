import React, { useEffect, useState } from 'react';
import { createStyles, makeStyles, Theme, withStyles } from '@material-ui/core/styles';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import Chip from '@material-ui/core/Chip';
import MenuItem from '@material-ui/core/MenuItem';
import InputBase from '@material-ui/core/InputBase';

type Option = {
    key: string,
    value: string
}

type Props = {
    name: string,
    options: Option[],
    placeholder?: string,
    values?: string[],
    changeHandler: (values: string[]) => void
};

const Input = withStyles((theme: Theme) =>
    createStyles({
        root: {
            'label + &': {
                marginTop: theme.spacing(3),
            },
            '& .MuiSelect-select:focus': {
                backgroundColor: '#555555',
                borderRadius: '5px',
            },
            '& .MuiSelect-icon': {
                color: '#f65261',
                right: 10
            },
            '& .MuiMenu-list': {
                backgroundColor: '#424242',
            }
        },
        input: {
            borderRadius: 5,
            position: 'relative',
            backgroundColor: '#555555',
            color: '#ffffff',
            fontSize: 16,
            padding: '7px 26px 7px 7px',
            height: 50,
            boxSizing: 'border-box'
        },

    }),
)(InputBase);

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        formControl: {
            margin: theme.spacing(0),
            width: '100%',
            backgroundColor: '#555555',
            borderRadius: 5,
            minHeight: 50
        },
        chips: {
            display: 'flex',
            flexWrap: 'wrap',
        },
        chip: {
            margin: 2,
        }
    }),
);

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
    PaperProps: {
        style: {
            maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
            width: 250,
        },
    },
};

export const MultiSelect = ({ name, options, placeholder, values, changeHandler }: Props): JSX.Element => {
    const styles = useStyles();
    const [selectedValues, setSelectedValues] = useState<string[]>(values || []);

    const handleChange = (event: React.ChangeEvent<{ value: string[] }>) => {
        const targetValue = event.target.value;
        changeHandler(targetValue);
    };

    useEffect(() => {
        setSelectedValues(values || []);
    }, [values]);

    return (
        <FormControl className={styles.formControl}>
            <Select
                multiple
                value={selectedValues}
                onChange={handleChange}
                input={<Input placeholder={placeholder} name={name}/>}
                renderValue={() => (
                    <div className={styles.chips}>
                        {(selectedValues as string[]).map((value) => (
                            <Chip key={value} label={value} className={styles.chip} />
                        ))}
                    </div>
                )}
                MenuProps={MenuProps}
            >
                {options.map((option) => (
                    <MenuItem key={option.key} value={option.value}>
                        {option.value}
                    </MenuItem>
                ))}
            </Select>
        </FormControl>
    );
}
