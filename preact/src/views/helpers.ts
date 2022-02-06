import { ClockHandType } from 'views/clock/hand'

import { BASE, HOURS } from 'core/constants';

const zeroPosition = Math.PI / 2 // so '0' is at the bottom of the clockface
const fullCircle = Math.PI * 2

export const fractionalArcLengthToXY = (fraction: number, center: number, radius: number
): { x: number; y: number } => {
  return {
    x: center + radius * Math.cos(zeroPosition + fraction * fullCircle),
    y: center + radius * Math.sin(zeroPosition + fraction * fullCircle),
  };
};

export const getAngleFromTimeValue = (value, type: ClockHandType) => {
  let maxValue

  if(['minute', 'second'].includes(type)) {
    maxValue = BASE
  } else {
    maxValue = HOURS
  }

  return value / maxValue * 360
}