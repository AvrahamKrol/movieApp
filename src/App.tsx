// Core
import { FC, useEffect } from 'react';
import {
    Routes, Route, Outlet, Navigate,
} from 'react-router-dom';
import { ToastContainer, toast, Slide } from 'react-toastify';
import { observer } from 'mobx-react-lite';

// Components
import {
    Greeting,
} from './pages';

/* Other */
import { useStore } from './hooks';

export const App: FC = observer(() => {
    const { uiStore } = useStore();
    const { errorMessage, resetError } = uiStore;

    useEffect(() => {
        if (errorMessage) {
            const notify = () => toast.error(errorMessage, {
                position:        'top-right',
                autoClose:       7000,
                hideProgressBar: false,
                closeOnClick:    true,
                pauseOnHover:    true,
                draggable:       true,
                progress:        undefined,
            });
            notify();

            resetError();
        }
    }, [errorMessage]);

    return (
        <>
            <ToastContainer newestOnTop transition = { Slide } />

            <Routes>
                <Route path = '/' element = { <Outlet /> }>
                    <Route path = '/' element = { <Greeting /> } />
                </Route>

                <Route path = '*' element = { <Navigate to = '/' /> } />
            </Routes>
        </>
    );
});
