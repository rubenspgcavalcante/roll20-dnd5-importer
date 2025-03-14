import { RollMessageJSONContent } from "./types";

on("ready", () => {
  log("Hello Roll20");
});

on("chat:message", (msg) => {
  if (msg.type === "rollresult") {
    const contentRoll: RollMessageJSONContent = JSON.parse(msg.content);
    log(`The roll of a ${msg.origRoll} was: ${contentRoll.total}`);
  }

  log(`General message: ${msg.content}`);
});
