import React from 'react';
import { createUseStyles } from 'react-jss';

import { CategoriesFilter } from '../CategoriesFilter';

const useStyles = createUseStyles({
    filterBar: {
        width: '100%',
        borderBottom: '3px solid #555555'
    }
})

export const FilterBar = (): JSX.Element => {
    const classes = useStyles();
    return (
        <div className={classes.filterBar}>
            <CategoriesFilter />
        </div>
    )
}
