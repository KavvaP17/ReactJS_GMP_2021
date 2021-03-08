import React from 'react';
import { createUseStyles } from 'react-jss';
import { Button } from '../Button';
import { Input } from '../Input';

const useStyles = createUseStyles({
    searchBarContainer: {
        display: 'flex',
        flexDirection: 'column',
        margin: '50px 5% 160px'
    },
    searchInputContainer: {
        display: 'flex',
        flexDirection: 'row'

    },
    searchInputLabel: {
        color: '#ffffff',
        fontSize: 50,
        textTransform: 'uppercase',
        marginBottom: '50px'
    }
});

export const SearchBar = (): JSX.Element => {
    const classes = useStyles();
    return (
        <div className={classes.searchBarContainer}>
            <span className={classes.searchInputLabel}>
                find your movie
            </span>
            <div className={classes.searchInputContainer}>
                <Input  type='search' placeholder='What do you want to watch?'/>
                <Button title='Search' color='red'/>
            </div>
        </div>
    )
}
