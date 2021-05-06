import React, { useRef } from 'react';
import { createUseStyles } from 'react-jss';
import { Logo } from '../Logo';
import { Button } from '../Button';
import { SearchBar } from '../SearchBar';
import { Modal } from '../Modal';
import { AddMovieModal } from '../AddMovieModal';
import { connect } from 'react-redux';
import {
    addMovie,
} from '../../actions/movies';
import { get } from 'lodash';
import { Link } from 'react-router-dom';

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

    },
    logoContainer : {
        textDecoration : 'none'
    }
});

type Props = {
    addMovie: () => Promise<void>
};

export const HeaderElement = ({ addMovie }: Props): JSX.Element => {
    const styles = useStyles();
    const modal = useRef(null);

    const openModal = () => {
        const modalOpenHandler = get(modal, 'current.open');
        modalOpenHandler && modalOpenHandler();
    }

    const closeModal = () => {
        const modalCloseHandler = get(modal, 'current.close');
        modalCloseHandler && modalCloseHandler();
    }
    return (
        <>
            <div className={styles.headerContainer}>
                <div className={styles.topContainer}>
                    <Link className={styles.logoContainer} to={'/'}>
                        <Logo />
                    </Link>
                    <Button title='+Add movie' color='transparent' clickHandler={openModal}/>
                </div>
                <SearchBar />
            </div>
            {typeof window !== 'undefined'? (
                <Modal ref={modal}>
                    <AddMovieModal addMovie={addMovie} closeModal={closeModal}/>
                </Modal>) : null
            }
        </>
    )
}

const mapDispatchToProps = {
    addMovie
}

export const Header = connect(null, mapDispatchToProps)(HeaderElement);
