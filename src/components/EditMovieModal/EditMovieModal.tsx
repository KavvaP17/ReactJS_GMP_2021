import React from 'react';
import { createUseStyles } from 'react-jss';
import { Input } from '../Input';
import { DatePickerField } from '../DatePickerField';
import { Button } from '../Button';
import { IMovie } from '../../interfaces';
import { genreOptions } from '../../config';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { MaterialUiPickersDate } from '@material-ui/pickers/typings/date';
import { MultiSelect } from '../MiltiSelect';

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
    },
    errorMessage: {
        color: '#f65261',
        marginTop: 5
    }
});

type Props = {
    movie: IMovie,
    editMovie: (movie: IMovie) => Promise<void>,
    closeModal: () => void,
}

export const EditMovieModal = ({movie, editMovie, closeModal}: Props): JSX.Element => {
    const styles = useStyles();
    const formik = useFormik({
        initialValues: {
            ...movie
        },
        validationSchema: Yup.object({
            title: Yup.string()
                .min(1, 'Must be 1 character or less')
                .required('Required'),
            poster_path: Yup.string()
                .url('Must be url')
                .required('Required'),
            overview: Yup.string()
                .min(1, 'Must be 1 character or less')
                .required('Required'),
            runtime: Yup.number()
                .min(0, 'Must be more then 0')
                .required('Required'),
            genres: Yup.array()
                .min(1, "You can't leave this blank.")
                .required("You can't leave this blank."),
            release_date: Yup.date()
                .required('Required'),
        }),
        onSubmit: values => {
            const movie: IMovie = {
                id: values.id,
                title: values.title,
                poster_path: values.poster_path,
                overview: values.overview,
                runtime: +values.runtime,
                genres: values.genres,
                release_date: values.release_date,
            }
            editMovie(movie);
            closeModal();
        },
    });

    const reset = () => {
        formik.setValues(movie);
    };

    const setDatePickerValue = (date: MaterialUiPickersDate) => {
        formik.setValues({
            ...formik.values,
            release_date: new Date(date ? date.toDateString(): '')
        });
    }

    const setGenresValue = (selectedGenres: string[]) => {
        formik.setValues({
            ...formik.values,
            genres: selectedGenres
        });
    }

    return (
        <form>
            <h2 className={styles.header}>edit movie</h2>
            <p className={styles.lable}>movie id</p>
            <p className={styles.movieId}>{formik.values.id}</p>
            <p className={styles.lable}>title</p>
            <Input
                name='title'
                type='default'
                placeholder="Movie title here"
                value={formik.values.title}
                changeHandler={formik.handleChange} />
            {formik.touched.title && formik.errors.title
                ? (<div className={styles.errorMessage}>{formik.errors.title}</div>)
                : null}
            <p className={styles.lable}>release date</p>
            <DatePickerField
                name='release_date'
                date={formik.values.release_date}
                changeHandler={setDatePickerValue}/>
            {formik.touched.release_date && formik.errors.release_date
                ? (<div className={styles.errorMessage}>{formik.errors.release_date}</div>)
                : null}
            <p className={styles.lable}>movie url</p>
            <Input
                name='poster_path'
                type='default'
                placeholder="Movie url here"
                value={formik.values.poster_path}
                changeHandler={formik.handleChange} />
            {formik.touched.poster_path && formik.errors.poster_path
                ? (<div className={styles.errorMessage}>{formik.errors.poster_path}</div>)
                : null}
            <p className={styles.lable}>genre</p>
            <MultiSelect
                name='genres'
                placeholder='Select Genre'
                options={genreOptions}
                values={formik.values.genres}
                changeHandler={setGenresValue}/>
            {formik.touched.genres && formik.errors.genres
                ? (<div className={styles.errorMessage}>{formik.errors.genres}</div>)
                : null}
            <p className={styles.lable}>overview</p>
            <Input
                name='overview'
                type='default'
                placeholder="Overview here"
                value={formik.values.overview}
                changeHandler={formik.handleChange} />
            {formik.touched.overview && formik.errors.overview
                ? (<div className={styles.errorMessage}>{formik.errors.overview}</div>)
                : null}
            <p className={styles.lable}>runtime</p>
            <Input
                name='runtime'
                type='default'
                placeholder="Runtime here"
                value={formik.values.runtime}
                changeHandler={formik.handleChange}/>
            {formik.touched.runtime && formik.errors.runtime
                ? (<div className={styles.errorMessage}>{formik.errors.runtime}</div>)
                : null}
            <div className={styles.buttonsContainer}>
                <div className={styles.resetBtn}>
                    <Button title='reset' color='redText' type='reset' clickHandler={reset}/>
                </div>
                <div className={styles.saveBtn}>
                    <Button title='save' color='red' type='submit' clickHandler={formik.handleSubmit}/>
                </div>
            </div>
        </form>
    )
}
