/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable no-param-reassign */
import faker from "faker";

// generator
const generator = (schema, min = 1, max) => {
    max = max || min;
    return Array.from({
        length: faker.random.number({
            min,
            max
        })
    }).map(() => {
        const innerGen = anySchema =>
            Object.keys(anySchema).reduce((entity, key) => {
                if (
                    Object.prototype.toString.call(anySchema[key]) ===
                    "[object Object]"
                ) {
                    entity[key] = innerGen(anySchema[key]);
                    return entity;
                }
                entity[key] = faker.fake(anySchema[key]);
                return entity;
            }, {});

        return innerGen(schema);
    });
};

export default generator;
