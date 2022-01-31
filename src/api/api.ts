// Core
import axios, { AxiosResponse } from 'axios';
import { IFilmCard, IFilmDetails, IRecomendedFilms } from '../types';

// Configs
import { root } from './config';

export const api = Object.freeze({
    getMovie: async (filmId: string): Promise<IFilmDetails> => {
        const { data } = await axios.get<AxiosResponse<IFilmDetails>>(`${root}/movie-details/${filmId}`);

        return data?.data;
    },
    getSimilarMovies: async (filmId: string): Promise<IFilmCard[]> => {
        const { data } = await axios.get <AxiosResponse<IFilmCard[]>>(`${root}/${filmId}/similar`);

        return data?.data;
    },
    getRecommendationsMovies: async (filmId: string): Promise<IRecomendedFilms[]> => {
        const { data } = await axios.get<AxiosResponse<IRecomendedFilms[]>>(`${root}/${filmId}/recommendations`);

        return data.data;
    },
    getReviewsToMovie: (filmId: string) => {
        return axios.get(`${root}/${filmId}/reviews`);
    },
    getPopularMovies: (page: number) => {
        return axios.get(`${root}/popular-movies?page=${page}`);
    },

    getTrendingMovies: async (time: string): Promise<IFilmCard[]> => {
        const { data } = await axios.get<AxiosResponse<IFilmCard[]>>(
            `${root}/trending/movie/${time}`,
        );

        return data?.data;
    },
    getTopRated: (page: number) => {
        return axios.get(`${root}/top-rated?page=${page}`);
    },
});
