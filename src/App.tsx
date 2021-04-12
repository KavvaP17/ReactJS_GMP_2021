import React from 'react';
import { Footer } from './components/Footer';
import { Logo } from './components/Logo';
import { Home } from './Pages/Home';
import { ErrorBoundary } from './components/ErrorBoundary';
import { MovieDetails } from './Pages/MovieDetails';

const mockMoviesList = [
    {
        title: 'Fight Club',
        category: 'Thriller',
        year: '1999',
        image: 'https://thumbs.filmix.ac/posters/thumbs/w220/boycovskiy-klub-fight-club-1999_189_0.jpg',
        description: 'It is based on the 1996 novel of the same name by Chuck Palahniuk. Norton plays the unnamed narrator, who is discontented with his white-collar job. He forms a "fight club" with soap salesman Tyler Durden (Pitt), and becomes embroiled in a relationship with a destitute woman, Marla Singer (Bonham Carter).',
        rating: 4.9,
        duration: 154,

    },
    {
        title: 'Fight Club',
        category: 'Thriller',
        year: '1999',
        image: 'https://thumbs.filmix.ac/posters/thumbs/w220/boycovskiy-klub-fight-club-1999_189_0.jpg',
        description: 'It is based on the 1996 novel of the same name by Chuck Palahniuk. Norton plays the unnamed narrator, who is discontented with his white-collar job. He forms a "fight club" with soap salesman Tyler Durden (Pitt), and becomes embroiled in a relationship with a destitute woman, Marla Singer (Bonham Carter).',
        rating: 4.9,
        duration: 154,
    },
    {
        title: 'Fight Club',
        category: 'Thriller',
        year: '1999',
        image: 'https://thumbs.filmix.ac/posters/thumbs/w220/boycovskiy-klub-fight-club-1999_189_0.jpg',
        description: 'It is based on the 1996 novel of the same name by Chuck Palahniuk. Norton plays the unnamed narrator, who is discontented with his white-collar job. He forms a "fight club" with soap salesman Tyler Durden (Pitt), and becomes embroiled in a relationship with a destitute woman, Marla Singer (Bonham Carter).',
        rating: 4.9,
        duration: 154,
    },
    {
        title: 'Fight Club',
        category: 'Thriller',
        year: '1999',
        image: 'https://thumbs.filmix.ac/posters/thumbs/w220/boycovskiy-klub-fight-club-1999_189_0.jpg',
        description: 'It is based on the 1996 novel of the same name by Chuck Palahniuk. Norton plays the unnamed narrator, who is discontented with his white-collar job. He forms a "fight club" with soap salesman Tyler Durden (Pitt), and becomes embroiled in a relationship with a destitute woman, Marla Singer (Bonham Carter).',
        rating: 4.9,
        duration: 154,
    },
    {
        title: 'Fight Club',
        category: 'Thriller',
        year: '1999',
        image: 'https://thumbs.filmix.ac/posters/thumbs/w220/boycovskiy-klub-fight-club-1999_189_0.jpg',
        description: 'It is based on the 1996 novel of the same name by Chuck Palahniuk. Norton plays the unnamed narrator, who is discontented with his white-collar job. He forms a "fight club" with soap salesman Tyler Durden (Pitt), and becomes embroiled in a relationship with a destitute woman, Marla Singer (Bonham Carter).',
        rating: 4.9,
        duration: 154,
    },
    {
        title: 'Fight Club',
        category: 'Thriller',
        year: '1999',
        image: 'https://thumbs.filmix.ac/posters/thumbs/w220/boycovskiy-klub-fight-club-1999_189_0.jpg',
        description: 'It is based on the 1996 novel of the same name by Chuck Palahniuk. Norton plays the unnamed narrator, who is discontented with his white-collar job. He forms a "fight club" with soap salesman Tyler Durden (Pitt), and becomes embroiled in a relationship with a destitute woman, Marla Singer (Bonham Carter).',
        rating: 4.9,
        duration: 154,
    },
    {
        title: 'Fight Club',
        category: 'Thriller',
        year: '1999',
        image: 'https://thumbs.filmix.ac/posters/thumbs/w220/boycovskiy-klub-fight-club-1999_189_0.jpg',
        description: 'It is based on the 1996 novel of the same name by Chuck Palahniuk. Norton plays the unnamed narrator, who is discontented with his white-collar job. He forms a "fight club" with soap salesman Tyler Durden (Pitt), and becomes embroiled in a relationship with a destitute woman, Marla Singer (Bonham Carter).',
        rating: 4.9,
        duration: 154,
    },
    {
        title: 'Fight Club',
        category: 'Thriller',
        year: '1999',
        image: 'https://thumbs.filmix.ac/posters/thumbs/w220/boycovskiy-klub-fight-club-1999_189_0.jpg',
        description: 'It is based on the 1996 novel of the same name by Chuck Palahniuk. Norton plays the unnamed narrator, who is discontented with his white-collar job. He forms a "fight club" with soap salesman Tyler Durden (Pitt), and becomes embroiled in a relationship with a destitute woman, Marla Singer (Bonham Carter).',
        rating: 4.9,
        duration: 154,
    }
];

export const App = (): JSX.Element  => {

    return (
        <ErrorBoundary>
            <Home mockMoviesList={mockMoviesList} />
            <MovieDetails mockMoviesList={mockMoviesList} />
            <Footer>
                <Logo></Logo>
            </Footer>
        </ErrorBoundary>
    );
}
