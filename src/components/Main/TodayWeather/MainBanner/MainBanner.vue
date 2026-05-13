<script setup>
import { computed } from "vue";
import { useCityOfWeatherStore } from "@/stores/useCityOfWeatherStore";
import { useWeatherView } from "@/composables/useWeatherView";
import Loader from "@/ui/Loader.vue";
import { getPublicAssetUrl } from "@/helpers/getPublicAssetUrl";

const cityStore = useCityOfWeatherStore();
const { temperature, time, descriptionOfPrecipitation } = useWeatherView();

const timeText = computed(() => {
  return time.value ?? "Определяем время...";
});

const hasTemperature = computed(() => {
  return temperature.value !== null && temperature.value !== undefined;
});

const weatherIcon = computed(() => {
  return (
    descriptionOfPrecipitation.value?.url ??
    getPublicAssetUrl("assets/icons/MainIcons/CloudyIcon.svg")
  );
});
</script>
<template>
  <div class="mainBanner">
    <div class="temperatureToday">
      <div class="temperatureAndDate">
        <p v-if="hasTemperature" class="temperature">{{ temperature }}°</p>
        <Loader v-else class="temperatureLoader" label="Измеряем температуру" />
        <p class="date">Сегодня</p>
      </div>
      <img
        :src="weatherIcon"
        alt="Иконка"
        class="icon"
        width="119px"
        height="119px"
      />
    </div>
    <div class="timeAndCity">
      <p class="time">Время: {{ timeText }}</p>
      <p class="city">
        Город: {{ cityStore.selectedCity?.city ?? "Определяем город..." }}
      </p>
    </div>
  </div>
</template>

<style scoped lang="scss">
.mainBanner {
  box-shadow: $shadow-color;
  color: var(--color-text-default);
  background-color: var(--mainComponent-background-default);
  border-radius: 20px;
  min-width: 400px;
  height: 300px;
  padding: 20px;
  margin-right: 50px;
  .temperatureToday {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 31px;
    .temperatureAndDate {
      .temperature {
        font-size: 96px;
        font-weight: 500;
        color: $color-blue;
      }
      .temperatureLoader {
        width: 119px;
        height: 112px;
        margin-bottom: 4px;
      }
      .date {
        font-size: 40px;
      }
    }
  }
  .timeAndCity {
    font-size: 25px;
    font-weight: 400;
    color: $color-light-grey;
    .time {
      margin-bottom: 14px;
    }
  }
}
</style>
