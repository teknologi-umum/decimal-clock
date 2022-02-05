import { BASE, CENTESIMAL_SECONDS, SEXAGESIMAL_SECONDS } from "core/constants";

export const getCentesimalDate = (date: Date | string) => {
  const midnight = new Date(date);
  midnight.setHours(0, 0, 0, 0);

  const fractionOFToday =
    (new Date(date).getTime() - midnight.getTime()) /
    SEXAGESIMAL_SECONDS /
    1000;

  const secondsNow = fractionOFToday * CENTESIMAL_SECONDS;
  
  const hours = Math.floor(secondsNow / BASE ** 2);
  const minutes = Math.floor((secondsNow - hours * BASE ** 2) / BASE);
  const seconds = secondsNow - hours * BASE ** 2 - minutes * BASE;

  return {
    hours,
    minutes,
    seconds,
  };
};
