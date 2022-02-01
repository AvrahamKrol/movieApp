// Core
import { FC } from 'react';
import { Link } from 'react-router-dom';

// Constants
import { book } from '../../constants/book';

export const LinkToFilm: FC<IPropTypes> = ({ id, filmName }) => {
    return (
        <Link to = { `${book.films.url}/${id}` }>{ filmName }</Link>
    );
};

interface IPropTypes {
    id: string;
    filmName: string;
}
