import { useState } from "react";
import styles from "./HowItWorksSection.module.css";

const HowItWorksSection = () => {
    const [currentImage, setCurrentImage] = useState(
        "https://react-shop-siza.vercel.app/assets/illustration3-Td6aLZcD.svg"
    );

    const imageUrls = [
        "https://react-shop-siza.vercel.app/assets/illustration3-Td6aLZcD.svg",
        "https://react-shop-siza.vercel.app/assets/illustration2-1b2WZaOp.svg",
        "https://react-shop-siza.vercel.app/assets/illustration1-mvQYH-I0.svg",
    ];

    const handleArticleClick = (index) => {
        setCurrentImage(imageUrls[index]);
    };

    return (
        <section className={styles.howItWorksSection}>
            <section className={styles.howItWorksContainer}>
                <div className={styles.howItWorksButtons}>
                    <article onClick={() => handleArticleClick(0)}>
                        <h3>Simple shopping ecosystem</h3>
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing
                            elit. Odio adipisci distinctio
                        </p>
                    </article>
                    <article onClick={() => handleArticleClick(1)}>
                        <h3>Simple shopping ecosystem</h3>
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing
                            elit. Odio adipisci distinctio
                        </p>
                    </article>
                    <article onClick={() => handleArticleClick(2)}>
                        <h3>Simple shopping ecosystem</h3>
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing
                            elit. Odio adipisci distinctio
                        </p>
                    </article>
                </div>
                <div className={styles.howItWorkImage}>
                    <img src={currentImage} alt="pic" />
                </div>
            </section>
        </section>
    );
};

export default HowItWorksSection;
