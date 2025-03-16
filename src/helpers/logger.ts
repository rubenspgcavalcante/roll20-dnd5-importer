type LogType = 'chat' | 'log' | 'info' | 'warn' | 'error';

export const logger = (type: LogType, ...args: Parameters<typeof log>) => {
  const stringfy = (val: any) => {
    // Errors
    if (val?.message) {
      return val.message;
    }

    // Generic Records
    if (typeof val === 'object') {
      return JSON.stringify(val, null, 2);
    }

    // Other primitives
    if (val?.toString) {
      return val.toString();
    }

    // Last resort
    return val;
  };

  const tag = `[dnd5-importer]`;
  const message = `${args.reduce((prev, curr) => `${prev} ${stringfy(curr)}`, '')}`;

  if (type === 'chat') {
    sendChat(tag, message);
    return;
  }

  log(`${tag}[${type.toUpperCase()}]:${message}`);
};
