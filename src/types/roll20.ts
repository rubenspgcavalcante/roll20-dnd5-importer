/**
 * This is the resulting value from a JSON.parse
 * of a roll message.
 * @example
 * if(msg.type === 'rollresult') {
 *   const content: RollMessageJSONContent = JSON.parse(msg.content);
 * }
 */
export type RollMessageJSONContent = {
  type: 'V';
  rolls: [
    {
      type: 'R';
      dice: number;
      sides: number;
      mods: Record<string, unknown>;
      rollid: string;
      results: { v: number }[];
    },
  ];
  resultType: 'sum';
  total: number;
};
