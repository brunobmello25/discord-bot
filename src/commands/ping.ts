import Discord from 'discord.js';

export function ping(message: Discord.Message) {
  message.reply('Pong!');
}
