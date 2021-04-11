import React, {useState} from 'react';
import { createUseStyles } from 'react-jss';
import { Input } from '../Input';
import { DatePickerField } from '../DatePickerField';
import { CustomizedSelect } from '../CustomizedSelect';
import { Button } from '../Button';

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
    movieId: {
        fontSize: 18,
        color: '#ffffff'
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
    saveBtn: {
        width: '30%',
        maxWidth: '200px'
    }
});

const mockData = {
    movieId : 'movie id',
    title: 'title',
    releaseDate: new Date(),
    movieUrl: 'movie url',
    genre: 'Documentary',
    overview: 'overview',
    runtime: 'runtime',
}

export const EditMovieModal = (): JSX.Element => {
    const styles = useStyles();
    const [movieDate, setMovieData] = useState(mockData);

    const reset = () => {
        setMovieData(mockData);
    }
    const save = () => {
        setMovieData(mockData);
    }

    return (
        <>
            <h2 className={styles.header}>edit movie</h2>
            <p className={styles.lable}>movie id</p>
            <p className={styles.movieId}>{movieDate.movieId}</p>
            <p className={styles.lable}>title</p>
            <Input type='default' value={movieDate.title} />
            <p className={styles.lable}>release date</p>
            <DatePickerField />
            <p className={styles.lable}>movie url</p>
            <Input type='default' value={movieDate.movieUrl} />
            <p className={styles.lable}>genre</p>
            <CustomizedSelect options={genreOptions} placeholder='Select Genre' />
            <p className={styles.lable}>overview</p>
            <Input type='default' value={movieDate.overview} />
            <p className={styles.lable}>runtime</p>
            <Input type='default' value={movieDate.runtime} />
            <div className={styles.buttonsContainer}>
                <div className={styles.resetBtn}>
                    <Button title='reset' color='redText' clickHandler={reset}/>
                </div>
                <div className={styles.saveBtn}>
                    <Button title='save' color='red' clickHandler={save}/>
                </div>
            </div>
        </>
    )
}
