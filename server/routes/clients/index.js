import generator from "../../helpers/fakeDataGenerator";

const clientObjects = Array.from({ length: 500 }, () => ({
    name: Math.floor(Math.random() * 500)
}));

const clientsSchema = {
    id: "{{random.number}}",
    name: {
        firstName: "{{name.firstName}}",
        lastName: "{{name.lastName}}"
    },
    contact: {
        address: {
            streetAddress: "{{address.streetAddress}}",
            city: "{{address.city}}",
            zipCode: "{{address.zipCode}}",
            state: "{{address.state}}",
            country: "{{address.country}}"
        },
        phone: "{{phone.phoneNumber}}",
        email: "{{internet.email}}"
    },
    company: "{{company.companyName}}",
    avatar: "{{image.avatar}}"
};

const clientData = generator(clientsSchema, 500, 1000);

const getItems = (offset = 0, limit = 20) => {
    const startIndex = Number(offset); // Page 1 should be 0 (0-19), Page 2 should be 20 (20-40)
    const endIndex = startIndex + Number(limit);

    const paging = {
        items: clientData.length,
        startIndex,
        endIndex: endIndex - 1,
        itemsRemaining:
            clientData.length >= endIndex ? clientData.length - endIndex : 0
    };

    const slicedClients = clientData.slice(startIndex, endIndex);

    return { data: slicedClients, paging };
};

export const clients = {
    method: "GET",
    url: "/clients",
    handler: async request => {
        return getItems(request.query.offset, request.query.limit);
    }
};
