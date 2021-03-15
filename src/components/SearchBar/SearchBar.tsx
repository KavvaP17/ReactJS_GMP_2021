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
        flexDirection: 'row',
    },
    searchInputLabel: {
        color: '#ffffff',
        fontSize: 50,
        textTransform: 'uppercase',
        marginBottom: '50px'
    },
    searchInputWrapper: {
        flex: 4,
        marginRight: 20,
        fontSize: 24
    },
    searchBtnWrapper: {
        flex: 1,
        marginLeft: 20
    }

});

export const SearchBar = (): JSX.Element => {
    const styles = useStyles();
    const search = (): void => {
        console.log(search);
    }
    return (
        <div className={styles.searchBarContainer}>
            <span className={styles.searchInputLabel}>
                find your movie
            </span>
            <div className={styles.searchInputContainer}>
                <div className={styles.searchInputWrapper}>
                    <Input  type='search' placeholder='What do you want to watch?'/>
                </div>
                <div className={styles.searchBtnWrapper}>
                    <Button title='Search' color='red' clickHandler={search}/>
                </div>
            </div>
        </div>
    )
}
