import React from 'react';
import { createUseStyles } from 'react-jss';
import { connect } from 'react-redux';
import { IFilter, IMovie, ISort, IState } from '../../interfaces';
import { MovieCard } from '../MovieCard';
import { get } from 'lodash';

type Props = {
    moviesList: IMovie[],
    filter: IFilter,
    sort: ISort,
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
        justifyContent: 'center'
    }
});

export const MoviesListElement = ({ moviesList, filter, sort }: Props): JSX.Element => {
    const styles = useStyles();

    const filteringMovies = (filteredMovies: IMovie[]): IMovie[] => {
        if (filter === 'all') {
            return filteredMovies;
        }

        return filteredMovies.filter(movie => {
            const genres = movie.genres;
            return !!genres.find(genre => genre.toLocaleLowerCase() === filter)
        });
    };

    const sortMovies = (sortedMovies: IMovie[]): IMovie[] => {
        switch (sort) {
            case 'releaseDate':
                return sortedMovies.sort((a, b) => {
                    const date1 = new Date(get(a, 'release_date', 0));
                    const date2 = new Date(get(b, 'release_date', 0));
                    return +date2 - (+date1);
                });
            case 'mostPopular':
                return sortedMovies.sort((a, b) => get(a, 'vote_average', 0) - get(b, 'vote_average', 0));
            default:
                return sortedMovies;
        }
    };

    const moviesProcessing = (movies: IMovie[]): IMovie[] => {
        return sortMovies(filteringMovies(movies));
    }

    return (
        <div className={styles.moviesList}>
            <div className={styles.moviesNumber}>
                <span className='bold'>{moviesList.length}</span>
                <span>{` movie${moviesList.length > 1 ? 's' : ''} found`}</span>
            </div>
            <div className={styles.movieCards}>
                {moviesProcessing(moviesList).map((movie) => (
                    <MovieCard key={movie.id} movie={movie} />
                ))}
            </div>
        </div>
    )
}

const mapStateToProps = ({moviesState}: IState) => {
    const moviesList = moviesState.movies;
    const filter = moviesState.filter;
    const sort = moviesState.sort;
    return {
        moviesList,
        filter,
        sort
    };
};

export const MoviesList = connect(mapStateToProps)(MoviesListElement);
