// Core
import { useState, useEffect } from 'react';

// Instruments
import { api } from '../../api';

// Types
import { IMovie } from '../../types/movie';

export const useMovieById = (id: number) => {
    const [ movie, setMovie ] = useState<IMovie | null>(null);

    useEffect(() => {
        const getMovieById = async () => {
            const newMovies = await api.getMovieById(id);

            setMovie(newMovies);
        };

        getMovieById();
    }, [ id ]);

    return { data: movie };
};
