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
  return response.json({ ok: true });
});

export default routes;
