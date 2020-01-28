import bodyParser from "body-parser";
import express from "express";
import Telegraf from "telegraf";
import config from "./config";
import routes from "./routes";

export function app() {
  const server = express();
  /**
   * Middlewares
   */
  server.use(bodyParser.json());
  /**
   * Routes
   */
  server.use(routes);
  return server;
}

export async function bot() {
  const telegraf = new Telegraf(config.bot.token);

  /**
   * Default commands
   */
  telegraf.start(ctx => ctx.reply("Bem vindo ao Confia bot!"));
  /**
   * Team commands
   */
  telegraf.command("/ale", ctx => ctx.reply("😄"));

  /**
   * Handlers
   */
  // TODO: find to specif user -> In query and @username
  // TODO: Send message

  return telegraf.launch();
}
