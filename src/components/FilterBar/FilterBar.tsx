import React from 'react';
import { createUseStyles } from 'react-jss';

import { CategoriesFilter } from '../CategoriesFilter';
import { SortByFilter } from '../SortByFilter';

const useStyles = createUseStyles({
    filterBar: {
        width: '100%',
        borderBottom: '3px solid #555555',
        display: 'flex',
        justifyContent: 'space-between'
    }
})

export const FilterBar = (): JSX.Element => {
    const styles = useStyles();
    return (
        <div className={styles.filterBar}>
            <CategoriesFilter />
            <SortByFilter />
        </div>
    )
}
