import config from "../config.json";

if (config.discord === undefined) {
  throw new Error("config.discord is not set!");
}
if (config.discord.webhook_url === undefined) {
  throw new Error("config.discord.webhook_url is not set!");
}
if (config.discord.emotes === undefined) {
  console.warn("config.discord.emotes is not set!");
}

if (config.twitch === undefined) {
  throw new Error("config.twitch is not set!");
}
if (config.twitch.channel_name === undefined) {
  throw new Error("config.twitch.channel_name is not set!");
}
if (config.twitch.emote_prefix === undefined) {
  throw new Error("config.twitch.emote_prefix is not set!");
}

export { config };
