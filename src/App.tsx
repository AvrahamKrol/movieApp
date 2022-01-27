// Core
import { FC, useEffect } from 'react';
import {
    Routes, Route, Outlet, Navigate,
} from 'react-router-dom';
import { ToastContainer, toast, Slide } from 'react-toastify';
import { observer } from 'mobx-react-lite';

// Components
import {
    Greeting, FilmDetails,
} from './pages';

/* Other */
import { useStore } from './hooks';

export const App: FC = observer(() => {
    return (
        <>
            <Routes>
                <Route path = '/' element = { <Outlet /> }>
                    <Route path = '/' element = { <Greeting /> } />
                    <Route path = 'movie-details/:id' element = { <FilmDetails /> } />
                </Route>

                <Route path = '*' element = { <Navigate to = '/' /> } />
            </Routes>
        </>
    );
});
