import { ClockHandType } from 'views/clock/hand'

import { BASE, HOURS } from 'core/constants';

const zeroPosition = Math.PI / 2 // so '0' is at the bottom of the clockface
const fullCircle = Math.PI * 2

export const fractionalArcLengthToXY = (fraction: number, center: number, radius: number
): { x: number; y: number } => {
  return {
    x: center - 15 + radius * Math.cos(zeroPosition + fraction * fullCircle),
    y: center + 15 + radius * Math.sin(zeroPosition + fraction * fullCircle),
  };
};

export const canvasManager = function (ctx: CanvasRenderingContext2D) {
  const center = ctx.canvas.clientWidth / 2;

  const circleFromCenter = function (radius: number) {
    ctx.arc(center, center, radius, 0, fullCircle);
    return this;
  };

  const loopAround = function (iterations, callback) {
    for (let i = 0; i < iterations; i++) {
      ctx.arc(center, center, center, zeroPosition, zeroPosition + (fullCircle * i) / iterations);
      callback(ctx, i);
    }
    return this;
  };

  const setStyle = function (styleObject: Pick<CanvasRenderingContext2D, "strokeStyle" & "lineWidth" & "fillStyle" & "font">) {
    ctx.beginPath();

    Object.assign(ctx, styleObject);
    return this;
  };

  const stroke = function () {
    ctx.stroke();
    return this;
  };
  const fill = function () {
    ctx.fill();
    return this;
  };

  return { setStyle, circleFromCenter, loopAround, stroke, fill };
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