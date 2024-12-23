import styles from "./Filter.module.css";

const Filter = ({ filter, setFilterHandler }) => {
    return (
        <div className={styles.filterContainer}>
            <select
                value={filter}
                onChange={(e) => setFilterHandler(e.target.value)}
            >
                <option value="defaultFilter">Default</option>
                <option value="cloth">Clothes</option>
                <option value="electronics">Electronics</option>
            </select>
        </div>
    );
};

export default Filter;
