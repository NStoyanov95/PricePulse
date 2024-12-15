import { useEffect, useState } from "react";

import styles from "./CardContainer.module.css";
import Card from "../Card/Card";

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

    return (
        <>
            <section className={styles.cardContainer}>
                {items.map((item) => (
                    <Card item={item} key={item.id} />
                ))}
            </section>
        </>
    );
};

export default CardContainer;
