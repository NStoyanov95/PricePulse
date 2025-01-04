import ReactDOM from "react-dom";

import styles from "./Modal.module.css";

const Modal = ({ show, onClose, children }) => {
    if (!show) {
        return null;
    }

    return ReactDOM.createPortal(
        <div className={styles.outer}>
            <div className={styles.inner}>
                <h1>Portal Test</h1>
            </div>
        </div>,
        document.getElementById("portal")
    );
};

export default Modal;
