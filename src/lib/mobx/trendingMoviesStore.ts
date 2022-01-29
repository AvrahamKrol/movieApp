import { makeAutoObservable } from 'mobx';

class TrendingMoviesStore {
    filmsKey = 'day';

    constructor() {
        makeAutoObservable(this, { }, {
            autoBind: true,
        });
    }

    setFilmsKey(state: string) {
        this.filmsKey = state;
    }

    getFilmsKey() {
        return this.filmsKey;
    }
}

export { TrendingMoviesStore };
