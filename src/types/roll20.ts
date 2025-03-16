/**
 * This is the resulting value from a JSON.parse
 * of a roll message.
 * @example
 * if(msg.type === 'rollresult') {
 *   const content: RollMessageJSONContent = JSON.parse(msg.content);
 * }
 */
export type RollMessageJSONContent = {
  type: 'V' | string;
  rolls: [
    {
      type: 'R' | string;
      dice: number;
      sides: number;
      mods: {};
      rollid: string;
      results: { v: number }[];
    },
  ];
  resultType: 'sum' | string;
  total: number;
};
