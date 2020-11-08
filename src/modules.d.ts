const [isLinux, isWindows]: Array<() => boolean>;

const [isIOS, isAndroid]: Array<boolean>;

declare module "is-ios" {
  export default isIOS;
}

declare module "is-linux" {
  export default isLinux;
}

declare module "is-android" {
  export default isAndroid;
}

declare module "is-windows" {
  export default isWindows;
}
