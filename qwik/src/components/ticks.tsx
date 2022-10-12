import { component$ } from '@builder.io/qwik';

export default component$(() => {

  const ticks: number[] = [...Array(100).keys()]
  return (
    <>
      {ticks.map( tick => (
        <div
          class={tick % 10 === 0 ? "large tick" : "tick"}
          style={{ transform: `rotate(${tick * 3.6}deg)`}}
        ></div>
      ))}
    </>
  );
});