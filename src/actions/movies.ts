import { Action, Dispatch } from 'redux';
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
    SORT_MOVIES,
    FILTER_MOVIES
} from '../action-types';

import {
    API_URL
} from '../config';
import { IFilter, IMovie, ISort } from '../interfaces';

export const loadMovies = () => {
    return async (dispatch: Dispatch<Action>): Promise<void> => {
        dispatch({ type: MOVIES_LOAD_STARTED });
        try {
            const response = await fetch(`${API_URL}/movies/`);
            const movies = await response.json();

            dispatch({
                type: MOVIES_LOAD_SUCCESS,
                payload: movies
            });
        } catch (err) {
            dispatch({
                type: MOVIES_LOAD_FAILURE,
                payload: err
            });
        }
    };
};

export const deleteMovie = (movieId: string) => {
    return async (dispatch: Dispatch<Action>): Promise<void> => {
        dispatch({ type: MOVIE_DELETE_STARTED });
        try {
            await fetch(`${API_URL}/movies/${movieId}`, {
                method: 'DELETE'
            });

            dispatch({
                type: MOVIE_DELETE_SUCCESS,
                payload: movieId
            });
        } catch (err) {
            dispatch({
                type: MOVIE_DELETE_FAILURE,
                payload: err
            });
        }
    };
};

export const editMovie = (movie: IMovie) => {
    return async (dispatch: Dispatch<Action>): Promise<void> => {
        dispatch({ type: MOVIE_EDIT_STARTED });
        try {
            const response = await fetch(`${API_URL}/movies/`, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json;charset=utf-8',
                },
                body: JSON.stringify(movie)
            });

            if (response.ok) {
                const editedMovie = await response.json();
                dispatch({
                    type: MOVIE_EDIT_SUCCESS,
                    payload: editedMovie
                });
            } else {
                dispatch({
                    type: MOVIE_EDIT_FAILURE,
                    payload: response.status
                });
            }
        } catch (err) {
            dispatch({
                type: MOVIE_EDIT_FAILURE,
                payload: err
            });
        }
    };
};

export const addMovie = (movie: IMovie) => {
    return async (dispatch: Dispatch<Action>): Promise<void> => {
        dispatch({ type: MOVIE_ADD_STARTED });
        try {
            const response = await fetch(`${API_URL}/movies/`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json;charset=utf-8',
                },
                body: JSON.stringify(movie)
            });

            if (response.ok) {
                const addedMovie = await response.json();
                dispatch({
                    type: MOVIE_ADD_SUCCESS,
                    payload: addedMovie
                });
            } else {
                dispatch({
                    type: MOVIE_ADD_FAILURE,
                    payload: response.status
                });
            }
        } catch (err) {
            dispatch({
                type: MOVIE_ADD_FAILURE,
                payload: err
            });
        }
    };
};

export const sortMovies = (sort: ISort) => {
    return (dispatch: Dispatch<Action>): void => {
        dispatch({
            type: SORT_MOVIES,
            payload: sort
        });
    };
}

export const filterMovies = (filter: IFilter) => {
    return (dispatch: Dispatch<Action>): void => {
        dispatch({
            type: FILTER_MOVIES,
            payload: filter
        });
    };
}

