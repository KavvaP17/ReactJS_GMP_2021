import React, { useState } from 'react';
import { createUseStyles } from 'react-jss';
import { IMovie } from '../../interfaces';
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

type Props = {
    addMovie: (movie: IMovie) => Promise<void>,
    closeModal: () => void
};

const defaultFormData = {
    title: '',
    poster_path: '',
    overview: '',
    runtime: '',
    genres: [],
    release_date: new Date(),
  };

export const AddMovieModal = ({ addMovie, closeModal }: Props): JSX.Element => {
    const styles = useStyles();
    // temporary solution, need to use Formik in future
    const [title, setTitle] = useState(defaultFormData.title);
    const [posterPath, setPosterPath] = useState(defaultFormData.poster_path);
    const [overview, setOverview] = useState(defaultFormData.overview);
    const [runtime, setRuntime] = useState(defaultFormData.runtime);
    const [genres, setGenres] = useState<string[]>(defaultFormData.genres);
    const [releaseDate, setReleaseDate] = useState(defaultFormData.release_date);


    const reset = () => {
        setTitle(defaultFormData.title);
        setPosterPath(defaultFormData.poster_path);
        setOverview(defaultFormData.overview);
        setRuntime(defaultFormData.runtime);
        setGenres(defaultFormData.genres);
        setReleaseDate(defaultFormData.release_date);
    }
    const submit = () => {
        const movie: IMovie = {
            title,
            poster_path: posterPath,
            overview,
            runtime: parseInt(runtime, 10),
            genres,
            release_date: releaseDate,
        }
        addMovie(movie);
        closeModal();
    }

    return (
        <>
            <h2 className={styles.header}>add movie</h2>
            <p className={styles.lable}>title</p>
            <Input
                type='default'
                placeholder="Movie title here"
                value={title}
                changeHandler={e => setTitle(e.target.value)} />
            <p className={styles.lable}>release date</p>
            <DatePickerField
                date={releaseDate}
                changeHandler={date => setReleaseDate(new Date(date ? date.toDateString(): ''))}/>
            <p className={styles.lable}>movie url</p>
            <Input
                type='default'
                placeholder="Movie url here"
                value={posterPath}
                changeHandler={e => setPosterPath(e.target.value)} />
            <p className={styles.lable}>genre</p>
            <CustomizedSelect
                placeholder='Select Genre'
                options={genreOptions}
                selectedValue={genres[0]}
                changeHandler={genres => setGenres(genres)}/>
            <p className={styles.lable}>overview</p>
            <Input
                type='default'
                placeholder="Overview here"
                value={overview}
                changeHandler={e => setOverview(e.target.value)} />
            <p className={styles.lable}>runtime</p>
            <Input
                type='default'
                placeholder="Runtime here"
                value={runtime}
                changeHandler={e => setRuntime(e.target.value)}/>
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
