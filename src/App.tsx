import React, { useState } from 'react';
import { createUseStyles } from 'react-jss';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { Logo } from './components/Logo';
import { Home } from './Pages/Home';
import { ErrorBoundary } from './components/ErrorBoundary';
import { Modal } from './components/Modal';
import { ModalType } from './components/Modal/Modal';

const useStyles = createUseStyles({
    blurred: {
        filter: 'blur(5px)'
    },
    modal: {
        position: 'fixed',
        top: 0,
        right: 0,
        left: 0,
        bottom: 0,
        backgroundColor: 'rgba(23, 23, 23, 0.9)',
        overflow: 'auto'
    },
    hide: {
        display: 'none'
    }
});

export const App = (): JSX.Element  => {
    const styles = useStyles();
    const [modalIsVisible, setModalVisibility] = useState(false);
    const [modalType, setModalType] = useState<ModalType>(undefined);

    const closeModal = (): void => {
        setModalVisibility(false);
    };

    const openModal = (type: string): void => {
        setModalType(type as ModalType);
        setModalVisibility(true);
    };

    return (
        <ErrorBoundary>
            <div className={modalIsVisible ? styles.blurred : ''}>
                <Header logoIsVisible={!modalIsVisible} openModal={openModal} />
                <Home openModal={openModal} />
                <Footer>
                    <Logo></Logo>
                </Footer>
            </div>
            <div className={modalIsVisible ? styles.modal : styles.hide}>
                <Modal onClose={closeModal} type={modalType} />
            </div>
        </ErrorBoundary>
    );
}
