import { component$ } from '@builder.io/qwik';

type Digit = { digit: number }

export default component$((props: Digit) => {
  return (
    <div
        class="digit"
        style={{
            left: 50 - Math.sin((Math.PI * props.digit) / 5) * 40 + "%",
            top: 50 + Math.cos((Math.PI * props.digit) / 5) * 40 + "%"
        }}>
        {props.digit}
    </div>
  );
});
