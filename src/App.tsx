import React from 'react';
import { Footer } from './components/Footer';
import { Logo } from './components/Logo';
import { Home } from './Pages/Home';
import { ErrorBoundary } from './components/ErrorBoundary';
import {
    BrowserRouter as Router,
    Switch,
    Route,
} from 'react-router-dom';
import { MovieDetails } from './Pages/MovieDetails';
import { ErrorPage } from './Pages/ErrorPage';
import { Search } from './Pages/Search';

export const App = (): JSX.Element  => {

    return (
        <ErrorBoundary>
            <Router>
                <Switch>
                    <Route exact path="/">
                        <Home />
                    </Route>
                    <Route path="/film/:id">
                        <MovieDetails />
                    </Route>
                    <Route path="/search/:searchQuery">
                        <Search />
                    </Route>
                    <Route path="/search/">
                        <Home />
                    </Route>
                    <Route path="*">
                        <ErrorPage />
                    </Route>
                </Switch>
                <Footer>
                    <Logo></Logo>
                </Footer>
            </Router>
        </ErrorBoundary>
    );
}
