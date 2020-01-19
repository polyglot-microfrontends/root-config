import { registerApplication, start } from "single-spa";
import * as isActive from "./activity-functions";

registerApplication(
  "@polyglot-mf/navbar",
  () => System.import("@polyglot-mf/navbar"),
  isActive.navbar
);

start();
