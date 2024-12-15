import styles from "./Card.module.css";

const Card = ({ item }) => {
    return (
        <div className={styles.card}>
            <div className={styles.cardContent}>
                <img src={item.images[0]} alt="img" />
                <h3>{item.title}</h3>
                <p className={styles.description}>
                    Category: {item.category.name}
                </p>
                <div className={styles.cardInfo}>
                    <p>Price: {item.price}$</p>
                    <button>Details</button>
                </div>
            </div>
        </div>
    );
};

export default Card;
