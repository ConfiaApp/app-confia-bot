/* eslint-disable no-console */
import { app } from "./app";
import config from "./config";

const server = app(config);

server.then(s => s.listen(config.server.port));
