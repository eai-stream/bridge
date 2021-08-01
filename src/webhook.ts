import Discord, { WebhookMessageOptions } from "discord.js";
import { config } from "./config";

const [id, token] = config.discord.webhook_url.split("/").slice(-2);
const hook = new Discord.WebhookClient(id, token);

export const post = (body: string, options?: WebhookMessageOptions) => {
  const mergedOptions = { ...options };
  // console.log(mergedOptions);

  return hook.send(body, mergedOptions);
};
