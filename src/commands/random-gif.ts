import Discord from 'discord.js';

export function randomGif(message: Discord.Message) {
  const word = message.content.split(' ')[1];
  if (!word) return;
}
