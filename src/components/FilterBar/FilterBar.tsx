import React from 'react';
import { createUseStyles } from 'react-jss';
import { connect } from 'react-redux';

import { CategoriesFilter } from '../CategoriesFilter';
import { SortByFilter } from '../SortByFilter';
import {
    filterMovies,
    sortMovies
} from '../../actions/movies';
import { IFilter, ISort, IState } from '../../interfaces';

const useStyles = createUseStyles({
    filterBar: {
        width: '100%',
        borderBottom: '3px solid #555555',
        display: 'flex',
        justifyContent: 'space-between'
    }
});

type Props = {
    sort: ISort,
    filterMovies: (filter: IFilter) => void;
    sortMovies: (sort: ISort) => void;
};

export const FilterBarElement = ({sort, filterMovies, sortMovies}: Props): JSX.Element => {
    const styles = useStyles();
    return (
        <div className={styles.filterBar}>
            <CategoriesFilter filterMovies={filterMovies}/>
            <SortByFilter selectedValue = {sort} sortMovies={sortMovies}/>
        </div>
    )
}

const mapStateToProps = ({moviesState}: IState) => {
    const sort = moviesState.sort;
    return {
        sort
    };
};

const mapDispatchToProps = {
    filterMovies,
    sortMovies
}

export const FilterBar = connect(mapStateToProps, mapDispatchToProps)(FilterBarElement);
