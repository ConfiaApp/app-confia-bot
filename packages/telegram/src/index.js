/* eslint-disable no-console */
import { app, bot } from "./app";
import config from "./config";

const server = app();

server.listen(config.server.port);
bot().catch(e => console.error(e));
