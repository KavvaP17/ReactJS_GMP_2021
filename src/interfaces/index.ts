export interface IMovie {
    id?: number;
    budget?: number;
    genres: string[];
    overview: string;
    poster_path: string;
    release_date: Date;
    revenue?: number;
    runtime: number;
    tagline?: string;
    title: string;
    vote_average?: number;
    vote_count?: number;
}

export interface IMovieState {
    movies: IMovie[];
    loading: boolean;
    error: Error | null | undefined;
    filter: IFilter,
    sort: ISort,
    query: string
}

export interface IState {
    moviesState: IMovieState;
}

export interface IAction {
    type: string;
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    payload?: any;
}

export type IFilter = 'all' | 'documentary' | 'comedy' | 'horror' | 'crime';

export type ISort = 'releaseDate' | 'mostPopular';
