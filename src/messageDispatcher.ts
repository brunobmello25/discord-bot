import Discord from 'discord.js';

import { ping, randomGif } from './commands';

export default function messageDispatcher(message: Discord.Message) {
  if (message.content.startsWith('!ping')) return ping(message);

  if (message.content.startsWith('!gif')) return randomGif(message);
}
