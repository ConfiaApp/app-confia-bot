import bodyParser from "body-parser";
import express from "express";
import Telegraf from "telegraf";
import routes from "./routes";

export async function app({ config }) {
  const server = express();
  const bot = new Telegraf(config.bot.token, {
      telegram: {
          webhookReply: false
      }
  });

  /**
   * Telegram
   */
  bot.start(ctx => ctx.reply("Bem vindo ao Confia bot!"));
  bot.on("message", ctx => ctx.reply("Hello"))
  /**
   * Middlewares
   */
  server.use(bodyParser.json());
  server.use((req, res, next) => {
    req.bot = bot;
    next();
  });
  /**
   * Routes
   */
  
  server.use(routes);
  return [server, bot.launch()];
}
