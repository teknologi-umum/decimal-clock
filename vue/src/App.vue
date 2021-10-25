<script setup lang="ts">
import { onMounted, onUnmounted, ref, computed, provide } from 'vue';
import Tens from './components/Tens.vue';
import Hundreds from './components/Hundreds.vue';

provide('arrOfHundreds', [...Array(100)]);
provide('arrOfTens', [...Array(10)]);

const date = ref<Date>(new Date());

const timeOfDay = computed<number>(() =>
  (date.value.getHours() * 3600 + date.value.getMinutes() * 60 + date.value.getSeconds())
    * 1000 + date.value.getMilliseconds());
const fractionOfDay = computed<number>(() => timeOfDay.value / 86_400_000);
const timeString = computed<string>(() => 
  `${Math.floor(fractionOfDay.value * 10)}:${Math.floor(
    (fractionOfDay.value * 1_000) % 100
  )
    .toString()
    .padStart(2, "0")}:${Math.floor((fractionOfDay.value * 100_000) % 100)
    .toString()
    .padStart(2, "0")}`);
  
const frame = ref<number>(0);


onMounted(() => {
  const update = (): void => {
    date.value = new Date();
    frame.value = window.requestAnimationFrame(update);
  }
  frame.value = window.requestAnimationFrame(update);
});

onUnmounted(() => {
  window.cancelAnimationFrame(frame.value);
});
</script>

<template>
  <h2>Decimal Clock</h2>
  <div id="clock-face">
    <Tens />
    <Hundreds />

    <div v-show="timeString !== null">
      <div
        id="short-hand"
        :style="`transform: rotate(${fractionOfDay * 360 + 180}deg)`"
      />

      <div
        id="long-hand"
        :about="`transform: rotate(${((fractionOfDay * 10) % 1) * 360 + 180}deg)`"
      />

      <div
        id="second-hand"
        :style="`transform: rotate(${((fractionOfDay * 1000) % 1) * 360 + 180}deg)`"
      />
    </div>
  </div>
  <h1 id="clock-time">{{ timeString }}</h1>
</template>

<style>
* {
  font-family: sans-serif;
}

h1, h2 {
  text-align: center
}

#clock-face { 
  position: relative;
  width: 70vh;
  height: 70vh;
  border: solid 2vh #888;
  border-radius: 37vh;
  margin: 0 auto
}

#clock-face:before {
  content: "TEKNUM";
  display: block;
  position: absolute;
  font-size: 2.5vh;
  color: #bbb;
  font-weight: 500;
  letter-spacing: .3vh;
  text-align: center;
  width: 100%;
  top: 28%
}

#clock-face:after {
  content: '';
  display: block; 
  position: absolute;
  width: 4%;
  height: 4%;
  left: 50%;
  top: 50%;
  margin: -2% 0 0 -2%;
  background: #000;
  border-radius: 50%
}

.digit {
  position: absolute;
  font-size: 6vh;
  height: 7vh;
  width: 7vh;
  margin-left: -3.5vh;
  margin-top: -3.5vh;
  text-align: center;
  user-select: none
}

.tick{
  position: absolute;
  width: .3%;
  left: 50%;
  margin-left: -.15%;
  background: #888;
  height: 2%;
  transform-origin: 50% 2500%
}

.large .tick {
  height: 4%;
  transform-origin: 50% 1250%
}

#short-hand { 
  position: absolute;
  width: 1%;
  left: 50%;
  top: 27%;
  margin-left: -.5%;
  background: #000;
  height: 23%;
  transform-origin: 50% 100%
}

#long-hand {
  position: absolute;
  width: 1%;
  left: 50%;
  top: 20%;
  margin-left: -.5%;
  background: #000;
  height: 30%;
  transform-origin: 50% 100%
}

#second-hand {
  position: absolute;
  width: .3%;
  left: 50%;
  top: 18%;
  margin-left: -.15%;
  background: #000;
  height: 32%;
  transform-origin: 50% 100%
}
</style>
