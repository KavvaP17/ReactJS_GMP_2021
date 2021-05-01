import { cloneDeep } from 'lodash';
import {
    MOVIES_LOAD_STARTED,
    MOVIES_LOAD_SUCCESS,
    MOVIES_LOAD_FAILURE,
    MOVIE_DELETE_STARTED,
    MOVIE_DELETE_SUCCESS,
    MOVIE_DELETE_FAILURE,
    MOVIE_EDIT_STARTED,
    MOVIE_EDIT_SUCCESS,
    MOVIE_EDIT_FAILURE,
    MOVIE_ADD_STARTED,
    MOVIE_ADD_SUCCESS,
    MOVIE_ADD_FAILURE,
    FILTER_MOVIES,
    SORT_MOVIES,
    MOVIES_SEARCH_STARTED,
    MOVIES_SEARCH_SUCCESS,
    MOVIES_SEARCH_FAILURE,
    SET_SEARCH_QUERY
} from '../action-types';
import { IAction, IMovieState } from '../interfaces';

const initialState: IMovieState = {
    movies: [],
    loading: false,
    error: null,
    filter: 'all',
    sort: 'releaseDate',
    query: ''
};

export const moviesReducer = (state = initialState, action: IAction): IMovieState => {

    switch (action.type) {
        // load movies
        case MOVIES_LOAD_STARTED:
            return {
                ...state,
                loading: true
            };
        case MOVIES_LOAD_SUCCESS:
            return {
                ...state,
                movies: action.payload.data,
                loading: false,
                error: null
            };
        case MOVIES_LOAD_FAILURE:
            return {
                ...state,
                loading: false,
                error: action.payload.error
            };

        // search movies
        case MOVIES_SEARCH_STARTED:
            return {
                ...state,
                loading: true
            };
        case MOVIES_SEARCH_SUCCESS:
            return {
                ...state,
                movies: action.payload.data,
                loading: false,
                error: null
            };
        case MOVIES_SEARCH_FAILURE:
            return {
                ...state,
                loading: false,
                error: action.payload.error
            };

        // set search query
        case SET_SEARCH_QUERY:
            return {
                ...state,
                query: action.payload
            };

        // delete movie
        case MOVIE_DELETE_STARTED:
            return {
                ...state,
                loading: true
            };
        case MOVIE_DELETE_SUCCESS:
            return {
                ...state,
                movies: state.movies.filter((movie) => movie.id !== action.payload),
                loading: false,
                error: null
            };
        case MOVIE_DELETE_FAILURE:
            return {
                ...state,
                loading: false,
                error: action.payload.error
            };

        // edit movie
        case MOVIE_EDIT_STARTED:
            return {
                ...state,
                loading: true
            };
        case MOVIE_EDIT_SUCCESS: {
            const cloneMovies = cloneDeep(state.movies);
            const edtitingMovieIndex = cloneMovies.findIndex(movie => movie.id === action.payload.id);
            if (edtitingMovieIndex !== -1) {
                cloneMovies[edtitingMovieIndex] = action.payload;
            }
            return {
                ...state,
                movies: cloneMovies,
                loading: false,
                error: null
            };
        }
        case MOVIE_EDIT_FAILURE:
            return {
                ...state,
                loading: false,
                error: action.payload.error
            };

        // add movie
        case MOVIE_ADD_STARTED:
            return {
                ...state,
                loading: true
            };
        case MOVIE_ADD_SUCCESS:
            return {
                ...state,
                movies: [...state.movies, action.payload],
                loading: false,
                error: null
            };
        case MOVIE_ADD_FAILURE:
            return {
                ...state,
                loading: false,
                error: action.payload.error
            };

        case FILTER_MOVIES:
            return {
                ...state,
                filter: action.payload
            };

        case SORT_MOVIES:
            return {
                ...state,
                sort: action.payload
            }

        default:
            return state;
    }
};
