import { ChatClient } from "dank-twitch-irc";
import { post } from "./webhook";
import { config } from "./config";
import { emoteResolver } from "./emote";

const client = new ChatClient();

client.on("ready", () => console.log("Successfully connected to chat"));
client.on("close", (error) => {
  if (error != null) {
    console.error("Client closed due to error", error);
  }
});

client.on("PRIVMSG", (msg) => {
  const name = (() => {
    const { displayName, senderUsername } = msg;
    if (
      displayName === senderUsername ||
      displayName.toLowerCase() === senderUsername
    ) {
      return displayName;
    }

    return `${displayName} (${senderUsername})`;
  })();

  const body = msg.messageText
    .replace(/<(.+)>/g, "`<$1>`")
    .replace(
      new RegExp(`(${config.twitch.emote_prefix}\\w+)`, "g"),
      (match, p1) => emoteResolver(p1)
    );

  console.log(`[#${msg.channelName}] ${name}: ${msg.messageText}`);
  // console.log(msg);
  post(body, {
    username: name,
    avatarURL:
      "https://vercel-redirect-to.vercel.app/api/?url=https://decapi.me/twitch/avatar/" +
      msg.senderUsername,
  });
});

client.connect();
client.join(config.twitch.channel_name);
