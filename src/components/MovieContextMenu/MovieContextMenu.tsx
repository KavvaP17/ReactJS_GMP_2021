import React from 'react';
import { createUseStyles } from 'react-jss';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import CloseIcon from '@material-ui/icons/Close';

type Props = {
    isVisible: boolean,
    onOpen: () => void,
    onClose: () => void,
    itemClickHandler: (type: string) => void
}

const contextMenuOptions = [
    {
        title: 'Edit',
        key: 'edit'
    },
    {
        title: 'Delete',
        key: 'delete'
    }
]

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

export const MovieContextMenu = ({isVisible,
    onOpen, onClose, itemClickHandler}: Props): JSX.Element => {
    const styles = useStyles();

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
                            onClick={()=>{itemClickHandler(option.key)}}
                            className={styles.menuItem}>
                            {option.title}
                        </li>
                    ))}
                </ul>
            </div>
        </>
    )
}
