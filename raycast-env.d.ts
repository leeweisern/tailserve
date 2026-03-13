/// <reference types="@raycast/api">

/* 🚧 🚧 🚧
 * This file is auto-generated from the extension's manifest.
 * Do not modify manually. Instead, update the `package.json` file.
 * 🚧 🚧 🚧 */

/* eslint-disable @typescript-eslint/ban-types */

type ExtensionPreferences = {
  /** Port - Port for the OpenCode server */
  "port": string,
  /** Password - Optional password to protect the OpenCode server (passed as OPENCODE_SERVER_PASSWORD) */
  "password"?: string
}

/** Preferences accessible in all the extension's commands */
declare type Preferences = ExtensionPreferences

declare namespace Preferences {
  /** Preferences accessible in the `start` command */
  export type Start = ExtensionPreferences & {}
  /** Preferences accessible in the `stop` command */
  export type Stop = ExtensionPreferences & {}
  /** Preferences accessible in the `status` command */
  export type Status = ExtensionPreferences & {}
}

declare namespace Arguments {
  /** Arguments passed to the `start` command */
  export type Start = {}
  /** Arguments passed to the `stop` command */
  export type Stop = {}
  /** Arguments passed to the `status` command */
  export type Status = {}
}

