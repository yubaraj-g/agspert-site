import { useState, useEffect } from "react";

export type ScreenSizeType = {
  width: number;
  height: number;
};

const window = global;

const useScreenSize = (): boolean => {
  const [screenSize, setScreenSize] = useState<ScreenSizeType>({
    width: window.innerWidth,
    height: window.innerHeight,
  });

  const handleResize = (): void => {
    setScreenSize({
      width: window.innerWidth,
      height: window.innerHeight,
    });
  };

  useEffect(() => {
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const { width } = screenSize;

  if (width >= 1280) return true;
  return false;
};

export default useScreenSize;
