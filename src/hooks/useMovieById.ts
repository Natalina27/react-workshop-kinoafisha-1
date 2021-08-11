// Core
import { useQuery } from 'react-query';

// Instruments
import { api } from '../api';

// Types
import { IMovie } from '../types';

export const useMovieById = (id: number) => {
    const query = useQuery<IMovie>(
        [ 'movies', id ],
        () => api.getMovieById(id),
    );

    return query;
};
