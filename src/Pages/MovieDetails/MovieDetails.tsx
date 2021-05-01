import React from 'react';
import { createUseStyles } from 'react-jss';
import { connect } from 'react-redux';
import { useParams } from 'react-router-dom';

import { FilterBar } from '../../components/FilterBar';
import { MovieDetailsHeader } from '../../components/MovieDetailsHeader';
import { MoviesList } from '../../components/MoviesList';
import { IMovie, IState } from '../../interfaces';

type Props = {
    moviesList: IMovie[],
};


const useStyles = createUseStyles({
    detailsConteiner: {
        backgroundColor: '#232323',
        minHeight: 'calc(100vh - 70px)'
    },
    mainWrapper: {
        backgroundColor: '#232323',
        padding: '5px 5% 20px'
    }
});

export const MovieDetailsElement = ({ moviesList }: Props): JSX.Element => {
    const styles = useStyles();
    const { id } = useParams<{id: string}>();

    return (
        <div className={styles.detailsConteiner}>
            <MovieDetailsHeader movie={moviesList.find((item => item.id === +id))}/>
            <div className={styles.mainWrapper}>
                <FilterBar />
                <MoviesList />
            </div>
        </div>
    )
}

const mapStateToProps = ({moviesState}: IState) => {
    const moviesList = moviesState.movies;
    return {
        moviesList
    };
};

export const MovieDetails = connect(mapStateToProps)(MovieDetailsElement);
