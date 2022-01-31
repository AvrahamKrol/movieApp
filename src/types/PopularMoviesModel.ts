export interface IPopularMoviesModel {
    id: number;
    title: string;
    popularity: number;
    poster_path: string;
    vote_count: number;
    vote_average: number;
    overview: string;
    genres: string[];
    release_date: string;
}
