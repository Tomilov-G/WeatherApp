<script setup>
import TodayWeather from "./TodayWeather/TodayWeather.vue";
import WeatherForecast from "./WeatherForecast/WeatherForecast.vue";
</script>
<template>
  <main class="main">
    <TodayWeather />
    <WeatherForecast />
  </main>
</template>
<style lang="scss" scoped>
.main {
  flex: 1;
}
</style>
