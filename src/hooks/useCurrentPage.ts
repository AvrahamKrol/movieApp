// Core
import { useEffect, useState } from 'react';
import { matchPath, useLocation, useParams } from 'react-router-dom';

export const useCurrentPage = () => {
    const params = useParams();
    const [filmId, setFilmID] = useState('');
    const { pathname } = useLocation();

    useEffect(() => {
        if (params.id) {
            setFilmID(params.id);
        }
    }, [params]);

    const filmUrl = matchPath(`/films/${filmId}`, pathname);

    return {
        pathname,
        filmUrl,
    };
};
