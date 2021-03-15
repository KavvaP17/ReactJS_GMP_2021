import React from 'react';
import { createUseStyles } from 'react-jss';
import CloseIcon from '@material-ui/icons/Close';
import { Footer } from '../Footer';
import { Logo } from '../Logo';
import { DeleteMovieModal } from '../DeleteMovieModal';
import { AddMovieModal } from '../AddMovieModal';
import { EditMovieModal } from '../EditMovieModal';

export type ModalType = 'delete' | 'edit' | 'add' | undefined;

const useStyles = createUseStyles({
    modal: {
        minHeight: '100%',
        position: 'relative',
        paddingBottom: 70,
        boxSizing: 'border-box'
    },
    logoContainer: {
        padding: '20px 5%'
    },
    modalContent: {
        backgroundColor: '#232323',
        margin: '40px auto',
        width: '60%',
        maxWidth: '700px',
        position: 'relative',
        padding: 40,
        borderRadius: 5
    },
    closeBtn: {
        position: 'absolute',
        top: 10,
        right: 10,
        color: '#ffffff'
    },
    footer: {
        width: '100%',
        position: 'absolute',
        bottom: 0
    }
});

type Props = {
    type: ModalType,
    onClose: () => void
};

export const Modal = ({onClose, type}: Props): JSX.Element => {
    const styles = useStyles();

    const deleteMovie = () => {
        console.log(type);
        onClose();
    }
    let ModalContent: JSX.Element = <></>;

    switch (type) {
        case 'delete':
            ModalContent = <DeleteMovieModal onDelete={deleteMovie} />
            break;
        case 'add':
            ModalContent = <AddMovieModal />
            break;
        case 'edit':
            ModalContent = <EditMovieModal />
            break;
    }

    return (
        <div className={styles.modal}>
            <div className={styles.logoContainer}>
                <Logo />
            </div>
            <div className={styles.modalContent}>
                <div className={styles.closeBtn}>
                    <CloseIcon onClick={onClose}/>
                </div>
                {ModalContent}
            </div>
            <div className={styles.footer}>
                <Footer>
                    <Logo />
                </Footer>
            </div>
        </div>
    )
}
