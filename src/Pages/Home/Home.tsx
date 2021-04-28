import React, { useEffect } from 'react';
import { createUseStyles } from 'react-jss';
import { connect } from 'react-redux';
import { get } from 'lodash';

import { FilterBar } from '../../components/FilterBar';
import { Header } from '../../components/Header';
import { MoviesList } from '../../components/MoviesList';
import CircularProgress from '@material-ui/core/CircularProgress';
import {
    loadMovies,
} from '../../actions/movies';
import { IFilter, IMovie, ISort, IState } from '../../interfaces';

type Props = {
    moviesList: IMovie[],
    isLoading: boolean,
    isError: Error | null | undefined,
    filter: IFilter,
    sort: ISort,
    loadMovies: () => Promise<void>,
    addMovie: () => Promise<void>
};

const useStyles = createUseStyles({
    mainWrapper: {
        backgroundColor: '#232323',
        padding: '5px 5% 20px'
    }
});

const HomeElement = ({
    moviesList,
    isLoading,
    filter,
    sort,
    isError,
    loadMovies
}: Props): JSX.Element => {
    const styles = useStyles();
    useEffect(() => {
        loadMovies();
    }, [loadMovies]);

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
        <>
            <Header />
            <div className={styles.mainWrapper}>
                <FilterBar />
                {isLoading || isError ? <CircularProgress/> : <MoviesList moviesList={moviesProcessing(moviesList)} />}
            </div>
        </>
    )
}

const mapStateToProps = ({moviesState}: IState) => {
    const moviesList = moviesState.movies;
    const isLoading = moviesState.loading;
    const isError = moviesState.error;
    const filter = moviesState.filter;
    const sort = moviesState.sort;
    return {
        moviesList,
        isLoading,
        isError,
        filter,
        sort
    };
};

const mapDispatchToProps = {
    loadMovies
}

export const Home = connect(mapStateToProps, mapDispatchToProps)(HomeElement);
