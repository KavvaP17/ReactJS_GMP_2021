import React, { useEffect, useState } from 'react';
import { createUseStyles } from 'react-jss';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { IState } from '../../interfaces';
import { Button } from '../Button';
import { Input } from '../Input';

type Props = {
    query: string,
};

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

export const SearchBarElement = ({query}: Props): JSX.Element => {
    const styles = useStyles();
    const [searchQuery, setSearchQuery] = useState(query || '');

    useEffect(() => {
        setSearchQuery(query || '');
    }, [query]);

    const handleChange = (event: React.ChangeEvent<{ value: string }>) => {
        setSearchQuery(event.target.value as string);
    };

    return (
        <div className={styles.searchBarContainer}>
            <span className={styles.searchInputLabel}>
                find your movie
            </span>
            <div className={styles.searchInputContainer}>
                <div className={styles.searchInputWrapper}>
                    <Input name="search" type='search' placeholder='What do you want to watch?' value={searchQuery} changeHandler={handleChange}/>
                </div>
                <div className={styles.searchBtnWrapper}>
                    <Link to={`/search/${searchQuery}`}>
                        <Button title='Search' color='red'/>
                    </Link>
                </div>
            </div>
        </div>
    )
}

const mapStateToProps = ({moviesState}: IState) => {
    const query = moviesState.query;
    return {
        query
    };
};

export const SearchBar = connect(mapStateToProps)(SearchBarElement);
