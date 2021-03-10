import React from 'react';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { Logo } from './components/Logo';
import { Home } from './Pages/Home';

export const App = (): JSX.Element  => (
    <>
        <Header />
        <Home />
        <Footer>
            <Logo></Logo>
        </Footer>
    </>
)
