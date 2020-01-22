import { registerApplication, start } from "single-spa";
import * as isActive from "./activity-functions";

registerApplication(
  "@polyglot-mf/navbar",
  () => System.import("@polyglot-mf/navbar"),
  isActive.navbar
);

registerApplication(
  "@polyglot-mf/clients",
  () => System.import("@polyglot-mf/clients"),
  isActive.clients
);

registerApplication(
  "@polyglot-mf/account-settings",
  () => loadWithoutAmd("@polyglot-mf/account-settings"),
  isActive.accountSettings
);

start();

// A lot of angularjs libs are compiled to UMD, and if you don't process them with webpack
// the UMD calls to window.define() can be problematic.
function loadWithoutAmd(name) {
  return Promise.resolve().then(() => {
    let globalDefine = window.define;
    delete window.define;
    return System.import(name).then(module => {
      window.define = globalDefine;
      return module;
    });
  });
}
