import React, {useState} from 'react';
import { createUseStyles } from 'react-jss';
import { Input } from '../Input';
import { DatePickerField } from '../DatePickerField';
import { CustomizedSelect } from '../CustomizedSelect';
import { Button } from '../Button';
import { IMovie } from '../../interfaces';

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

type Props = {
    movie: IMovie,
    editMovie: (movie: IMovie) => Promise<void>,
    onClose: () => void,
}

export const EditMovieModal = ({movie, editMovie, onClose}: Props): JSX.Element => {
    const styles = useStyles();
    // temporary solution, need to use Formik in future
    const [title, setTitle] = useState(movie.title);
    const [posterPath, setPosterPath] = useState(movie.poster_path);
    const [overview, setOverview] = useState(movie.overview);
    const [runtime, setRuntime] = useState(movie.runtime);
    const [genres, setGenres] = useState<string[]>(movie.genres);
    const [releaseDate, setReleaseDate] = useState(movie.release_date);

    const submit = () => {
        const editedMovie: IMovie = {
            id: movie.id,
            title,
            poster_path: posterPath,
            overview,
            runtime: runtime,
            genres,
            release_date: releaseDate,
        }
        editMovie(editedMovie);
        onClose();
    }

    const reset = () => {
        setTitle(movie.title);
        setPosterPath(movie.poster_path);
        setOverview(movie.overview);
        setRuntime(movie.runtime);
        setGenres(movie.genres);
        setReleaseDate(movie.release_date);
    }

    return (
        <>
            <h2 className={styles.header}>edit movie</h2>
            <p className={styles.lable}>movie id</p>
            <p className={styles.movieId}>{movie.id}</p>
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
                value={runtime.toString()}
                changeHandler={e => setRuntime(+e.target.value)}/>
            <div className={styles.buttonsContainer}>
                <div className={styles.resetBtn}>
                    <Button title='reset' color='redText' clickHandler={reset}/>
                </div>
                <div className={styles.saveBtn}>
                    <Button title='save' color='red' clickHandler={submit}/>
                </div>
            </div>
        </>
    )
}
