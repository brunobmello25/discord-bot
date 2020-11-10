import Discord from 'discord.js';

import { ping } from '../commands';

import credentials from '../config/credentials.json';

const client = new Discord.Client();

client.login(credentials.loginToken);

client.on('ready', () => console.log('Ready!'));

client.on('message', dispatchMessageToCommand);

function dispatchMessageToCommand(message: Discord.Message) {
  if (message.content.includes('!ping')) return ping(message);
}
