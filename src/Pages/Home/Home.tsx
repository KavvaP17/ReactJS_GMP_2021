import React from 'react';
import { createUseStyles } from 'react-jss';

import { FilterBar } from '../../components/FilterBar';
import { MoviesList } from '../../components/MoviesList';

const useStyles = createUseStyles({
    mainWrapper: {
        backgroundColor: '#232323',
        padding: '5px 5% 20px'
    }
});

const mockMoviesList = [
    {
        title: 'Fight Club',
        category: 'Thriller',
        year: '1999',
        image: 'https://thumbs.filmix.ac/posters/thumbs/w220/boycovskiy-klub-fight-club-1999_189_0.jpg'
    },
    {
        title: 'Fight Club',
        category: 'Thriller',
        year: '1999',
        image: 'https://thumbs.filmix.ac/posters/thumbs/w220/boycovskiy-klub-fight-club-1999_189_0.jpg'
    },
    {
        title: 'Fight Club',
        category: 'Thriller',
        year: '1999',
        image: 'https://thumbs.filmix.ac/posters/thumbs/w220/boycovskiy-klub-fight-club-1999_189_0.jpg'
    },
    {
        title: 'Fight Club',
        category: 'Thriller',
        year: '1999',
        image: 'https://thumbs.filmix.ac/posters/thumbs/w220/boycovskiy-klub-fight-club-1999_189_0.jpg'
    },
    {
        title: 'Fight Club',
        category: 'Thriller',
        year: '1999',
        image: 'https://thumbs.filmix.ac/posters/thumbs/w220/boycovskiy-klub-fight-club-1999_189_0.jpg'
    },
    {
        title: 'Fight Club',
        category: 'Thriller',
        year: '1999',
        image: 'https://thumbs.filmix.ac/posters/thumbs/w220/boycovskiy-klub-fight-club-1999_189_0.jpg'
    },
    {
        title: 'Fight Club',
        category: 'Thriller',
        year: '1999',
        image: 'https://thumbs.filmix.ac/posters/thumbs/w220/boycovskiy-klub-fight-club-1999_189_0.jpg'
    },
    {
        title: 'Fight Club',
        category: 'Thriller',
        year: '1999',
        image: 'https://thumbs.filmix.ac/posters/thumbs/w220/boycovskiy-klub-fight-club-1999_189_0.jpg'
    }
];


export const Home = (): JSX.Element => {
    const styles = useStyles();
    return (
        <div className={styles.mainWrapper}>
            <FilterBar />
            <MoviesList moviesList={mockMoviesList} />
        </div>
    )
}
