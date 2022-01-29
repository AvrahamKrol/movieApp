// Core
import { FC, useEffect } from 'react';
import { Outlet,
    Routes, Route, Navigate,
} from 'react-router-dom';
import { ToastContainer, toast, Slide } from 'react-toastify';
import { observer } from 'mobx-react-lite';

// Components
import {
    FilmDetails,
} from './pages';
import { TopRatedFilmsPage } from './pages/TopRatedFilmsPage';
import { PopularFilmsPage } from './pages/PopularFilmsPage';
import { LatestFilmsPage } from './pages/LatestFilmsPage';
import { TrendFilmsPage } from './pages/TrendFilmsPage';

/* Other */
import { useStore } from './hooks';
import { book } from './constants/book';


export const App: FC = observer(() => {
    return (
        <>
            <Routes>
                <Route path = '/' element = { <Outlet /> }>
                    <Route path = '/' element = { <TrendFilmsPage />  } />
                    <Route path = 'films/:id' element = { <FilmDetails /> } />
                </Route>

                <Route path = { book.root.url } element = {  <TrendFilmsPage /> } />
                <Route path = { book.popularFilms.url } element = { <PopularFilmsPage /> } />
                <Route
                    path = { book.films.url }
                    element = { <Navigate to = { book.topRatedFilms.url } /> } />
                <Route path = { book.film.url } element = { <AboutTheFilmPage /> } />
                <Route path = { book.topRatedFilms.url } element = { <TopRatedFilmsPage /> } />
                <Route path = { book.latestFilms.url } element = { <LatestFilmsPage /> } />

                <Route path = '*' element = { <Navigate to = '/' /> } />
            </Routes>
        </>
    );
});
