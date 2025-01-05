import { Link } from "react-router-dom";
import styles from "./Header.module.css";

const Header = () => {
    return (
        <>
            <header className={styles.header}>
                <h2>PricePulse++</h2>
                <nav className={styles.navMenu}>
                    <ul>
                        <li>
                            <Link to="/">Home</Link>
                        </li>
                        <li>
                            <Link to="/catalog">Products</Link>
                        </li>
                        <li>About</li>
                        <li>
                            <Link to="/login">Login</Link>
                        </li>
                    </ul>
                </nav>
            </header>
        </>
    );
};
export default Header;
