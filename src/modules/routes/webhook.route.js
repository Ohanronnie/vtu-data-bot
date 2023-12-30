import { Router } from "express";
import {
  chatWebook,
  paymentWebhook,
} from "../controllers/webhook.controller.js";
const router = Router();

export const webhookRoutes = () => {
  /**
   * get user
   */
  router.all("/chat", chatWebook);
  router.all("/payment", paymentWebhook);
  return router;
};
