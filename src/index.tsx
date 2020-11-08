import { useMemo } from "react";
import isIOS from "is-ios";
import isLinux from "is-linux";
import isAndroid from "is-android";
import isWindows from "is-windows";

import { UsePlatformPayload } from "./types";

/**
 * Modern mac computers return the following navigator: MacIntel
 *
 * But the old ones return:
 * - Mac68K Macintosh 68K system.
 * - MacPPC Macintosh PowerPC system.
 *
 * So we should always check for the "MAC" string in order to detect
 * an Mac device
 */
const isMac = navigator
  .platform
  .toUpperCase()
  .includes("MAC");

/**
 * Returns an object with user agent platform flags
 */
const usePlatform = () => useMemo<UsePlatformPayload>(() => ({
  isIOS,
  isMac,
  isLinux: isLinux(),
  isWindows: isWindows(),
  isAndroid,
}), []);

export default usePlatform;
