import type { Component } from "solid-js";
import { createSignal } from "solid-js";

const App: Component = () => {
  const frameRequest: null = null;
  const [date, setDate] = createSignal<Date>(new Date());
  // In Solid.js, you need to call a function to get state.
  const timeOfDay =  () => (date().getHours() * 3600 + date().getMinutes() * 60 + date().getSeconds()) * 1000 + date().getMilliseconds(); 
  const fractionOfDay = () => timeOfDay() / 86400_000 ;
  const timeToString = () => `${Math.floor(fractionOfDay() * 10)}:${Math.floor(
    (fractionOfDay() * 1_000) % 100
  )
    .toString()
    .padStart(2, "0")}:${Math.floor((fractionOfDay() * 100_000) % 100)
    .toString()
    .padStart(2, "0")}`;
  return (
    <div></div>
  );
};

export default App;
