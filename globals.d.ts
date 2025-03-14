type Roll20EventName = "ready" | "chat:message";

type Roll20OnEventWatcherType<
  EventName extends Roll20EventName,
  CallbackArgs extends unknown[] = [],
  CallbackReturn = void,
> = (
  event: EventName,
  callback: (...args: CallbackArgs) => CallbackReturn
) => void;

type GeneralMessage = {
  content: string;
  playerid: string;
  type: "general";
  who: string;
};

type RollMessage = {
  content: string;
  origRoll: `${number}d${number}`;
  playerid: string;
  signature: string;
  tdseed: number;
  timestamp: number;
  type: "rollresult";
  who: string;
};

type Message = GeneralMessage | RollMessage;

type Roll20OnEventWatcher = Roll20OnEventWatcherType<"ready", []> &
  Roll20OnEventWatcherType<"chat:message", [Message]>;

declare const on: Roll20OnEventWatcher;

declare const log: (...entries: (string | Record<string, unknown>)[]) => void;
