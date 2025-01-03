import styles from "./HeroSection.module.css";

const HeroSection = () => {
    return (
        <section className={styles.heroSection}>
            <div className={styles.mainHeading}>
                <h1>Lorem ipsum dolor sit amet</h1>
                <h3>
                    necessitatibus provident. Porro accusantium placeat natus
                    debitis laudantium.Lorm ipsum dolor sit amet
                </h3>
            </div>
            <button className={styles.catalogBtn}>Catalog</button>
        </section>
    );
};

export default HeroSection;
