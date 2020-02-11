import bodyParser from "body-parser";
import express from "express";
import Telegraf from "telegraf";
import routes from "./routes";

export async function app(config) {
  const server = express();
  const bot = new Telegraf(config.bot.token);

  /**
   * Telegram
   */
  bot.start(ctx => ctx.reply("Bem vindo ao Confia bot!"));
  /**
   * Middlewares
   */
  server.use(bodyParser.json());
  server.use(async (req, res, next) => {
    req.telegraf = bot;
    next();
  });
  /**
   * Routes
   */
  await bot.launch();
  server.use(routes);
  return server;
}
