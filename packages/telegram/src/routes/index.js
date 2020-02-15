import { Router } from "express";
import * as Yup from 'yup';
const routes = new Router();

/**
 * Health
 */

routes.get("/health", (request, response) => {
  return response.json({ ok: true });
});

/**
 * Messages
 */

routes.post("/messages", 
    async (request, response, next) => {
        try {
            const schema = Yup.object().shape({
                message: Yup.string().required(),
                channel: Yup.string().required()
            });
            const { message, channel } = request.body;
            await schema.validate({message, channel});
            next();
        } catch (error) {
            return response.status(400).json({error})
        }
    },
    async (request, response) => {
        try {
            const { bot, body } = request;
            const { message, channel } = body;
            await bot.telegram.sendMessage(channel, message);
            return response.json({ ok: true });
        } catch (error) {
            return response.status(400).json({ error });
        }
    }
);

export default routes;
