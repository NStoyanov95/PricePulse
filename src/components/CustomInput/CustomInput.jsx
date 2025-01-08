import styles from "./CustomInput.module.css";

const CustomInput = ({
    type,
    name,
    id,
    placeholder,
    value,
    onChange,
    label,
    icon,
}) => {
    return (
        <>
            <div className={styles.field}>
                <div className={styles.icon}>{icon}</div>
                <input
                    type={type}
                    name={name}
                    id={id}
                    placeholder={placeholder}
                    value={value}
                    onChange={onChange}
                />
                <label htmlFor={label}>{label}</label>
            </div>
        </>
    );
};

export default CustomInput;
