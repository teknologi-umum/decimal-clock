import { h } from "preact";
import { useEffect, useRef } from "preact/hooks";

import { PERSECOND, BASE } from "core/constants";
import { getAngleFromTimeValue } from 'views/helpers'

const fullRotationDuration: Record<ClockHandType, number> = {
  second: BASE / PERSECOND.SECOND,
  minute: BASE / PERSECOND.MINUTE,
  hour: BASE / PERSECOND.HOUR,
};

export const ClockHand = ({ type, initialValue = 0 }: ClockHandProps) => {
  const clockHandRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!clockHandRef.current) return;

    clockHandRef.current.animate([
      { transform: `translate(-50%, -50%) rotate(${getAngleFromTimeValue(initialValue, type) + 180}deg)` },
      { transform: `translate(-50%, -50%) rotate(${getAngleFromTimeValue(initialValue, type) + 360 + 180}deg)` },
    ], {
      duration: fullRotationDuration[type] * 1000, // miliseconds
      iterations: Infinity,
    });
  }, [clockHandRef.current]);

  return <div ref={clockHandRef} className={`clock-hand ${type}`}></div>;
};

export type ClockHandType = "second" | "minute" | "hour";

type ClockHandProps = {
  type: ClockHandType;
  initialValue: number;
};
