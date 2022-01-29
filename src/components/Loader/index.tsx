// Core
import { FC } from 'react';

export const Loader: FC = () => {
    return (
        <section className = 'loader'>
            <span className = 'loader-bars'><span>
            </span></span>
            Загрузка...
        </section>
    );
};
