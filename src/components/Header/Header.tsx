import React, { useRef } from 'react';
import { createUseStyles } from 'react-jss';
import { Logo } from '../Logo';
import { Button } from '../Button';
import { SearchBar } from '../SearchBar';
import { Modal } from '../Modal';
import { AddMovieModal } from '../AddMovieModal';

const useStyles = createUseStyles({
    headerContainer: {
        backgroundImage: 'url(https://www.atomcreativemedia.com/wp-content/uploads/2018/09/orange-and-blue-movies-2.jpg)',
        borderBottom: '10px solid #555555',
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        padding: '20px 5%',
        boxShadow: 'inset 0 0 0 2000px rgb(0 0 0 / 80%)'
    },
    topContainer: {
        display: 'flex',
        justifyContent: 'space-between'

    }
});

export const Header = (): JSX.Element => {
    const styles = useStyles();
    const modal = useRef(null);

    const openAddMovieModal = () => {
        modal.current.open();
    }
    return (
        <>
            <div className={styles.headerContainer}>
                <div className={styles.topContainer}>
                    <Logo />
                    <Button title='+Add movie' color='transparent' clickHandler={openAddMovieModal}/>
                </div>
                <SearchBar />
            </div>
            <Modal ref={modal}>
                <AddMovieModal />
            </Modal>
        </>
    )
}
