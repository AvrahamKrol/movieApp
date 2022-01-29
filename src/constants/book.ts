export const book = Object.freeze({
    root: {
        url: '/',
        key: 'home',
    },
    popularFilms: {
        url: '/popular-films',
        key: 'popular',
    },
    films: {
        url: '/films',
        key: 'films',
    },
    film: {
        url: '/films/:filmId',
        key: 'films',
    },
    topRatedFilms: {
        url: '/top-rated-films',
        key: 'top-rated',
    },
    latestFilms: {
        url: '/latest-films',
        key: 'latest',
    },
});
