export const HOURS = 10;

export const RATIO = 100

export enum PERSECOND {
  SECOND = 1,
  MINUTE = 1 / RATIO,
  HOUR = 1 / RATIO ** 2,
}
