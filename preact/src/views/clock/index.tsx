import { h } from "preact";

import { ClockFace } from "./face";
import { ClockHand } from "./hand";

import { getCentesimalDate } from "core/time";

export const Clock = () => {
  const { hours, minutes, seconds } = getCentesimalDate(new Date())
  return (
    <ClockFace size={500}>
      <ClockHand type="second" initialValue={seconds} />
      <ClockHand type="minute" initialValue={minutes} />
      <ClockHand type="hour" initialValue={hours} />
    </ClockFace>
  );
};

