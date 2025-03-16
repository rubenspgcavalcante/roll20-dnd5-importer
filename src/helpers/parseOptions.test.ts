import { parseOptions } from './parseOptions';

const mockedLogger = jest.fn();

jest.mock('./logger', () => ({
  ...jest.requireActual('./logger'),
  logger: (...args: unknown[]) => mockedLogger(...args),
}));

describe('parseOptions', () => {
  it('Should receive a message containing options and return as map', () => {
    const jsonContent = { id: 123, name: 'simple-test' };

    const result = parseOptions(
      `!dnd5-importer --json ${JSON.stringify(jsonContent)}`
    );

    expect(result).toMatchObject(
      expect.objectContaining({
        json: jsonContent,
      })
    );
  });

  it('Should log an info when a malformated option is given', () => {
    const content = `!dnd5-importer --json `;
    const result = parseOptions(content);

    expect(result).toBeUndefined();
    expect(mockedLogger).toHaveBeenCalledWith(
      'info',
      content,
      'does not match the API'
    );
  });

  it('Should log an error when malformated value is given', () => {
    const result = parseOptions(`!dnd5-importer --json { 123 }`);

    expect(result).toBeUndefined();
    expect(mockedLogger).toHaveBeenCalledWith('error', expect.any(Object));
  });
});
