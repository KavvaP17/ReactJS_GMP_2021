import React from 'react';
import { createUseStyles } from 'react-jss';
import { Logo } from '../Logo';
import { Button } from '../Button';
import { SearchBar } from '../SearchBar';

const useStyles = createUseStyles({
    headerContainer: {
        backgroundImage: 'url(https://www.atomcreativemedia.com/wp-content/uploads/2018/09/orange-and-blue-movies-2.jpg)',
        borderBottom: '10px solid #555555',
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        padding: '20px 5%',
        boxShadow: 'inset 0 0 0 2000px rgb(0 0 0 / 80%)'
    },
    topContainer: {
        display: 'flex',
        justifyContent: 'space-between'

    }
});

export const Header = (): JSX.Element => {
    const classes = useStyles();
    return (
        <div className={classes.headerContainer}>
            <div className={classes.topContainer}>
                <Logo />
                <Button title='+Add movie' color='transparent'/>
            </div>
            <SearchBar />
        </div>
    )
}
