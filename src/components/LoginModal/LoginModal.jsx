import { useState } from "react";
import Modal from "../portals/Modal/Modal";

import styles from "./LoginModal.module.css";
import { useNavigate } from "react-router-dom";
import validateFormData from "../../utils/validateFormData";

const LoginModal = () => {
    const navigate = useNavigate();
    const [show, setShow] = useState(true);
    const [formData, setFormData] = useState({
        username: "",
        password: "",
    });
    const [errors, setErrors] = useState({});

    const onClose = () => {
        setShow(false);
        navigate("/");
    };

    const changeHandler = (e) => {
        setFormData((oldState) => ({
            ...oldState,
            [e.target.name]: e.target.value,
        }));
    };

    const handlePropagation = (e) => {
        e.stopPropagation();
    };

    const formErrors = validateFormData(formData);
    const onSubmit = (e) => {
        e.preventDefault();

        if (Object.keys(formErrors).length > 0) {
            setErrors(formErrors);
            return;
        }
        setErrors({});
        console.log(formData);
    };

    return (
        <>
            <Modal show={show} onClose={onClose}>
                <form
                    className={styles.formContainer}
                    onSubmit={onSubmit}
                    onClick={handlePropagation}
                >
                    <div className={styles.closeBtn} onClick={onClose}>
                        x
                    </div>
                    <h2>Sign In</h2>
                    <div className={styles.field}>
                        <input
                            type="text"
                            name="username"
                            id="username"
                            placeholder="Username"
                            value={formData.username}
                            onChange={changeHandler}
                        />
                        <label htmlFor="username">Username</label>
                        {errors.username && (
                            <p className={styles.error}>{errors.username}</p>
                        )}
                    </div>
                    <div className={styles.field}>
                        <input
                            type="password"
                            name="password"
                            id="password"
                            placeholder="Password"
                            value={formData.password}
                            onChange={changeHandler}
                        />
                        <label htmlFor="password">Password</label>
                        {errors.password && (
                            <p className={styles.error}>{errors.password}</p>
                        )}
                    </div>
                    <button>Login</button>
                </form>
            </Modal>
        </>
    );
};

export default LoginModal;
