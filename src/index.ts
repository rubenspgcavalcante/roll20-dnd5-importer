import { logger } from './helpers/logger';
import { APIMessageCall, parseOptions } from './helpers/parseOptions';

on('ready', () => {
  log('Hello Roll20');
});

on('chat:message', (msg) => {
  if (msg.type !== 'api') {
    return;
  }

  const options = parseOptions(msg.content as APIMessageCall);
  logger('chat', 'parsing JSON:', options.json);
});
