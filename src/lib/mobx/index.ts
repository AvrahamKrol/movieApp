// Storages
import { TrendingMoviesStore } from './trendingMoviesStore';
import { UIStore } from './uiStore';

class RootStore {
    uiStore: UIStore;
    trendingMoviesStore: TrendingMoviesStore;

    constructor() {
        this.uiStore = new UIStore();
        this.trendingMoviesStore = new TrendingMoviesStore();
    }
}

const rootStore = new RootStore();

export {
    RootStore,
    rootStore,
};
