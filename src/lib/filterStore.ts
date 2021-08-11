// Core
import { makeAutoObservable } from 'mobx';

// Types
import { Filter } from '../types/filter';

class FilterStore {
    filter: Filter = 'upcoming';

    constructor() {
        makeAutoObservable(this);
    }

    setFilter(nextFilter: Filter) {
        this.filter = nextFilter;
    }
}

export const filterStore = new FilterStore();
