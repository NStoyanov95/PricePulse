import styles from "./Header.module.css";

const Header = () => {
    return (
        <>
            <header className={styles.header}>
                <h2>PricePulse++</h2>
                <nav className={styles.navMenu}>
                    <ul>
                        <li>Home</li>
                        <li>Products</li>
                        <li>About</li>
                    </ul>
                </nav>
            </header>
        </>
    );
};
export default Header;
