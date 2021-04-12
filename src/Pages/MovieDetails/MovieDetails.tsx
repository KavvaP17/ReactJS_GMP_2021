import React from 'react';
import { createUseStyles } from 'react-jss';

import { FilterBar } from '../../components/FilterBar';
import { MovieDetailsHeader } from '../../components/MovieDetailsHeader';
import { MoviesList } from '../../components/MoviesList';
import { Movie } from '../../components/MoviesList/MoviesList';

type Props = {
    mockMoviesList: Movie[]
}

const useStyles = createUseStyles({
    mainWrapper: {
        backgroundColor: '#232323',
        padding: '5px 5% 20px'
    }
});

export const MovieDetails = ({ mockMoviesList }: Props): JSX.Element => {
    const styles = useStyles();
    return (
        <>
            <MovieDetailsHeader movie={mockMoviesList[0]}/>
            <div className={styles.mainWrapper}>
                <FilterBar />
                <MoviesList moviesList={mockMoviesList} />
            </div>
        </>
    )
}
