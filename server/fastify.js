import Fastify from "fastify";
import cors from "fastify-cors";

export const fastify = Fastify();

fastify.register(cors, { origin: "*" });

export default fastify;
