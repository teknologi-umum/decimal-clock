import { Component, For, Show } from "solid-js";
import { createSignal, onMount, onCleanup } from "solid-js";


const arrOfTen = [...Array(10)]
const arrOfHundred = [...Array(100)]

const App: Component = () => {
  const [date, setDate] = createSignal<Date>(new Date());
  // In Solid.js, you need to call a function to get state.
  // This includes derived state.
  const timeOfDay =  () => (date().getHours() * 3600 + date().getMinutes() * 60 + date().getSeconds()) * 1000 + date().getMilliseconds(); 
  const fractionOfDay = () => timeOfDay() / 86400_000 ;
  const timeString = () => `${Math.floor(fractionOfDay() * 10)}:${Math.floor(
    (fractionOfDay() * 1_000) % 100
  )
    .toString()
    .padStart(2, "0")}:${Math.floor((fractionOfDay() * 100_000) % 100)
    .toString()
    .padStart(2, "0")}`;

  // onMount is similar to useEffect without dependency in React.
  onMount(() => {
    // In Solid.js, ref is not needed here.
    let frame: number;
    const update = () => {
      setDate(new Date())
      frame = requestAnimationFrame(update);
    }
    frame = requestAnimationFrame(update);

    onCleanup(() => {
      cancelAnimationFrame(frame);
    });
  })
  return (
    <>
    <h2>Decimal Clock</h2>
    <div id="clock-face">
    <For each={arrOfTen}>{(_, i) => (
        <div
          className="digit"
          style={{
            left: 50 - Math.sin((Math.PI * i()) / 5) * 40 + "%",
            top: 50 + Math.cos((Math.PI * i()) / 5) * 40 + "%",
          }}
        >
          {i}
        </div>
    )}
    </For>

    <For each={arrOfHundred}>
      {(_, i) => (
        <div
          className={i() % 10 === 0 ? "large tick" : "tick"}
          style={{ transform: `rotate(${i() * 3.6}deg)` }}
        />
      )}
    </For>

    <Show when={timeString() !== null}>
      <>
          <div
            id="short-hand"
            style={{ transform: `rotate(${fractionOfDay() * 360 + 180}deg)` }}
          />

          <div
            id="long-hand"
            style={{
              transform: `rotate(${
                ((fractionOfDay() * 10) % 1) * 360 + 180
              }deg)`,
            }}
          />

          <div
            id="second-hand"
            style={{
              transform: `rotate(${
                ((fractionOfDay() * 1000) % 1) * 360 + 180
              }deg)`,
            }}
          />
        </>
    </Show>
    </div>
    <h1 id="clock-time">{timeString()}</h1>
  </>
  );
};

export default App;
