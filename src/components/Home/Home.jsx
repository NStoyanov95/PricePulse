import styles from "./Home.module.css";

import HeroSection from "./HeroSection/HeroSection";
import WhyUsSection from "./WhyUsSection/WhyUsSection";
import HowItWorksSection from "./HowItWorksSection/HowItWorksSection";

const Home = () => {
    return (
        <>
            <section className={styles.homepageContainer}>
                <HeroSection />
                <WhyUsSection />
                <HowItWorksSection />
            </section>
        </>
    );
};

export default Home;
