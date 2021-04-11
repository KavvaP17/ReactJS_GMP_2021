import React from 'react';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { Logo } from './components/Logo';
import { Home } from './Pages/Home';
import { ErrorBoundary } from './components/ErrorBoundary';

export const App = (): JSX.Element  => {

    return (
        <ErrorBoundary>
            <Header />
            <Home />
            <Footer>
                <Logo></Logo>
            </Footer>
        </ErrorBoundary>
    );
}
