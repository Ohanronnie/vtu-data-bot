import { catchAsync } from "../../common/utils/errorHandler.js";
import AppError from "../../common/utils/appError.js";
import request from "request";
import { sendMessage, processEvent } from "../../common/utils/helper.js";
export const paymentWebhook = catchAsync(async (req, res) => {
  res.sendStatus(200);
});
export const chatWebook = catchAsync(async (req, res) => {
  let mode = req.query["hub.mode"];
  let token = req.query["hub.verify_token"];
  let challenge = req.query["hub.challenge"];
  console.log(JSON.stringify(req.body, null, 2));
  if (mode && token) {
    if (mode === "subscribe" && token === process.env.VERIFY_TOKEN) {
      res.status(200).send(challenge);
    } else {
      res.sendStatus(403);
    }
  }
  for (let entry of req.body.entry) {
    processEvent(entry);
  }
  res.sendStatus(200);
});
