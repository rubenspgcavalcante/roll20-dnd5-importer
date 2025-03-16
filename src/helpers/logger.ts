type LogLevel = 'log' | 'info' | 'warn' | 'error';

export const logger = (level: LogLevel, ...args: Parameters<typeof log>) => {
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

  log(
    `[dnd5-importer][${level.toUpperCase()}]:${args.reduce((prev, curr) => `${prev} ${stringfy(curr)}`, '')}`
  );
};
