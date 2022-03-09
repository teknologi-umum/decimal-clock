import React, { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setTimeOfDay } from "./reducer";

const makeArray = (length) => [...Array(length)];

const arrOfTen = makeArray(10);
const arrOfHundred = makeArray(100);
const DecimalClock = () => {
  const dispatch = useDispatch()
  const frameRequest = useRef(null);
  const [date, setDate] = useState(new Date());
  dispatch(setTimeOfDay(date))
  const timeOfDay = useSelector((state) => state.decimal.timeofday)
  const fractionOfDay = timeOfDay / 86400_000;
  const timeString = `${Math.floor(fractionOfDay * 10)}:${Math.floor(
      (fractionOfDay * 1_000) % 100
    )
      .toString()
      .padStart(2, "0")}:${Math.floor((fractionOfDay * 100_000) % 100)
      .toString()
      .padStart(2, "0")}`;

  const update = () => {
    setDate(new Date());
    frameRequest.current = requestAnimationFrame(update);
  };

  useEffect(() => {
    frameRequest.current = requestAnimationFrame(update);

    return () => {
      cancelAnimationFrame(frameRequest.current);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      <h2>Decimal Clock</h2>
      <div id="clock-face">
        {arrOfTen.map((_, i) => (
          <div
            key={i}
            className="digit"
            style={{
              left: 50 - Math.sin((Math.PI * i) / 5) * 40 + "%",
              top: 50 + Math.cos((Math.PI * i) / 5) * 40 + "%",
            }}
          >
            {i}
          </div>
        ))}

        {arrOfHundred.map((_, i) => (
          <div
            key={i}
            className={i % 10 === 0 ? "large tick" : "tick"}
            style={{ transform: `rotate(${i * 3.6}deg)` }}
          />
        ))}

        {timeString !== null && (
          <>
            <div
              id="short-hand"
              style={{ transform: `rotate(${fractionOfDay * 360 + 180}deg)` }}
            />

            <div
              id="long-hand"
              style={{
                transform: `rotate(${
                  ((fractionOfDay * 10) % 1) * 360 + 180
                }deg)`,
              }}
            />

            <div
              id="second-hand"
              style={{
                transform: `rotate(${
                  ((fractionOfDay * 1000) % 1) * 360 + 180
                }deg)`,
              }}
            />
          </>
        )}
      </div>
      {timeString !== null && <h1 id="clock-time">{timeString}</h1>}
    </>
  );
};

export default DecimalClock