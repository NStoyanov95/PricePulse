export const filterLinkUtil = (filter) => {
    let url = "https://api.escuelajs.co/api/v1/products";
    if (filter === "cloth") {
        url = "https://api.escuelajs.co/api/v1/categories/1/products";
    } else if (filter === "electronics") {
        url = "https://api.escuelajs.co/api/v1/categories/2/products";
    }

    return url;
};
