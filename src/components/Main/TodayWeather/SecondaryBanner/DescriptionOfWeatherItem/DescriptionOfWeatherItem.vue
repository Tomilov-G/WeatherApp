<script setup>
defineProps(["url", "view", "description"]);
</script>
<template>
  <div class="descriptionOfWeatherItem">
    <div class="iconWrapper">
      <img :src="url" alt="Иконка" class="icon" />
    </div>
    <p class="viewOfWeather">{{ view }}</p>
    <p class="descriptionOfWeather">{{ description }}</p>
  </div>
</template>

<style lang="scss" scoped>
.descriptionOfWeatherItem {
  display: flex;
  align-items: center;
  font-size: 14px;
  font-weight: 400;
  z-index: 1000;
  padding-bottom: 24px;
  .iconWrapper {
    margin-right: 20px;
    box-shadow: $shadow-color;
    background-color: white;
    width: 36px;
    height: 36px;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .viewOfWeather {
    color: $color-light-grey;
    width: 96px;
    flex-shrink: 0;
    margin-right: 20px;
  }
  .descriptionOfWeather {
    color: var(--color-text-default);
    z-index: 5000;
  }
}
</style>
