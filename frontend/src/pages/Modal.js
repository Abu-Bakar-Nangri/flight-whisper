import React from 'react';
import CSS from './Modal.module.css';

const Modal = ({ show, onClose, children }) => {
    if (!show) return null;

    return (
        <div className={CSS.modalOverlay}>
            <div className={CSS.modalContent}>
                <button onClick={onClose} className={CSS.closeButton}>×</button>
                {children}
            </div>
        </div>
    );
};

export default Modal;
