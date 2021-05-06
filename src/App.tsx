import React from 'react';
import { Provider } from 'react-redux';
import { Store, Action } from 'redux';
import { Footer } from './components/Footer';
import { Logo } from './components/Logo';
import { Home } from './Pages/Home';
import { ErrorBoundary } from './components/ErrorBoundary';
import {
    BrowserRouter,
    Switch,
    Route,
} from 'react-router-dom';
import { MovieDetails } from './Pages/MovieDetails';
import { ErrorPage } from './Pages/ErrorPage';
import { Search } from './Pages/Search';
import { IState } from './interfaces';
type Props = {
    store: Store<IState, Action>
    Router?: any, // eslint-disable-line @typescript-eslint/no-explicit-any
    location?: string | null,
    context?: any, // eslint-disable-line @typescript-eslint/no-explicit-any
}

export const App = ({
    Router = BrowserRouter,
    location = null,
    context = null,
    store,
}: Props): JSX.Element  => {

    return (
        <Provider store={store}>
            <ErrorBoundary>
                <Router location={location} context={context}>
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
        </Provider>
    );
}
