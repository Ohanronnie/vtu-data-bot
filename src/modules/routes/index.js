import { Router } from "express";

const router = Router();
import { userRoutes } from "./user.route.js";
import { webhookRoutes } from "./webhook.route.js";

export const setRoutes = () => {
  router.use("/user", userRoutes());
  router.use("/webhook", webhookRoutes());
  return router;
};
