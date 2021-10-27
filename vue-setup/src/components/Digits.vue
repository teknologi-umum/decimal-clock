<script setup lang="ts">
import { inject } from 'vue';

const tens = inject<number[]>('arrOfTens');
</script>

<template>
  <div 
    v-for="(_, i) in tens"
    class="digit"
    :style="`left: ${50-Math.sin((Math.PI * i) / 5) * 40}%; top: ${50+Math.cos((Math.PI * i) / 5) * 40}%;`"
  >
    {{ i }}
  </div>
</template>

<style scoped>
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
</style>