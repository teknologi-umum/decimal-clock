import "./style.css";
import {
  animationFrameScheduler,
  observeOn,
  interval,
  fromEvent,
  range,
  map
} from "rxjs";
const clockFace = document.getElementById("clock-face");
const clockTime = document.getElementById("clock-time");

fromEvent(window, "load").subscribe(() => {
  // prepare the clock face
  range(0, 10)
    .pipe(map(toDigitPosition), map(toDigitElement))
    .subscribe((digit) => clockFace.appendChild(digit));

  range(0, 100)
    .pipe(map(toTickProperty), map(toTickElement))
    .subscribe((tick) => clockFace.appendChild(tick));
});

// render on each frame
interval(0)
  .pipe(
    observeOn(animationFrameScheduler),
    map(() => {
      const date = new Date();
      const timeOfDay =
        date.getHours() * 60 * 60 * 1000 +
        date.getMinutes() * 60 * 1000 +
        date.getSeconds() * 1000 +
        date.getMilliseconds();

      return timeOfDay / 86400000;
    })
  )
  .subscribe((fractionOfDay) => {
    renderFace(fractionOfDay);
    renderTime(fractionOfDay);
  });

function toDigitPosition(i) {
  const x = 50 - Math.sin((Math.PI * i) / 5) * 40;
  const y = 50 + Math.cos((Math.PI * i) / 5) * 40;
  return [i, x, y];
}

function toDigitElement([i, x, y]) {
  const digit = document.createElement("div");
  digit.innerText = i.toString();
  digit.className = "digit";
  digit.style.left = `${x}%`;
  digit.style.top = `${y}%`;

  return digit;
}

function toTickProperty(i) {
  return {
    className: i % 10 === 0 ? "large tick" : "tick",
    transform: `rotate(${i * 3.6}deg)`
  };
}

function toTickElement({ className, transform }) {
  const tick = document.createElement("div");
  tick.className = className;
  tick.style.transform = transform;
  return tick;
}

function renderFace(fractionOfDay) {
  // short hand
  let short = document.getElementById("short-hand");
  if (short === null) {
    short = document.createElement("div");
    short.id = "short-hand";
    clockFace.appendChild(short);
  }
  short.style.transform = `rotate(${fractionOfDay * 360 + 180}deg)`;

  // long hand
  let long = document.getElementById("long-hand");
  if (long === null) {
    long = document.createElement("div");
    long.id = "long-hand";
    clockFace.appendChild(long);
  }
  long.style.transform = `rotate(${((fractionOfDay * 10) % 1) * 360 + 180}deg)`;

  // second hand
  let second = document.getElementById("second-hand");
  if (second === null) {
    second = document.createElement("div");
    second.id = "second-hand";
    clockFace.appendChild(second);
  }
  second.style.transform = `rotate(${
    ((fractionOfDay * 1000) % 1) * 360 + 180
  }deg)`;
}

function renderTime(fractionOfDay) {
  const hh = Math.floor(fractionOfDay * 10);
  const mm = Math.floor((fractionOfDay * 10 - hh) * 100);
  const ss = Math.floor((fractionOfDay * 100000) % 100);
  clockTime.innerText = `${hh}:${mm.toString().padStart(2, "0")}:${ss
    .toString()
    .padStart(2, "0")}`;
}
