import { useState } from "react";
import Modal from "../portals/Modal/Modal";

import { AiOutlineUser, AiFillLock } from "react-icons/ai";

import styles from "./LoginModal.module.css";
import { useNavigate } from "react-router-dom";
import validateFormData from "../../utils/validateFormData";
import CustomInput from "../CustomInput/CustomInput";

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
                    {Object.keys(errors).length > 0 && (
                        <p className={styles.error}>{errors.message}</p>
                    )}
                    <CustomInput
                        type={"text"}
                        name={"username"}
                        id={"username"}
                        placeholder={"username"}
                        value={formData.username}
                        onChange={changeHandler}
                        label={"username"}
                        icon={<AiOutlineUser />}
                    />
                    <CustomInput
                        type={"password"}
                        name={"password"}
                        id={"password"}
                        placeholder={"password"}
                        value={formData.password}
                        onChange={changeHandler}
                        label={"password"}
                        icon={<AiFillLock />}
                    />
                    <button>Login</button>
                </form>
            </Modal>
        </>
    );
};

export default LoginModal;
