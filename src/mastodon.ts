import got from "got";
import { config } from "./config";

export const toot = async (message: string) => {
  if (config.mastodon === undefined) return;
  await got.post(`${config.mastodon.host}/api/v1/statuses`, {
    headers: { Authorization: `Bearer ${config.mastodon.access_token}` },
    json: {
      status: message,
    },
  });
  return;
};
