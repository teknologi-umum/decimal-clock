import { component$, useContext } from '@builder.io/qwik';
import { PContext } from '~/routes/layout';

export default component$(() => {
    const ctx = useContext(PContext)

    return (
        <>
            <div
                id="short-hand"
                style={{ transform: `rotate(${(ctx.fractionOfDay * 360 + 180)}deg)` }}
            ></div>
            <div
                id="long-hand"
                style={{ transform: `rotate(${(ctx.fractionOfDay * 10 % 1 * 360 + 180)}deg)` }}
            ></div>
            <div
                id="second-hand"
                style={{ transform: `rotate(${(ctx.fractionOfDay * 1000 % 1 * 360 + 180)}deg)` }}
            ></div>
        </>
    );
});