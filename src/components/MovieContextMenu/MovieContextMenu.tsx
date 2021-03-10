import React from 'react';
import { createUseStyles } from 'react-jss';
import MoreVertIcon from '@material-ui/icons/MoreVert';

const contextMenuOptions = [
    {
        title: 'Edit'
    },
    {
        title: 'Delete'
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
    contextMenuItems: {
        display: 'none'
    }
});

export const MovieContextMenu = (): JSX.Element => {
    const styles = useStyles();
    return (
        <>
            <div className={styles.contextMenuBtn}>
                <MoreVertIcon />
            </div>
            <ul className={styles.contextMenuItems}>
                {contextMenuOptions.map((option, index) => (
                    <li key={index}>{option.title}</li>
                ))}
            </ul>
        </>
    )
}
