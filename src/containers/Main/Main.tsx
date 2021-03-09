import React from 'react';
import { createUseStyles } from 'react-jss';

import { FilterBar } from '../../components/FilterBar';

const useStyles = createUseStyles({
    mainWrapper: {
        backgroundColor: '#232323',
        padding: '5px 5% 20px'
    }
})


export const Main = (): JSX.Element => {
    const classes = useStyles();
    return (
        <div className={classes.mainWrapper}>
            <FilterBar />
        </div>
    )
}
