declare module "is-ios" {
  const isIOS: boolean;

  export default isIOS;
}

declare module "is-linux" {
  const isLinux: () => boolean;

  export default isLinux;
}

declare module "is-android" {
  const isAndroid: boolean;

  export default isAndroid;
}

declare module "is-windows" {
  const isWindows: () => boolean;

  export default isWindows;
}
