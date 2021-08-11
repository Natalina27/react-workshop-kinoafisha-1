// Core
import { useQuery } from 'react-query';

// Instruments
import { api } from '../api';
import { filterStore } from '../lib/filterStore';

// Types
import { IMovie } from '../types';

export const useMovies = () => {
    const query = useQuery<IMovie[]>(
        [ 'moves', filterStore.filter ],
        () => api.getMovies(filterStore.filter),
    );

    return query;
};
