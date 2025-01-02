import styles from "./HowItWorksSection.module.css";

const HowItWorksSection = () => {
    return (
        <section className={styles.howItWorksSection}>
            <section className={styles.howItWorksContainer}>
                <div className={styles.howItWorksButtons}>
                    <article>
                        <h3>Simple shopping ecosystem</h3>
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing
                            elit. Odio adipisci distinctio
                        </p>
                    </article>
                    <article>
                        <h3>Simple shopping ecosystem</h3>
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing
                            elit. Odio adipisci distinctio
                        </p>
                    </article>
                    <article>
                        <h3>Simple shopping ecosystem</h3>
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing
                            elit. Odio adipisci distinctio
                        </p>
                    </article>
                </div>
                <div className={styles.howItWorkImage}>
                    <h2>Here will be the dynamic images..</h2>
                </div>
            </section>
        </section>
    );
};

export default HowItWorksSection;
