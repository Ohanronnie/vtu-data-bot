import { randomBytes } from "crypto";
import request from "request";
/**
 * Generates a random string of the specified length.
 *
 * @param {number} length - The length of the random string to generate.
 * @return {string} - The generated random string.
 */
export function generateRandomString(length) {
  return randomBytes(length).toString("hex");
}
export const sendMessage = (recipientId, message) => {
  request(
    {
      url: "https://graph.facebook.com/v18.0/me/messages",
      qs: {
        access_token: process.env.PAGE_ACCESS_TOKEN,
        message: "Hello world",
      },
      method: "POST",
      json: {
        recipient: { id: recipientId },
        message,
      },
    },
    function (error, response, body) {
      console.log(body);
      if (error) {
        console.log("Error sending message: " + response.error);
      }
    },
  );
};
