<script>
  let date = new Date();
  $: timeOfDay =
    (date.getHours() * 3600 + date.getMinutes() * 60 + date.getSeconds()) *
      1000 +
    date.getMilliseconds();
  $: fractionOfDay = timeOfDay / 86400_000;
  $: timeString = `${Math.floor(fractionOfDay * 10)}:${Math.floor(
    (fractionOfDay * 1_000) % 100
  )
    .toString()
    .padStart(2, "0")}:${Math.floor((fractionOfDay * 100_000) % 100)
    .toString()
    .padStart(2, "0")}`;
  $onMount(() => {
    let frame;
    const update = () => {
      date = new Date();
      frame = requestAnimationFrame(update);
    };
    update();
    return () => {
      cancelAnimationFrame(frame);
    };
  });
</script>

<h1>Decimal Clock</h1>
<div id="clock-face">
  {#each Array(10) as _, i}
    <div
      key={i}
      class="digit"
      style="
        left: {50 - Math.sin((Math.PI * i) / 5) * 40 + '%'}; 
        top: {50 + Math.cos((Math.PI * i) / 5) * 40 + '%'}"
    >
      {i}
    </div>
  {/each}

  {#each Array(100) as _, i}
    <div
      key={i}
      class={i % 10 === 0 ? "large tick" : "tick"}
      style="transform: rotate({i * 3.6}deg)"
    />
  {/each}

  <div
    id="short-hand"
    style="transform: rotate({fractionOfDay * 360 + 180}deg)"
  />

  <div
    id="long-hand"
    style="transform: rotate({((fractionOfDay * 10) % 1) * 360 + 180}deg)"
  />

  <div
    id="second-hand"
    style="transform: rotate({((fractionOfDay * 1000) % 1) * 360 + 180}deg)"
  />
</div>
<h1 id="clock-time">{timeString}</h1>

<style>
  * {
    font-family: sans-serif;
  }
  h1,
  h2 {
    text-align: center;
  }
  #clock-face {
    position: relative;
    width: 70vh;
    height: 70vh;
    border: solid 2vh #888;
    border-radius: 37vh;
    margin: 0 auto;
  }
  #clock-face:before {
    content: "TEKNUM";
    display: block;
    position: absolute;
    font-size: 2.5vh;
    color: #bbb;
    font-weight: 500;
    letter-spacing: 0.3vh;
    text-align: center;
    width: 100%;
    top: 28%;
  }
  #clock-face:after {
    content: "";
    display: block;
    position: absolute;
    width: 4%;
    height: 4%;
    left: 50%;
    top: 50%;
    margin: -2% 0 0 -2%;
    background: #000;
    border-radius: 50%;
  }
  .digit {
    position: absolute;
    font-size: 6vh;
    height: 7vh;
    width: 7vh;
    margin-left: -3.5vh;
    margin-top: -3.5vh;
    text-align: center;
    user-select: none;
  }
  .tick {
    position: absolute;
    width: 0.3%;
    left: 50%;
    margin-left: -0.15%;
    background: #888;
    height: 2%;
    transform-origin: 50% 2500%;
  }
  .large.tick {
    height: 4%;
    transform-origin: 50% 1250%;
  }
  #short-hand {
    position: absolute;
    width: 1%;
    left: 50%;
    top: 27%;
    margin-left: -0.5%;
    background: #000;
    height: 23%;
    transform-origin: 50% 100%;
  }
  #long-hand {
    position: absolute;
    width: 1%;
    left: 50%;
    top: 20%;
    margin-left: -0.5%;
    background: #000;
    height: 30%;
    transform-origin: 50% 100%;
  }
  #second-hand {
    position: absolute;
    width: 0.3%;
    left: 50%;
    top: 18%;
    margin-left: -0.15%;
    background: #000;
    height: 32%;
    transform-origin: 50% 100%;
  }
</style>