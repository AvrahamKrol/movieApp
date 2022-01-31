export interface IFilmDetails {
    id: number,
    title: string,
    poster_path: string,
    release_date: string,
    revenue: number,
    budget: number,
    status: string,
    popularity: number,
    overview: string,
    genres: string[],
    vote_count: number,
    vote_average: number,
}
export type IRecomendedFilms = Omit<IFilmDetails,
'status' | 'budget' | 'revenue' | 'genres'>;

export interface IReview {
    id: number,
    author: number,
    content: number,
}
