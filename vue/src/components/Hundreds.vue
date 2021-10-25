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
