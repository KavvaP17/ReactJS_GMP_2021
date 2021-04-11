import React, { useImperativeHandle, useState, useCallback, forwardRef } from 'react';
import { createPortal } from 'react-dom';
import { createUseStyles } from 'react-jss';
import CloseIcon from '@material-ui/icons/Close';
import { Footer } from '../Footer';
import { Logo } from '../Logo';

const modalElement = document.getElementById('modal-root') as Element;

const useStyles = createUseStyles({
    modalWrapper: {
        position: 'fixed',
        top: 0,
        right: 0,
        left: 0,
        bottom: 0,
        backgroundColor: 'rgba(23, 23, 23, 0.9)',
        overflow: 'auto',
        backdropFilter: 'blur(5px)'
    },
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
    children: JSX.Element,
    defaultOpened?: boolean
};

const ModalComponent = ({children, defaultOpened = false}: Props, ref: React.Ref<unknown>): JSX.Element => {
    const styles = useStyles();
    const [isOpen, setIsOpen] = useState(defaultOpened);

    const close = useCallback(() => setIsOpen(false), [])

    useImperativeHandle(ref, () => ({
        open: () => setIsOpen(true),
        close: () => setIsOpen(false),
    }));

    const ModalContent =
        <div className={styles.modalWrapper}>
            <div className={styles.modal}>
                <div className={styles.logoContainer}>
                    <Logo />
                </div>
                <div className={styles.modalContent}>
                    <div className={styles.closeBtn}>
                        <CloseIcon onClick={close} />
                    </div>
                    {children}
                </div>
                <div className={styles.footer}>
                    <Footer>
                        <Logo />
                    </Footer>
                </div>
            </div>
        </div>;

    return createPortal(isOpen ? ModalContent : null, modalElement);
}

export const Modal = forwardRef(ModalComponent);
