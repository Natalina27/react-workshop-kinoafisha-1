// Core
import { FC } from 'react';
import { Link } from 'react-router-dom';

// Types
import { IMovie } from '../types';

export const Movie: FC<IPropTypes> = (props) => {
    const { movie } = props;

    return (
        <Link to = { `/movies/${ movie.id }` }>
            <article>
                <h1>{ movie.genre }</h1>
                <img
                    alt = { movie.title }
                    src = { movie.poster }
                />
                <footer>
                    <h1>{ movie.title }</h1>
                    <code>{ movie.rating }</code>
                </footer>
            </article>
        </Link>
    );
};

interface IPropTypes {
    movie: IMovie
}
