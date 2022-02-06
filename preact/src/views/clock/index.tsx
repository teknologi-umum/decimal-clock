import { createContext, h } from "preact";

import { ClockFace } from "./face";
import { ClockHand } from "./hand";

import { getCentesimalDate } from "core/time";
import { useEffect, useState } from "preact/hooks";

export const SizeContext = createContext(0);

const MINIMUM_SIZE = 350;

const fitToWindow = () => {
  const size = Math.min(window.innerWidth, window.innerHeight);

  return Math.max(MINIMUM_SIZE, size) - 40 // 2x20 margin, see style.css body { }
};

export const Clock = () => {
  const [size, setSize] = useState(MINIMUM_SIZE);

  const { hours, minutes, seconds } = getCentesimalDate(new Date());

  useEffect(() => {
    window.addEventListener("resize", () => setSize(fitToWindow));
    
    setSize(fitToWindow)

  }, []);

  return (
    <SizeContext.Provider value={size}>
      <ClockFace>
        <ClockHand type="second" initialValue={seconds} />
        <ClockHand type="minute" initialValue={minutes} />
        <ClockHand type="hour" initialValue={hours} />
      </ClockFace>
    </SizeContext.Provider>
  );
};
