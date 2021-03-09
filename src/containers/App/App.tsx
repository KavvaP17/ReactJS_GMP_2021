import React from 'react';
import { Header } from '../Header';
import { Footer } from '../Footer';
import { Logo } from '../../components/Logo';
import { Main } from '../Main';

export const App = (): JSX.Element  => (
    <>
        <Header />
        <Main />
        <Footer>
            <Logo></Logo>
        </Footer>
    </>
)
