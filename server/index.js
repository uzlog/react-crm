import fastify from "./fastify";
import routes from "./routes";

Object.keys(routes).map(key => {
    return fastify.route(routes[key]);
});

const start = async () => {
    try {
        await fastify.listen(3000);
        fastify.log.info(
            `server listening on ${fastify.server.address().port}`
        );
    } catch (err) {
        fastify.log.error(err);
        process.exit(1);
    }
};
start();
