// Core
import axios from 'axios';

// Configs
import { root } from './config';

export const api = Object.freeze({
    getMovie: async (filmId: string | any) => {
        const { data } = await axios.get(`${root}/movie-details/${filmId}`);

        return data.data;
    },
    getSimilarMovies: (filmId: string) => {
        return axios.get(`${root}/${filmId}/similar`);
    },
    getRecommendationsMovies: (filmId: string) => {
        return axios.get(`${root}/${filmId}/recommendations`);
    },
    getReviewsToMovie: (filmId: string) => {
        return axios.get(`${root}/${filmId}/reviews`);
    },
    getPopularMovies: (page: number) => {
        return axios.get(`${root}/popular-movies?page=${page}`);
    },
    getTrendingMovies: (time: string) => {
        return axios.get(`${root}/trending/movie/${time}`);
    },
    getTopRated: (page: number) => {
        return axios.get(`${root}/top-rated?page=${page}`);
    },
});
