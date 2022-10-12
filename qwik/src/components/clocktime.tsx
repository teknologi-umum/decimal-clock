import { component$, useContext } from '@builder.io/qwik';
import { PContext } from '~/routes/layout';

export default component$( () => {
    const ctx = useContext(PContext)

    return (
        <h1 id="clock-time">
            {Math.floor(ctx.fractionOfDay * 10)}:
            {Math.floor((ctx.fractionOfDay * 10 - (Math.floor(ctx.fractionOfDay * 10))) * 100)}:
            {Math.floor((ctx.fractionOfDay * 100000) % 100)}
        </h1>
    );
});