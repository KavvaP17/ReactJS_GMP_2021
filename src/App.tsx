import React from 'react';
import { Footer } from './components/Footer';
import { Logo } from './components/Logo';
import { Home } from './Pages/Home';
import { ErrorBoundary } from './components/ErrorBoundary';

export const App = (): JSX.Element  => {

    return (
        <ErrorBoundary>
            <Home />
            <Footer>
                <Logo></Logo>
            </Footer>
        </ErrorBoundary>
    );
}
