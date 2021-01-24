import { Message } from 'discord.js';

import { gif, ping } from './commands';

interface Commands {
  [key: string]: (message: Message, args: string[]) => Promise<void>;
}

const commands: Commands = {
  gif,
  ping,
};

export default async function commandHandler(message: Message) {
  let [command, ...args] = message.content.split(' ');

  if (command.startsWith('!')) {
    command = command.slice(1);

    commands[command](message, args);
  }
}
