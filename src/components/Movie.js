// Core
import { Link } from 'react-router-dom';

export const Movie = ({ movie }) => {
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
