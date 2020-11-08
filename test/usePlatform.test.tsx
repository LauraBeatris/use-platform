import usePlatform from "../src";
import { renderHook } from "@testing-library/react-hooks";

const platformFlags = ["isIOS", "isLinux", "isWindows", "isAndroid"];

describe("usePlatform", () => {
  it("should support all platforms", () => {
    const { result } = renderHook(() => usePlatform());

    platformFlags.forEach((flag) => {
      expect(result.current).toHaveProperty(flag);
    })
  });
});
