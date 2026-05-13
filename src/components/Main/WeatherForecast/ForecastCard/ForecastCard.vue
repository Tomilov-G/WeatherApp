<script setup>
defineProps([
  "dayOfWeek",
  "date",
  "url",
  "temperature",
  "futureTemperature",
  "weatherDescription",
]);
</script>
<template>
  <div class="forecastCard">
    <p class="dayOfWeek">{{ dayOfWeek }}</p>
    <p class="date">{{ date }}</p>
    <img :src="url" alt="Иконка" width="48px" height="48px" />
    <p class="temperature">{{ temperature }}</p>
    <p class="futureTemperature">{{ futureTemperature }}</p>
    <p class="weatherDescription">{{ weatherDescription }}</p>
  </div>
</template>

<style scoped lang="scss">
.forecastCard {
  background-color: var(--forecastCard-background-default);
  flex: 0 0 calc((100% - 120px) / 7);
  height: 215px;
  min-width: 120px;
  border-radius: 10px;
  padding: 11px 0px 13px 11px;
  .dayOfWeek {
    font-size: 18px;
    font-weight: 500;
    margin-bottom: 7px;
  }
  .temperature {
    font-size: 18px;
    font-weight: 500;
    margin: 8px 0px 3px 0px;
  }
  .date,
  .futureTemperature,
  .weatherDescription {
    color: $color-light-grey;
    font-weight: 400;
  }
  .date {
    font-size: 14px;
    margin-bottom: 12px;
  }
  .futureTemperature {
    font-size: 13px;
    margin-bottom: 6px;
  }
  .weatherDescription {
    font-size: 13px;
  }
}
</style>
