import React from 'react';
import { createUseStyles } from 'react-jss';
import { Dropdown } from '../Dropdown';

const sortByOptions = [
    {
        title: 'release date'
    },
    {
        title: 'most popular'
    }
]
const useStyles = createUseStyles({
    sortByFilter: {
    },
    filterLabel: {
        fontSize: 20,
        color: '#888888',
        textTransform: 'uppercase'
    }
})

export const SortByFilter = (): JSX.Element => {
    const classes = useStyles();
    return (
        <div className={classes.sortByFilter}>
            <span className={classes.filterLabel}>Sort by</span>
            <Dropdown options={sortByOptions} />
        </div>
    )
}
