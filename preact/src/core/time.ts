import { BASE, CENTESIMAL_SECONDS, SEXAGESIMAL_SECONDS } from "core/constants";

export const getCentesimalDate = (date: Date | string) => {
  const midnight = new Date(date).setHours(0, 0, 0, 0);

  const fractionOFToday =
    (new Date(date).getTime() - midnight) /
    SEXAGESIMAL_SECONDS /
    1000;

  const secondsNow = fractionOFToday * CENTESIMAL_SECONDS;

  const hours = secondsNow / BASE ** 2;
  const minutes = (secondsNow - Math.floor(hours) * BASE ** 2) / BASE;
  const seconds = secondsNow - Math.floor(hours) * BASE ** 2 - Math.floor(minutes) * BASE;

  return {
    hours,
    minutes,
    seconds,
  };
};
