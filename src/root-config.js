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

start();
