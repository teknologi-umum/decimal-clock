<template>
  <DecimalClock />
</template>

<script>
import DecimalClock from "./components/DecimalClock.vue";

export default {
  name: "App",
  components: {
    DecimalClock,
  },
};
</script>

<style>
* {
  font-family: sans-serif;
}
</style>
