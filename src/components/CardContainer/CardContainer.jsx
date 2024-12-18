import { useEffect, useState } from "react";

import styles from "./CardContainer.module.css";
import Card from "../Card/Card";
import Filter from "../Filter/Filter";

const CardContainer = () => {
    const [items, setItems] = useState([]);
    const [filter, setFilter] = useState("defaultFIlter");

    useEffect(() => {
        (async () => {
            let url = "https://api.escuelajs.co/api/v1/products";
            if (filter === "cloth") {
                url = "https://api.escuelajs.co/api/v1/categories/1/products";
            } else if (filter === "electronics") {
                url = "https://api.escuelajs.co/api/v1/categories/2/products";
            }
            const response = await fetch(url);
            const data = await response.json();
            setItems(data);
        })();
    }, [filter]);

    const setFilterHandler = (filter) => {
        setFilter(filter);
    };

    return (
        <>
            <Filter filter={filter} setFilterHandler={setFilterHandler} />
            <section className={styles.cardContainer}>
                {items.map((item) => (
                    <Card item={item} key={item.id} />
                ))}
            </section>
        </>
    );
};

export default CardContainer;
