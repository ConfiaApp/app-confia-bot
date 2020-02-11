import { Router } from "express";

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

routes.post("/messages", (request, response) => {
  try {
    const { telegraf, body } = request;
    const { message } = body;

    if (!message || typeof message !== "string") {
      return response.status(400).json({ message: "You must send a message" });
    }

    return response.json({ ok: true });
  } catch (error) {
    return response.status(500).json({ error });
  }
});

export default routes;
