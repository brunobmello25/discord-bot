import { Message } from 'discord.js';
import giphy from '../services/giphy';

export async function gif(message: Message, args: string[]) {
  const word = args[0];
  if (!word) return;

  const gifUrl = await giphy.searchGifByWord(word);

  await message.reply(gifUrl);
}
