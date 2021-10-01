import React, { useEffect, useRef, useState } from "react";
import ReactDOM from "react-dom";
import "./index.css";

const DecimalClock = () => {
  const frameRequest = useRef(null);
  const [date, setDate] = useState(new Date());
  const [fractionOfDay, setFractionOfDay] = useState(null);
  const [timeString, setTimeString] = useState(null);

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

  useEffect(() => {
    const timeOfDay =
      (date.getHours() * 3600 + date.getMinutes() * 60 + date.getSeconds()) *
        1000 +
      date.getMilliseconds();
    setFractionOfDay(timeOfDay / 86400_000);
  }, [date]);

  useEffect(() => {
    setTimeString(
      `${Math.floor(fractionOfDay * 10)}:${Math.floor(
        (fractionOfDay * 1_000) % 100
      )
        .toString()
        .padStart(2, "0")}:${Math.floor((fractionOfDay * 100_000) % 100)
        .toString()
        .padStart(2, "0")}`
    );
  }, [fractionOfDay]);

  return (
    <>
      <h2>Decimal Clock</h2>
      <div id="clock-face">
        {[...Array(10)].map((_, i) => (
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

        {[...Array(100)].map((_, i) => (
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

ReactDOM.render(
  <React.StrictMode>
    <DecimalClock />
  </React.StrictMode>,
  document.getElementById("root")
);
