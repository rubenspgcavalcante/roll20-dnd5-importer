type Roll20EventName = "ready";

type Roll20OnEventWatcher<
  EventName extends Roll20EventName,
  CallbackArgs extends [] = [],
  CallbackReturn = unknown,
> = (
  event: EventName,
  callback: (...args: CallbackArgs) => CallbackReturn
) => void;

type Roll20OnEventWatcherReady = Roll20OnEventWatcher<"ready">;

declare const on: Roll20OnEventWatcherReady;
