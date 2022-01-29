// Core
import { matchPath, useLocation } from 'react-router-dom';

// Constants
import { book } from '../constants/book';

export const useCurrentPage = () => {
    const { pathname } = useLocation();

    const appPages = {
        [ book.root.url ]:          book.root.key,
        [ book.films.url ]:         book.films.key,
        [ book.film.url ]:          book.film.key,
        [ book.popularFilms.url ]:  book.popularFilms.key,
        [ book.topRatedFilms.url ]: book.topRatedFilms.key,
        [ book.latestFilms.url ]:   book.latestFilms.key,
    };

    if (matchPath(book.film.url, pathname)) {
        return book.films.key;
    }

    return appPages[ pathname ];
};
