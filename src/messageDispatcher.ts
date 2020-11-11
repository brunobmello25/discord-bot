import Discord from 'discord.js';

import { ping, randomGif } from './commands';

export default async function messageDispatcher(
  message: Discord.Message,
): Promise<void> {
  if (message.content.startsWith('!ping')) return ping(message);

  if (message.content.startsWith('!gif')) return randomGif(message);
}
