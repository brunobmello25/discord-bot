import Discord from 'discord.js';
import giphy from '../services/giphy';

export async function randomGif(message: Discord.Message): Promise<void> {
  const word = message.content.split(' ')[1];
  if (!word) return;

  const gifUrl = await giphy.searchGifByWord(word);

  await message.reply(gifUrl);
}
