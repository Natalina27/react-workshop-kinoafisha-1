// Core
import { useState, useEffect } from 'react';

// Instruments
import { api } from '../api';
import { filterStore } from '../lib/filterStore';

// Types
import { IMovie } from '../types';

export const useMovies = () => {
    const [ movies, setMovies ] = useState<IMovie[] | null>(null);

    useEffect(() => {
        const getMoviesByFilter = async () => {
            const newMovies = await api.getMovies(filterStore.filter);

            setMovies(newMovies);
        };

        getMoviesByFilter();
    }, [ filterStore.filter ]);

    return { data: movies };
};
