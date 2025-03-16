import { logger } from './logger';

type OptionValueMap = {
  json: Record<string, unknown>;
  help: never;
};

type Options = keyof OptionValueMap;

export type APIMessageCall = `!dnd5-importer --${Options} ${string}`;

const optionsRegExp = /\!dnd5\-importer \-\-(.+)\ (\{.*\})/;

export const parseOptions = (msgContent: APIMessageCall) => {
  if (!optionsRegExp.test(msgContent)) {
    logger('info', msgContent, 'does not match the API');
    return;
  }

  try {
    const [_, option, value] = msgContent.match(optionsRegExp);
    return { [option]: JSON.parse(value) as OptionValueMap[Options] };
  } catch (error) {
    logger('error', error);
  }
};
