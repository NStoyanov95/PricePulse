import { useState } from "react";
import Modal from "../portals/Modal/Modal";

import styles from "./LoginModal.module.css";
import { useNavigate } from "react-router-dom";

const LoginModal = () => {
    const navigate = useNavigate();
    const [show, setShow] = useState(true);
    const [formData, setFormData] = useState({
        username: "",
        password: "",
    });

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

    const onSubmit = (e) => {
        e.preventDefault();
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
                    </div>
                    <button>Login</button>
                </form>
            </Modal>
        </>
    );
};

export default LoginModal;
