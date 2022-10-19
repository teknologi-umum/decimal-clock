import { component$, useClientEffect$, useContextProvider, useStore } from '@builder.io/qwik';
import type { DocumentHead } from '@builder.io/qwik-city';

import { default as Clocktime } from "../components/clocktime"
import { default as Digit } from "../components/digit"
import { default as Pins } from "../components/pins"
import { default as Ticks } from "../components/ticks"

import { PContext } from './layout';

export type TStore = {
  date: Date,
  fractionOfDay: number
}

export default component$(() => {

  const digits: number[] = [...Array(10).keys()]

  const store: TStore = useStore({
    date: new Date(),
    fractionOfDay: 0,
  });

  useContextProvider(PContext, store)

  useClientEffect$(() => {
    const update = () => {
      const date = new Date();
      const timeOfDay: number = date.getHours() * 60 * 60 * 1000 +
        date.getMinutes() * 60 * 1000 +
        date.getSeconds() * 1000 +
        date.getMilliseconds();
      store.fractionOfDay = timeOfDay / 86400000;
      requestAnimationFrame(update)
    }
    update()
  });

  return (
    <>
      <h2>Decimal Clock</h2>
      <div id="clock-face">
        {digits.map( digit => (
          <Digit digit={digit} />
        ))}  
        <Pins />
        <Ticks />
      </div>
      <Clocktime />
    </>
  );
});

export const head: DocumentHead = {
  title: 'Welcome to Qwik',
};
