import React from 'react';
import { createUseStyles } from 'react-jss';
import { MovieCard } from '../MovieCard';

export type Movie = {
    year: string,
    title: string,
    category: string,
    image: string,
    description: string,
    rating: number,
    duration: number
}
type Props = {
    moviesList: Movie[]
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
    const moviesNumber = moviesList.length;
    return (
        <div className={styles.moviesList}>
            <div className={styles.moviesNumber}>
                <span className='bold'>{moviesNumber}</span>
                <span>{` movie${moviesNumber > 1 ? 's' : ''} found`}</span>
            </div>
            <div className={styles.movieCards}>
                {moviesList.map((movie, index) => (
                    <MovieCard key={index} movie={movie} />
                ))}
            </div>
        </div>
    )
}
