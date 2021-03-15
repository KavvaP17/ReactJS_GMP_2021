import React from 'react';
import { createUseStyles } from 'react-jss';
import { Button } from '../Button';
import { CustomizedSelect } from '../CustomizedSelect';
import { DatePickerField } from '../DatePickerField';
import { Input } from '../Input';

const genreOptions = [
    {
        key: '1',
        value: 'Documentary'
    },
    {
        key: '2',
        value: 'Comedy'
    },
    {
        key: '3',
        value: 'Horror'
    },
    {
        key: '4',
        value: 'Crime'
    },

]

const useStyles = createUseStyles({
    header: {
        fontSize: 35,
        textTransform: 'uppercase',
        color: '#ffffff',
        padding: '20px 0'

    },
    lable: {
        color: '#f65261',
        fontSize: 20,
        textTransform: 'uppercase',
        margin: '20px 0 10px'
    },
    buttonsContainer: {
        margin: '50px 0 10px',
        display: 'flex',
        justifyContent: 'flex-end'
    },
    resetBtn: {
        width: '30%',
        maxWidth: '200px',
        marginRight: 20
    },
    submitBtn: {
        width: '30%',
        maxWidth: '200px'
    }
});

export const AddMovieModal = (): JSX.Element => {
    const styles = useStyles();

    const reset = () => {
        console.log('reset');
    }
    const submit = () => {
        console.log('submit');
    }

    return (
        <>
            <h2 className={styles.header}>add movie</h2>
            <p className={styles.lable}>title</p>
            <Input type='default' placeholder="Movie title here" />
            <p className={styles.lable}>release date</p>
            <DatePickerField />
            <p className={styles.lable}>movie url</p>
            <Input type='default' placeholder="Movie url here" />
            <p className={styles.lable}>genre</p>
            <CustomizedSelect placeholder='Select Genre' options={genreOptions}/>
            <p className={styles.lable}>overview</p>
            <Input type='default' placeholder="Overview here" />
            <p className={styles.lable}>runtime</p>
            <Input type='default' placeholder="Runtime here" />
            <div className={styles.buttonsContainer}>
                <div className={styles.resetBtn}>
                    <Button title='reset' color='redText' clickHandler={reset}/>
                </div>
                <div className={styles.submitBtn}>
                    <Button title='submit' color='red' clickHandler={submit}/>
                </div>
            </div>
        </>
    )
}
