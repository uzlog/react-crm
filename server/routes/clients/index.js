const clientObjects = Array.from({ length: 500 }, () => ({
    name: Math.floor(Math.random() * 500)
}));

const getItems = (pageNo, limit = 20) => {
    const startIndex = pageNo * limit;
    const endIndex = startIndex + limit;

    return clientObjects.slice(startIndex, endIndex);
};

export const clients = {
    method: "GET",
    url: "/clients",
    handler: async request => {
        return getItems(request.query.pageNo || 1, request.query.limit);
    }
};
