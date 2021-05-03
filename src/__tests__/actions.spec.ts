import {
    FILTER_MOVIES,
    MOVIES_LOAD_FAILURE,
    MOVIES_LOAD_SUCCESS,
    MOVIES_SEARCH_FAILURE,
    MOVIES_SEARCH_SUCCESS,
    MOVIE_ADD_FAILURE,
    MOVIE_ADD_SUCCESS,
    MOVIE_DELETE_FAILURE,
    MOVIE_DELETE_SUCCESS,
    MOVIE_EDIT_FAILURE,
    MOVIE_EDIT_SUCCESS,
    SET_SEARCH_QUERY,
    SORT_MOVIES
} from '../action-types';
import {
    addMovie,
    deleteMovie,
    editMovie,
    filterMovies,
    loadMovies,
    searchMovies,
    setQuery,
    sortMovies
} from '../actions/movies';
import { API_URL } from '../config';
import { mockAddedMovie, mockEditMovie, mockMovieList } from '../mock/mock';


describe('movies actions', () => {

    it('load movies success', async() => {
        const mockDispatch = jest.fn();
        const mockFetch = jest.fn().mockImplementation(() => (
            Promise.resolve({
                json: () => Promise.resolve(mockMovieList)
            })
        ));
        const globalRef: any = global;
        globalRef.fetch = mockFetch;
        const mockDispatcher = await loadMovies();
        await mockDispatcher(mockDispatch);

        expect(mockFetch).toHaveBeenCalledWith(`${API_URL}/movies/`);
        expect(mockDispatch).toHaveBeenCalledTimes(2);
        expect(mockDispatch).toHaveBeenLastCalledWith({type: MOVIES_LOAD_SUCCESS, payload: mockMovieList})
    });

    it('load movies failed', async() => {
        const mockError = new Error('test');
        const mockDispatch = jest.fn();
        const mockFetch = jest.fn().mockImplementation(() => Promise.reject(mockError))

        const globalRef: any = global;
        globalRef.fetch = mockFetch;
        const mockDispatcher = await loadMovies();
        await mockDispatcher(mockDispatch);

        expect(mockFetch).toHaveBeenCalledWith(`${API_URL}/movies/`);
        expect(mockDispatch).toHaveBeenCalledTimes(2);
        expect(mockDispatch).toHaveBeenLastCalledWith({type: MOVIES_LOAD_FAILURE, payload: mockError});
    });

    it('search movies success', async() => {
        const mockQuery = 'test';
        const mockDispatch = jest.fn();
        const mockFetch = jest.fn().mockImplementation(() => (
            Promise.resolve({
                json: () => Promise.resolve(mockMovieList)
            })
        ));
        const globalRef: any = global;
        globalRef.fetch = mockFetch;
        const mockDispatcher = await searchMovies(mockQuery);
        await mockDispatcher(mockDispatch);

        expect(mockFetch).toHaveBeenCalledWith(`${API_URL}/movies?search=${mockQuery}&searchBy=title`);
        expect(mockDispatch).toHaveBeenCalledTimes(2);
        expect(mockDispatch).toHaveBeenLastCalledWith({type: MOVIES_SEARCH_SUCCESS, payload: mockMovieList})
    });

    it('search movies failed', async() => {
        const mockQuery = 'test';
        const mockError = new Error('test');
        const mockDispatch = jest.fn();
        const mockFetch = jest.fn().mockImplementation(() => Promise.reject(mockError))

        const globalRef: any = global;
        globalRef.fetch = mockFetch;
        const mockDispatcher = await searchMovies(mockQuery);
        await mockDispatcher(mockDispatch);

        expect(mockFetch).toHaveBeenCalledWith(`${API_URL}/movies?search=${mockQuery}&searchBy=title`);
        expect(mockDispatch).toHaveBeenCalledTimes(2);
        expect(mockDispatch).toHaveBeenLastCalledWith({type: MOVIES_SEARCH_FAILURE, payload: mockError});
    });

    it('set search query', () => {
        const mockQuery = 'test';
        const mockDispatch = jest.fn();
        const mockDispatcher = setQuery(mockQuery);
        mockDispatcher(mockDispatch);

        expect(mockDispatch).toHaveBeenCalledTimes(1);
        expect(mockDispatch).toHaveBeenLastCalledWith({type: SET_SEARCH_QUERY, payload: mockQuery});
    });

    it('set sort', () => {
        const mockSort = 'releaseDate';
        const mockDispatch = jest.fn();
        const mockDispatcher = sortMovies(mockSort);
        mockDispatcher(mockDispatch);

        expect(mockDispatch).toHaveBeenCalledTimes(1);
        expect(mockDispatch).toHaveBeenLastCalledWith({type: SORT_MOVIES, payload: mockSort});
    });

    it('set sort', () => {
        const mockFilter = 'all';
        const mockDispatch = jest.fn();
        const mockDispatcher = filterMovies(mockFilter);
        mockDispatcher(mockDispatch);

        expect(mockDispatch).toHaveBeenCalledTimes(1);
        expect(mockDispatch).toHaveBeenLastCalledWith({type: FILTER_MOVIES, payload: mockFilter});
    });

    it('delete movie success', async() => {
        const mockMovieId = 'id';
        const mockDispatch = jest.fn();
        const mockFetch = jest.fn().mockImplementation(() => (
            Promise.resolve({
                json: () => Promise.resolve(mockMovieList)
            })
        ));
        const globalRef: any = global;
        globalRef.fetch = mockFetch;
        const mockDispatcher = await deleteMovie(mockMovieId);
        await mockDispatcher(mockDispatch);

        expect(mockFetch).toHaveBeenCalledWith(`${API_URL}/movies/${mockMovieId}`, {"method": "DELETE"});
        expect(mockDispatch).toHaveBeenCalledTimes(2);
        expect(mockDispatch).toHaveBeenLastCalledWith({type: MOVIE_DELETE_SUCCESS, payload: mockMovieId})
    });

    it('delete movie failed', async() => {
        const mockMovieId = 'id';
        const mockError = new Error('test');
        const mockDispatch = jest.fn();
        const mockFetch = jest.fn().mockImplementation(() => Promise.reject(mockError))

        const globalRef: any = global;
        globalRef.fetch = mockFetch;
        const mockDispatcher = await deleteMovie(mockMovieId);
        await mockDispatcher(mockDispatch);

        expect(mockFetch).toHaveBeenCalledWith(`${API_URL}/movies/${mockMovieId}`, {'method': 'DELETE'});
        expect(mockDispatch).toHaveBeenCalledTimes(2);
        expect(mockDispatch).toHaveBeenLastCalledWith({type: MOVIE_DELETE_FAILURE, payload: mockError});
    });

    it('edit movie success', async() => {
        const mockDispatch = jest.fn();
        const mockFetch = jest.fn().mockImplementation(() => (
            Promise.resolve({
                json: () => Promise.resolve(mockEditMovie),
                ok: true
            })
        ));
        const globalRef: any = global;
        globalRef.fetch = mockFetch;
        const mockDispatcher = await editMovie(mockEditMovie);
        await mockDispatcher(mockDispatch);

        expect(mockFetch).toHaveBeenCalledWith(`${API_URL}/movies/`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json;charset=utf-8',
            },
            body: JSON.stringify(mockEditMovie)
        });
        expect(mockDispatch).toHaveBeenCalledTimes(2);
        expect(mockDispatch).toHaveBeenLastCalledWith({type: MOVIE_EDIT_SUCCESS, payload: mockEditMovie})
    });

    it('edit movie failed #1', async() => {
        const mockRequestStatus = 'failed';
        const mockDispatch = jest.fn();
        const mockFetch = jest.fn().mockImplementation(() => (
            Promise.resolve({
                json: () => Promise.resolve(mockEditMovie),
                ok: false,
                status: mockRequestStatus
            })
        ));
        const globalRef: any = global;
        globalRef.fetch = mockFetch;
        const mockDispatcher = await editMovie(mockEditMovie);
        await mockDispatcher(mockDispatch);

        expect(mockFetch).toHaveBeenCalledWith(`${API_URL}/movies/`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json;charset=utf-8',
            },
            body: JSON.stringify(mockEditMovie)
        });
        expect(mockDispatch).toHaveBeenCalledTimes(2);
        expect(mockDispatch).toHaveBeenLastCalledWith({type: MOVIE_EDIT_FAILURE, payload: mockRequestStatus})
    });

    it('edit movie failed #2', async() => {
        const mockError = new Error('test');
        const mockDispatch = jest.fn();
        const mockFetch = jest.fn().mockImplementation(() => Promise.reject(mockError))

        const globalRef: any = global;
        globalRef.fetch = mockFetch;
        const mockDispatcher = await editMovie(mockEditMovie);
        await mockDispatcher(mockDispatch);

        expect(mockFetch).toHaveBeenCalledWith(`${API_URL}/movies/`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json;charset=utf-8',
            },
            body: JSON.stringify(mockEditMovie)
        });
        expect(mockDispatch).toHaveBeenLastCalledWith({type: MOVIE_EDIT_FAILURE, payload: mockError});
    });

    it('add movie success', async() => {
        const mockDispatch = jest.fn();
        const mockFetch = jest.fn().mockImplementation(() => (
            Promise.resolve({
                json: () => Promise.resolve(mockAddedMovie),
                ok: true
            })
        ));
        const globalRef: any = global;
        globalRef.fetch = mockFetch;
        const mockDispatcher = await addMovie(mockAddedMovie);
        await mockDispatcher(mockDispatch);

        expect(mockFetch).toHaveBeenCalledWith(`${API_URL}/movies/`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json;charset=utf-8',
            },
            body: JSON.stringify(mockAddedMovie)
        });
        expect(mockDispatch).toHaveBeenCalledTimes(2);
        expect(mockDispatch).toHaveBeenLastCalledWith({type: MOVIE_ADD_SUCCESS, payload: mockAddedMovie})
    });

    it('add movie failed #1', async() => {
        const mockRequestStatus = 'failed';
        const mockDispatch = jest.fn();
        const mockFetch = jest.fn().mockImplementation(() => (
            Promise.resolve({
                json: () => Promise.resolve(mockAddedMovie),
                ok: false,
                status: mockRequestStatus
            })
        ));
        const globalRef: any = global;
        globalRef.fetch = mockFetch;
        const mockDispatcher = await addMovie(mockAddedMovie);
        await mockDispatcher(mockDispatch);

        expect(mockFetch).toHaveBeenCalledWith(`${API_URL}/movies/`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json;charset=utf-8',
            },
            body: JSON.stringify(mockAddedMovie)
        });
        expect(mockDispatch).toHaveBeenCalledTimes(2);
        expect(mockDispatch).toHaveBeenLastCalledWith({type: MOVIE_ADD_FAILURE, payload: mockRequestStatus})
    });

    it('add movie failed #2', async() => {
        const mockError = new Error('test');
        const mockDispatch = jest.fn();
        const mockFetch = jest.fn().mockImplementation(() => Promise.reject(mockError))

        const globalRef: any = global;
        globalRef.fetch = mockFetch;
        const mockDispatcher = await addMovie(mockAddedMovie);
        await mockDispatcher(mockDispatch);

        expect(mockFetch).toHaveBeenCalledWith(`${API_URL}/movies/`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json;charset=utf-8',
            },
            body: JSON.stringify(mockAddedMovie)
        });
        expect(mockDispatch).toHaveBeenLastCalledWith({type: MOVIE_ADD_FAILURE, payload: mockError});
    });
});
