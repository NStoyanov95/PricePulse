import styles from "./Home.module.css";

import herobckgrn from "../../assets/herobckgrn.png";

const Home = () => {
    return (
        <>
            <section className={styles.homepageContainer}>
                <section className={styles.heroSection}>
                    <div className={styles.mainHeading}>
                        <h1>Lorem ipsum dolor sit amet</h1>
                        <h3>
                            necessitatibus provident. Porro accusantium placeat
                            natus debitis laudantium.Lorm ipsum dolor sit amet
                        </h3>
                    </div>
                    <button className={styles.catalogBtn}>Catalog</button>
                </section>
                <section className={styles.whyUsSection}>
                    <div className={styles.whyUsCard}>
                        <h3>Lorem ipsum, dasdasd</h3>
                        <p>
                            isksodu djskxni sldjskxni s djskxni sdjskxni swsumc
                            das
                        </p>
                    </div>
                    <div className={styles.whyUsCard}>
                        <h3>Lorem ipsum, dasdasd</h3>
                        <p>
                            isksodu djskxni slwsdjskxni s djskxni sdjskxni sumc
                            das
                        </p>
                    </div>
                    <div className={styles.whyUsCard}>
                        <h3>Lorem ipsum, dasdasd</h3>
                        <p>isksodu djskxni slwsumc djskxni s djskxni sdas</p>
                    </div>
                    <div className={styles.whyUsCard}>
                        <h3>Lorem ipsum, dasdasd</h3>
                        <p>
                            isksodu djskxni slwsumc djskxni s djskxni sdjskxni
                            sdas
                        </p>
                    </div>
                </section>
            </section>
        </>
    );
};

export default Home;
