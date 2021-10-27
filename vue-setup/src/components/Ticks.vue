<script setup lang="ts">
import { inject } from 'vue';

const hundreds = inject<number[]>('arrOfHundreds');
</script>

<template>
  <div
    v-for="(_, i) in hundreds"
    v-memo="[i]"
    :class="i % 10 === 0 ? 'large tick' : 'tick'"
    :style="`transform: rotate(${i * 3.6}deg);`"
  />
</template>

<style scoped>
.tick {
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
</style>