import { IMovie, IMovieState } from "../interfaces";

export const initialState: IMovieState = {
    movies: [],
    loading: false,
    error: null,
    filter: 'all',
    sort: 'releaseDate',
    query: ''
};

export const mockMovieList: IMovie[] = [
    {
        id: 1,
        budget: 1,
        genres: [
            'genre1',
            'genre2'
        ],
        overview: 'test',
        poster_path: 'test',
        release_date: new Date(2021, 1, 1),
        revenue: 1,
        runtime: 1,
        tagline: 'test',
        title: 'test',
        vote_average: 1,
        vote_count: 1
    },
    {
        id: 2,
        budget: 2,
        genres: [
            'genre3',
            'genre4'
        ],
        overview: 'test',
        poster_path: 'test',
        release_date: new Date(2021, 1, 2),
        revenue: 1,
        runtime: 1,
        tagline: 'test',
        title: 'test',
        vote_average: 2,
        vote_count: 1
    }
];

export const mockEditMovie: IMovie = {
    id: 1,
    budget: 3,
    genres: [
        'genre1',
        'genre2'
    ],
    overview: 'test3',
    poster_path: 'test3',
    release_date: new Date(2021, 1, 3),
    revenue: 3,
    runtime: 3,
    tagline: 'test3',
    title: 'test3',
    vote_average: 3,
    vote_count: 3
};

export const mockAddedMovie: IMovie = {
    id: 3,
    budget: 4,
    genres: [
        'genre1',
        'genre2'
    ],
    overview: 'test4',
    poster_path: 'test4',
    release_date: new Date(2021, 1, 4),
    revenue: 4,
    runtime: 4,
    tagline: 'test4',
    title: 'test4',
    vote_average: 4,
    vote_count: 4
};
