import React, { useState } from 'react';
import { createUseStyles } from 'react-jss';
import DateFnsUtils from '@date-io/date-fns';
import {
    MuiPickersUtilsProvider,
    KeyboardDatePicker,
} from '@material-ui/pickers';

type Props = {
    date?: Date,
};

const useStyles = createUseStyles({
    datePicker: {
        '&.MuiFormControl-root': {
            width: '100%',
            backgroundColor: '#555555',
            borderRadius: 5,
            height: 50

        },
        '& .MuiInput-underline:before': {
            display: 'none'
        },
        '& .MuiInput-underline:after': {
            display: 'none'
        },
        '& .MuiInputBase-input': {
            height: 50,
            color: '#ffffff',
            padding: '0 10px'
        },
        '& .MuiIconButton-label': {
            color: '#f65261'
        },
        '& .MuiDialog-scrollPaper': {
            position: 'absolute'
        }
    }
});

export const DatePickerField = ({date}: Props): JSX.Element => {
    const styles = useStyles();
    const [selectedDate, setSelectedDate] = useState<Date | null>(
        new Date()
    );

    if (date) {
        setSelectedDate(date);
    }

    const handleDateChange = (date: Date | null) => {
        setSelectedDate(date);
    };

    return (
        <MuiPickersUtilsProvider utils={DateFnsUtils}>
            <KeyboardDatePicker
                id="date-picker-dialog"
                format="MM/dd/yyyy"
                value={selectedDate}
                onChange={handleDateChange}
                KeyboardButtonProps={{
                    'aria-label': 'change date',
                }}
                className={styles.datePicker}
            />
        </MuiPickersUtilsProvider>
    )
}
