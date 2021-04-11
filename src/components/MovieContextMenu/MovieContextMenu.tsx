import React, { useRef, useState } from 'react';
import { createUseStyles } from 'react-jss';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import CloseIcon from '@material-ui/icons/Close';
import { Modal } from '../Modal';
import { EditMovieModal } from '../EditMovieModal';
import { DeleteMovieModal } from '../DeleteMovieModal';

type Props = {
    isVisible: boolean,
    onOpen: () => void,
    onClose: () => void,
}

type ContextMenyOption = {
    title: string,
    key: string,
    content: JSX.Element
}

const contextMenuOptions: ContextMenyOption[] = [
    {
        title: 'Edit',
        key: 'edit',
        content: <EditMovieModal />
    },
    {
        title: 'Delete',
        key: 'delete',
        content: <DeleteMovieModal />
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

export const MovieContextMenu = ({isVisible, onOpen, onClose}: Props): JSX.Element => {
    const styles = useStyles();
    const modal = useRef(null);
    const [
        selectedItem,
        setSelectedItem
    ] = useState<ContextMenyOption | null>(null);

    const openModal = (item: ContextMenyOption): void => {
        setSelectedItem(item);
        modal.current.open();
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
                {selectedItem ? selectedItem.content : <></>}
            </Modal>
        </>
    )
}
