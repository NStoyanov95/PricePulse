import { useEffect, useState } from "react";

import styles from "./CardContainer.module.css";
import Card from "../Card/Card";
import Filter from "../Filter/Filter";

import { filterLinkUtil } from "../../utils/filterLinkUtil";

const CardContainer = () => {
    const [items, setItems] = useState([]);
    const [filter, setFilter] = useState("defaultFIlter");

    useEffect(() => {
        (async () => {
            const url = filterLinkUtil(filter);
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
                {items.length > 0 ? (
                    items.map((item) => <Card item={item} key={item.id} />)
                ) : (
                    <h1>Nothing to show</h1>
                )}
            </section>
        </>
    );
};

export default CardContainer;
