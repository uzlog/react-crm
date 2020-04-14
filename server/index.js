import "colors";
import fastify from "./fastify";
import routes from "./routes";

Object.keys(routes).map(key => {
    return fastify.route(routes[key]);
});

const start = async () => {
    try {
        await fastify.listen(3000);
        // eslint-disable-next-line no-console
        console.log(
            "Api started at:".green,
            `http://${fastify.server.address().address}:${
                fastify.server.address().port
            }`.underline
        );
    } catch (err) {
        fastify.log.error(err);
        process.exit(1);
    }
};
start();
