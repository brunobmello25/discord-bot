import { Message } from 'discord.js';

export async function ping(message: Message, args: string[]) {
  await message.reply('Pong!');
}
