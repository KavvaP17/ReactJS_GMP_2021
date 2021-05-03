import reducer from '../reducers';
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
import {
    initialState,
    mockAddedMovie,
    mockEditMovie,
    mockMovieList
} from '../mock/mock';
import { cloneDeep } from 'lodash';

describe('movies reducer', () => {
    it('should return the initial state', () => {
        const mockAction = {
            type: 'non-existent action'
        };
        expect(reducer(undefined, mockAction).moviesState).toEqual(initialState);
    });

    it(` ${MOVIES_LOAD_STARTED} action should return expected state`, () => {
        const mockAction = {
            type: MOVIES_LOAD_STARTED
        };
        expect(reducer(undefined, mockAction).moviesState).toEqual({
            ...initialState,
            loading: true
        });
    });

    it(` ${MOVIES_LOAD_FAILURE} action should return expected state`, () => {
        const mockError = new Error('error');
        const mockAction = {
            type: MOVIES_LOAD_FAILURE,
            payload: {
                error: mockError
            }
        };
        expect(reducer(undefined, mockAction).moviesState).toEqual({
            ...initialState,
            loading: false,
            error: mockError
        });
    });

    it(` ${MOVIES_LOAD_SUCCESS} action should return expected state`, () => {
        const mockAction = {
            type: MOVIES_LOAD_SUCCESS,
            payload: {
                data: mockMovieList
            }
        };
        expect(reducer(undefined, mockAction).moviesState).toEqual({
            ...initialState,
            loading: false,
            error: null,
            movies: mockMovieList
        });
    });

    it(` ${MOVIES_SEARCH_STARTED} action should return expected state`, () => {
        const mockAction = {
            type: MOVIES_SEARCH_STARTED
        };
        expect(reducer(undefined, mockAction).moviesState).toEqual({
            ...initialState,
            loading: true
        });
    });

    it(` ${MOVIES_SEARCH_FAILURE} action should return expected state`, () => {
        const mockError = new Error('error');
        const mockAction = {
            type: MOVIES_SEARCH_FAILURE,
            payload: {
                error: mockError
            }
        };
        expect(reducer(undefined, mockAction).moviesState).toEqual({
            ...initialState,
            loading: false,
            error: mockError
        });
    });

    it(` ${MOVIES_SEARCH_SUCCESS} action should return expected state`, () => {
        const mockAction = {
            type: MOVIES_SEARCH_SUCCESS,
            payload: {
                data: mockMovieList
            }
        };
        expect(reducer(undefined, mockAction).moviesState).toEqual({
            ...initialState,
            loading: false,
            error: null,
            movies: mockMovieList
        });
    });

    it(` ${SET_SEARCH_QUERY} action should return expected state`, () => {
        const mockQuery = 'test';
        const mockAction = {
            type: SET_SEARCH_QUERY,
            payload: mockQuery
        };
        expect(reducer(undefined, mockAction).moviesState).toEqual({
            ...initialState,
            query: mockQuery
        });
    });

    it(` ${MOVIE_DELETE_STARTED} action should return expected state`, () => {
        const mockAction = {
            type: MOVIES_LOAD_STARTED
        };
        expect(reducer(undefined, mockAction).moviesState).toEqual({
            ...initialState,
            loading: true
        });
    });

    it(` ${MOVIE_DELETE_FAILURE} action should return expected state`, () => {
        const mockError = new Error('error');
        const mockAction = {
            type: MOVIES_LOAD_FAILURE,
            payload: {
                error: mockError
            }
        };
        expect(reducer(undefined, mockAction).moviesState).toEqual({
            ...initialState,
            loading: false,
            error: mockError
        });
    });

    it(` ${MOVIE_DELETE_SUCCESS} action should return expected state`, () => {
        const mockMovieId = 1;
        const mockAction = {
            type: MOVIE_DELETE_SUCCESS,
            payload: mockMovieId
        };
        const mockState = {
            moviesState: {
                ...initialState,
                movies: mockMovieList
            }
        }
        expect(reducer(mockState, mockAction).moviesState).toEqual({
            ...initialState,
            loading: false,
            error: null,
            movies: mockMovieList.filter((movie) => movie.id !== mockMovieId)
        });
    });

    it(` ${MOVIE_EDIT_STARTED} action should return expected state`, () => {
        const mockAction = {
            type: MOVIE_EDIT_STARTED
        };
        expect(reducer(undefined, mockAction).moviesState).toEqual({
            ...initialState,
            loading: true
        });
    });

    it(` ${MOVIE_EDIT_FAILURE} action should return expected state`, () => {
        const mockError = new Error('error');
        const mockAction = {
            type: MOVIE_EDIT_FAILURE,
            payload: {
                error: mockError
            }
        };
        expect(reducer(undefined, mockAction).moviesState).toEqual({
            ...initialState,
            loading: false,
            error: mockError
        });
    });

    it(` ${MOVIE_EDIT_SUCCESS} action should return expected state`, () => {
        const mockAction = {
            type: MOVIE_EDIT_SUCCESS,
            payload: mockEditMovie
        };
        const mockState = {
            moviesState: {
                ...initialState,
                movies: mockMovieList
            }
        };
        const cloneMovies = cloneDeep(mockMovieList);
        const edtitingMovieIndex = cloneMovies.findIndex(movie => movie.id === mockEditMovie.id);
        if (edtitingMovieIndex !== -1) {
            cloneMovies[edtitingMovieIndex] = mockEditMovie;
        }
        expect(reducer(mockState, mockAction).moviesState).toEqual({
            ...initialState,
            loading: false,
            error: null,
            movies: cloneMovies
        });
    });

    it(` ${MOVIE_ADD_STARTED} action should return expected state`, () => {
        const mockAction = {
            type: MOVIE_ADD_STARTED
        };
        expect(reducer(undefined, mockAction).moviesState).toEqual({
            ...initialState,
            loading: true
        });
    });

    it(` ${MOVIE_ADD_FAILURE} action should return expected state`, () => {
        const mockError = new Error('error');
        const mockAction = {
            type: MOVIE_ADD_FAILURE,
            payload: {
                error: mockError
            }
        };
        expect(reducer(undefined, mockAction).moviesState).toEqual({
            ...initialState,
            loading: false,
            error: mockError
        });
    });

    it(` ${MOVIE_ADD_SUCCESS} action should return expected state`, () => {
        const mockAction = {
            type: MOVIE_ADD_SUCCESS,
            payload: mockAddedMovie
        };
        const mockState = {
            moviesState: {
                ...initialState,
                movies: mockMovieList
            }
        };
        expect(reducer(mockState, mockAction).moviesState).toEqual({
            ...initialState,
            loading: false,
            error: null,
            movies: [...mockMovieList, mockAddedMovie]
        });
    });

    it(` ${FILTER_MOVIES} action should return expected state`, () => {
        const mockFilterValue = 'filter';
        const mockAction = {
            type: FILTER_MOVIES,
            payload: mockFilterValue
        };
        expect(reducer(undefined, mockAction).moviesState).toEqual({
            ...initialState,
            filter: mockFilterValue
        });
    });

    it(` ${SORT_MOVIES} action should return expected state`, () => {
        const mockSortValue = 'filter';
        const mockAction = {
            type: SORT_MOVIES,
            payload: mockSortValue
        };
        expect(reducer(undefined, mockAction).moviesState).toEqual({
            ...initialState,
            sort: mockSortValue
        });
    });
});
