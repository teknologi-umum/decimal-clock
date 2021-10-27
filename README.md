# Decimal Clock

![clock.svg](https://teknum-bot.fly.dev/decimalclock/svg?nocache=1)

From Wikipedia:

>Decimal time is the representation of the time of day using units which are decimally related. This term is often used specifically to refer to the time system used in France for a few years beginning in 1792 during the French Revolution, which divided the day into 10 decimal hours, each decimal hour into 100 decimal minutes and each decimal minute into 100 decimal seconds (100000 decimal seconds per day), as opposed to the more familiar UTC time standard, which divides the day into 24 hours, each hour into 60 minutes and each minute into 60 seconds (86400 SI seconds per day).

>The main advantage of a decimal time system is that, since the base used to divide the time is the same as the one used to represent it, the whole time representation can be handled as a single string. Therefore, it becomes simpler to interpret a timestamp and to perform conversions. For instance, 1:23:45 is 1 decimal hour and 23 decimal minutes and 45 decimal seconds, or 1.2345 decimal hours, or 123.45 decimal minutes or 12345 decimal seconds; 3 hours is 300 minutes or 30,000 seconds. This property also makes it straightforward to represent a timestamp as a fractional day, so that 2021-08-23.54321 can be interpreted as five decimal hours and 43 decimal minutes and 21 decimal seconds after the start of that day, or a fraction of 0.54321 (54.321%) through that day (which is shortly after traditional 13:00). It also adjusts well to digital time representation using epochs, in that the internal time representation can be used directly both for computation and for user-facing display.

In this repository we maintain multiple implementations of Decimal Clock using various bleeding edge frontend framework.

| Implementation | Demo | Source | Lib |
|----------------|------|--------|-----|
| alpine | [Demo](https://teknologi-umum.github.io/decimal-clock/alpine) | [Source](https://github.com/teknologi-umum/decimal-clock/tree/main/alpine) | [Lib](https://alpinejs.dev/) |
| elm | [Demo](https://teknologi-umum.github.io/decimal-clock/elm/build/) | [Source](https://github.com/teknologi-umum/decimal-clock/tree/main/elm) | [Lib](https://elm-lang.org/) |
| hyperapp | [Demo](https://teknologi-umum.github.io/decimal-clock/hyperapp) | [Source](https://github.com/teknologi-umum/decimal-clock/tree/main/hyperapp) | [Lib](https://github.com/jorgebucaran/hyperapp) |
| jquery | [Demo](https://teknologi-umum.github.io/decimal-clock/jquery) | [Source](https://github.com/teknologi-umum/decimal-clock/tree/main/jquery) | [Lib](https://jquery.com/) |
| petite-vue | [Demo](https://teknologi-umum.github.io/decimal-clock/petite-vue) | [Source](https://github.com/teknologi-umum/decimal-clock/tree/main/petite-vue) | [Lib](https://github.com/vuejs/petite-vue) |
| react-hooks (via CDN) | [Demo](https://teknologi-umum.github.io/decimal-clock/react-hooks/cdn-implementation) | [Source](https://github.com/teknologi-umum/decimal-clock/tree/main/react-hooks/cdn-implementation) | [Lib](https://reactjs.org/) |
| react-hooks (via create-react-app) | [Demo](https://teknologi-umum.github.io/decimal-clock/react-hooks/cra-implementation/build/) | [Source](https://github.com/teknologi-umum/decimal-clock/tree/main/react-hooks/cra-implementation) | [Lib](https://create-react-app.dev/) |
| scarlets-frame | [Demo](https://teknologi-umum.github.io/decimal-clock/scarlets-frame) | [Source](https://github.com/teknologi-umum/decimal-clock/tree/main/scarlets-frame) | [Lib](https://github.com/ScarletsFiction/ScarletsFrame) |
| solidjs | [Demo](https://teknologi-umum.github.io/decimal-clock/solidjs/dist) | [Source](https://github.com/teknologi-umum/decimal-clock/tree/main/solidjs) | [Lib](https://www.solidjs.com/) |
| svelte | [Demo](https://teknologi-umum.github.io/decimal-clock/svelte/public) | [Source](https://github.com/teknologi-umum/decimal-clock/tree/main/svelte) | [Lib](https://svelte.dev/) |
| vanilla | [Demo](https://teknologi-umum.github.io/decimal-clock/vanilla) | [Source](https://github.com/teknologi-umum/decimal-clock/tree/main/vanilla) |
| vue-3-composition-api (via vue cli) | [Demo](https://teknologi-umum.github.io/decimal-clock/vue-3-composition-api/dist) | [Source](https://github.com/teknologi-umum/decimal-clock/tree/main/vue-3-composition-api) | [Lib](https://vuejs.org/) |
| vue-setup (with vite and typescript) | [Demo](https://teknologi-umum.github.io/decimal-clock/vue-setup/dist) | [Source](https://github.com/teknologi-umum/decimal-clock/tree/main/vue-setup) | [Lib](https://vuejs.org/) |
| web-component | [Demo](https://teknologi-umum.github.io/decimal-clock/web-component) | [Source](https://github.com/teknologi-umum/decimal-clock/tree/main/web-component) |

## Contributing

Please put everything from both your `src` and `dist` folder in a subfolder, with tooling files at the root of your implementation subfolder:

```
decimal-clock
+-- react-hook
    +-- dist
    |   +-- index.html
    |   +-- app.js
    +-- src
    |   +-- clock-hand.js
    |   +-- index.js
    +-- package.json
    +-- manifest.json
```

Also include a `manifest.json` file containing:

```
{
  "name": "React with Hooks",
  "srcs": [
    "dist/index.html",
    "src/index.js",
    "src/clock-hand.js"
  ],
  "dist": "dist/index.html"
}
```
