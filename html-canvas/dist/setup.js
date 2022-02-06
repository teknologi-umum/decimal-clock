/* Constants */

const BASE = 100;
const HOURS = 10;

const SEXAGESIMAL_SECONDS = 86400;
const CENTESIMAL_SECONDS = HOURS * BASE * BASE;

/* Setup clockface */

let size = 500;
const radius = size / 2;
const center = size / 2;

const handLengths = [radius * 0.6, radius * 0.45, radius * 0.35];

const fullCircle = Math.PI * 2;
const zeroPosition = Math.PI / 2; // so '0' is at bottom of clockface

const clockFace = document.getElementById("clock");
const ctx = clockFace.getContext("2d");

clockFace.width = size;
clockFace.height = size;

/* Helper functions */

function fractionalArcLengthToXY(fraction, radius) {
  return {
    x: center + radius * Math.cos(zeroPosition + fraction * fullCircle),
    y: center + 10 + radius * Math.sin(zeroPosition + fraction * fullCircle),
  };
}

function canvasManager(ctx) {
  const circleFromCenter = function (radius) {
    ctx.arc(center, center, radius, 0, fullCircle);
    return this;
  };

  const lineToCenter = function () {
    ctx.lineTo(center, center);
    return this;
  };

  const loopAround = function (iterations, callback, r = radius) {
    if (Array.isArray(iterations)) {
      for (let i = 0; i < iterations.length; i++) {
        ctx.arc(center, center, r[i], iterations[i], iterations[i]);
        callback(this, i);
      }
      return this;
    }

    for (let i = 0; i < iterations; i++) {
      ctx.arc( center, center, r, zeroPosition, zeroPosition + (fullCircle * i) / iterations);
      callback(this, i);
    }
    return this;
  };

  const setStyle = function (styleObject) {
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

  return {
    circleFromCenter,
    lineToCenter,
    loopAround,
    setStyle,
    stroke,
    fill,
  };
}

function getCentesimalDate(date = new Date()) {
  const midnight = new Date(date).setHours(0, 0, 0, 0);

  const fractionOFToday = (new Date(date).getTime() - midnight) / SEXAGESIMAL_SECONDS / 1000;

  const secondsNow = fractionOFToday * CENTESIMAL_SECONDS;

  const hours = secondsNow / BASE ** 2;
  const minutes = (secondsNow - Math.floor(hours) * BASE ** 2) / BASE;
  const seconds = secondsNow - Math.floor(hours) * BASE ** 2 - Math.floor(minutes) * BASE;

  return {
    hours: (hours / HOURS) * Math.PI * 2 + Math.PI / 2,
    minutes: (minutes / BASE) * Math.PI * 2 + Math.PI / 2,
    seconds: (seconds / BASE) * Math.PI * 2 + Math.PI / 2,
  };
}
