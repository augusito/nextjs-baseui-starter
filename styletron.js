/* global document */

import { Client, Server } from "styletron-engine-atomic";
import { DebugEngine } from "styletron-react";

export const isServer = typeof window === "undefined";

const getHydrate = () => document.getElementsByClassName("_styletron_hydrate_");

export const styletron = isServer
  ? new Server()
  : new Client({ hydrate: getHydrate() });

export const debug =
  process.env.NODE_ENV === "production" ? void 0 : new DebugEngine();
