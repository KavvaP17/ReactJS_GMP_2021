import React, { useState } from 'react';
import { createStyles, makeStyles, withStyles, Theme } from '@material-ui/core/styles';
import FormControl from '@material-ui/core/FormControl';
import NativeSelect from '@material-ui/core/NativeSelect';
import InputBase from '@material-ui/core/InputBase';

type Option = {
    key: string,
    value: string
}

type Props = {
    options: Option[],
    placeholder?: string,
    selectedValue?: string
}

const BootstrapInput = withStyles((theme: Theme) =>
    createStyles({
        root: {
            'label + &': {
                marginTop: theme.spacing(3),
            },
            '& .MuiNativeSelect-select:focus': {
                backgroundColor: '#555555',
                borderRadius: '5px',
            },
            '& .MuiNativeSelect-icon': {
                color: '#f65261',
                right: 10
            },
            '& .MuiNativeSelect-select option': {
                backgroundColor: '#424242',
            }
        },
        input: {
            borderRadius: 5,
            position: 'relative',
            backgroundColor: '#555555',
            color: '#ffffff',
            fontSize: 16,
            padding: '10px 26px 10px 12px',
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
        },
        options: {
            backgroundColor: '#555555',
        }
    }),
);

export const CustomizedSelect = ({ options, placeholder, selectedValue }: Props): JSX.Element => {
    const styles = useStyles();
    const [value, setValue] = useState<string>('');
    if (selectedValue) {
        setValue(selectedValue);
    }
    const handleChange = (event: React.ChangeEvent<{ value: unknown }>) => {
        setValue(event.target.value as string);
    };

    return (
        <div>
            <FormControl className={styles.formControl}>
                <NativeSelect
                    value={value}
                    onChange={handleChange}
                    input={<BootstrapInput/>}
                >
                    <option value='' disabled>
                        {placeholder}
                    </option>
                    {options.map((option) => (
                        <option key={option.key} value={option.key}>
                            {option.value}
                        </option>
                    ))}
                </NativeSelect>
            </FormControl>
        </div>
    );
}
