import { useEffect, useState } from "react";

import styles from "./CardContainer.module.css";

const CardContainer = () => {
    const [items, setItems] = useState([]);

    useEffect(() => {
        (async () => {
            const response = await fetch(
                "https://api.escuelajs.co/api/v1/products"
            );
            const data = await response.json();

            setItems(data);
        })();
    }, []);

    console.log(items);

    return (
        <>
            <h1>Card Container</h1>
            <section className={styles.cardContainer}>
                <div className={styles.card}>
                    <div className={styles.cardContent}>
                        <img src="https://i.imgur.com/qNOjJje.jpeg" alt="img" />
                        <h3>Cloth</h3>
                        <p className={styles.description}>Category: Clothes</p>
                        <div className={styles.cardInfo}>
                            <p>Price: 200$</p>
                            <button>Details</button>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default CardContainer;
