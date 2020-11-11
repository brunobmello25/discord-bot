import Discord from 'discord.js';

export async function ping(message: Discord.Message): Promise<void> {
  await message.reply('Pong!');
}
