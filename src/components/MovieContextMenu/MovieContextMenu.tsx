import React, { useRef, useState } from 'react';
import { createUseStyles } from 'react-jss';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import CloseIcon from '@material-ui/icons/Close';
import { Modal } from '../Modal';
import { EditMovieModal } from '../EditMovieModal';
import { DeleteMovieModal } from '../DeleteMovieModal';
import { IMovie } from '../../interfaces';
import {
    deleteMovie,
    editMovie
} from '../../actions/movies';
import { get } from 'lodash';
import { connect } from 'react-redux';

type Props = {
    isVisible: boolean,
    movie: IMovie,
    deleteMovie: (movieId: number | undefined) => Promise<void>,
    editMovie: () => Promise<void>,
    onOpen: () => void,
    onClose: () => void,
}

type ContextMenyOption = {
    title: string,
    key: string
}

const contextMenuOptions: ContextMenyOption[] = [
    {
        title: 'Edit',
        key: 'edit'
    },
    {
        title: 'Delete',
        key: 'delete'
    }
];

const useStyles = createUseStyles({
    contextMenuBtn: {
        display: 'inline-block',
        height: 25,
        width: 25,
        padding: 5,
        color: '#ffffff',
        backgroundColor: '#232323',
        fontSize: 24,
        borderRadius: '100%'

    },
    contextMenuConteiner: {
        backgroundColor: '#232323',
        color: '#ffffff',
        borderRadius: '5px'
    },
    closeBtn: {
        fontSize: 12,
        position: 'absolute',
        top: 5,
        right: 5
    },
    contextMenuItems: {
        width: 150,
        padding: '30px 0 10px'

    },
    menuItem: {
        cursor: 'pointer',
        padding: '10px',

        '&:hover': {
            backgroundColor: '#f65261'
        }
    },
    hide: {
        display: 'none!important'
    },
    show: {
        display: 'block!important'
    }
});

export const MovieContextMenuElement = ({
    isVisible,
    movie,
    onOpen,
    onClose,
    deleteMovie,
    editMovie
}: Props): JSX.Element => {
    const styles = useStyles();
    const modal = useRef(null);
    const [
        selectedItem,
        setSelectedItem
    ] = useState<ContextMenyOption | null>(null);

    const openModal = (item: ContextMenyOption): void => {
        setSelectedItem(item);
        const modalOpenHandler = get(modal, 'current.open');
        modalOpenHandler && modalOpenHandler();
    }

    const closeModal = (): void => {
        const modalCloseHandler = get(modal, 'current.close');
        modalCloseHandler && modalCloseHandler();
    }

    const getModalContent = (): JSX.Element => {
        switch (get(selectedItem, 'key')) {
            case 'delete':
                return <DeleteMovieModal movieId={movie.id} closeModal={closeModal} deleteMovie={deleteMovie}/>;
            case 'edit':
                return <EditMovieModal movie={movie} closeModal={closeModal} editMovie={editMovie}/>;
            default:
                return <></>
        }
    }

    return (
        <>
            <div className={`${styles.contextMenuBtn} ${isVisible ? styles.hide : styles.show}`}
                onClick={onOpen}>
                <MoreVertIcon />
            </div>
            <div className={`${isVisible ? styles.show : styles.hide} ${styles.contextMenuConteiner}`}>
                <div className={styles.closeBtn}>
                    <CloseIcon onClick={onClose}/>
                </div>
                <ul className={styles.contextMenuItems}>
                    {contextMenuOptions.map((option) => (
                        <li key={option.key}
                            onClick={()=>{openModal(option)}}
                            className={styles.menuItem}>
                            {option.title}
                        </li>
                    ))}
                </ul>
            </div>
            <Modal ref={modal}>
                {getModalContent()}
            </Modal>
        </>
    )
}

const mapDispatchToProps = {
    deleteMovie,
    editMovie
}

export const MovieContextMenu = connect(null, mapDispatchToProps)(MovieContextMenuElement);
