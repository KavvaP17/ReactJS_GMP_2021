import React from 'react';
import { Header } from '../Header';
import { Footer } from '../Footer';
import { Logo } from '../../components/Logo';

export const App = (): JSX.Element  => (
    <>
        <Header></Header>
        <Footer>
            <Logo></Logo>
        </Footer>
    </>
)
