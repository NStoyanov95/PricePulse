import ReactDOM from "react-dom";

import styles from "./Modal.module.css";

const Modal = ({ show, onClose, children }) => {
    if (!show) {
        return null;
    }

    return ReactDOM.createPortal(
        <div className={styles.outer} onClick={onClose}>
            <div className={styles.inner}>{children}</div>
        </div>,
        document.getElementById("portal")
    );
};

export default Modal;
