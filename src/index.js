/* Core */
import { render } from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import { QueryClientProvider, QueryClient } from 'react-query';
import { ReactQueryDevtools } from 'react-query/devtools';

/* Components */
import { App } from './App';

/* Instruments */
import './theme/init.scss';

const client = new QueryClient();

render(
    <Router>
        <App />
    </Router>,
    document.getElementById('root'),
);
