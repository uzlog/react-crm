const clientObjects = [
    {
        name: "name 1"
    },
    {
        name: "name 2"
    }
];

export const clients = {
    method: "GET",
    url: "/clients",
    handler: async (request, reply) => {
        return clientObjects;
    }
};
