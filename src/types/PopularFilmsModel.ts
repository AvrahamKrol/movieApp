export interface IPopularFilmsModel {
    id: number;
    title: string;
    popularity: number;
    poster_path: string;
    vote_count: number;
    vote_average: number;
    overview: string;
    genres: string[];
}
