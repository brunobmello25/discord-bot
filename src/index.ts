import Discord from 'discord.js';
import commandHandler from './commandHandler';
import credentials from './config/credentials.json';

const client = new Discord.Client();

client.login(credentials.loginToken);

client.on('ready', () => console.log('Ready!'));

client.on('message', commandHandler);
