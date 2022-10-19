import { component$, createContext, Slot as MainPage } from '@builder.io/qwik';

import { TStore } from './index';

export const PContext = createContext<TStore>('context')

export default component$(() => {

  return (
    <>
      <MainPage />
    </>
  );
});
