import React, { useEffect } from 'react';
import { createUseStyles } from 'react-jss';
import { connect } from 'react-redux';

import { FilterBar } from '../../components/FilterBar';
import { Header } from '../../components/Header';
import { MoviesList } from '../../components/MoviesList';
import CircularProgress from '@material-ui/core/CircularProgress';
import {
    searchMovies, setQuery
} from '../../actions/movies';
import { IState } from '../../interfaces';
import { useParams } from 'react-router-dom';

type Props = {
    isLoading: boolean,
    query: string,
    isError: Error | null | undefined,
    searchMovies: (query: string) => Promise<void>,
    setQuery: (query: string) => void
};

const useStyles = createUseStyles({
    searchConteiner: {
        backgroundColor: '#232323',
        minHeight: 'calc(100vh - 70px)'
    },
    mainWrapper: {
        backgroundColor: '#232323',
        padding: '5px 5% 20px'
    }
});

const SearchElement = ({
    query,
    isLoading,
    isError,
    searchMovies,
    setQuery
}: Props): JSX.Element => {
    const styles = useStyles();
    const { searchQuery } = useParams<{searchQuery: string}>();

    useEffect(() => {
        const resultQuery = searchQuery;
        setQuery(resultQuery);
        searchMovies(resultQuery);

    }, [searchMovies, query, searchQuery, setQuery]);


    return (
        <div className={styles.searchConteiner}>
            <Header />
            <div className={styles.mainWrapper}>
                <FilterBar />
                {isLoading || isError ? <CircularProgress/> : <MoviesList />}
            </div>
        </div>
    )
}

const mapStateToProps = ({moviesState}: IState) => {
    const isLoading = moviesState.loading;
    const isError = moviesState.error;
    const query = moviesState.query;
    return {
        query,
        isLoading,
        isError
    };
};

const mapDispatchToProps = {
    searchMovies,
    setQuery
}

export const Search = connect(mapStateToProps, mapDispatchToProps)(SearchElement);
