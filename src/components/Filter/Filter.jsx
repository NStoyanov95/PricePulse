const Filter = ({ filter, setFilterHandler }) => {
    return (
        <select
            value={filter}
            onChange={(e) => setFilterHandler(e.target.value)}
        >
            <option value="defaultFilter">Default</option>
            <option value="cloth">Clothes</option>
            <option value="electronics">Electronics</option>
        </select>
    );
};

export default Filter;
