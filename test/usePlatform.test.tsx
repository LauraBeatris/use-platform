import usePlatform from '../src';

const platformFlags = ["isIOS", "isLinux", "isWindows", "isAndroid"];

describe('usePlatform', () => {
  it('should return flag about all platforms support', () => {
    const payload = usePlatform();

    platformFlags.forEach(() => {
      expect(payload).toHaveProperty("isIOS");
    })
  });
});
