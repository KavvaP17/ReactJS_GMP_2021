import React from 'react';
import { createUseStyles } from 'react-jss';
import { IMovie } from '../../interfaces';
import { MovieCard } from '../MovieCard';

type Props = {
    moviesList: IMovie[]
}

const useStyles = createUseStyles({
    moviesList: {
        margin: '30px 0'
    },
    moviesNumber: {
        fontSize: 20,
        color: '#ffffff',

        '& .bold': {
            fontSize: 22,
            fontWeight: 900
        }
    },
    movieCards: {
        marginTop: 30,
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'center',
        alignItems: 'center'
    }
});

export const MoviesList = ({ moviesList }: Props): JSX.Element => {
    const styles = useStyles();
    if (!moviesList) {
        moviesList = [];
    }
    const moviesNumber = moviesList.length;
    return (
        <div className={styles.moviesList}>
            <div className={styles.moviesNumber}>
                <span className='bold'>{moviesNumber}</span>
                <span>{` movie${moviesNumber > 1 ? 's' : ''} found`}</span>
            </div>
            <div className={styles.movieCards}>
                {moviesList.map((movie) => (
                    <MovieCard key={movie.id} movie={movie} />
                ))}
            </div>
        </div>
    )
}
