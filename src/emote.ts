import { config } from "./config";

/**
 * config.jsonで定義したemoteの文字からDiscordに投稿するためのカスタム絵文字タグを返す
 *
 * @param {string} emote 取得したいemoteの文字列
 * @return {string} Discordのカスタム絵文字タグ
 */
export const emoteResolver = (emote: string): string => {
  const found = config.discord.emotes.find((e) => e.includes(`:${emote}:`));
  if (found === undefined) return emote;

  return found;
};
