<script setup>
import { ref, computed } from "vue";
import Button from "../../../ui/Button.vue";
import ForecastCard from "./ForecastCard/ForecastCard.vue";
import Loader from "@/ui/Loader.vue";
import { useWeatherForecastByCity } from "@/stores/useWeatherForecastByCity";
import { getWeatherByCode } from "@/helpers/getWeatherByCode";

const forecastStore = useWeatherForecastByCity();
const selectedDays = ref(7);

const buttonsName = ref([
  { id: 1, value: "На неделю", days: 7, isActive: true },
  { id: 2, value: "На 10 дней", days: 10, isActive: false },
  { id: 3, value: "На 16 дней", days: 16, isActive: false },
  { id: 4, value: "Сбросить", days: 7, isActive: false },
]);

const firstBtnsBlock = computed(() => {
  return buttonsName.value.filter((btn) => btn.id <= 3);
});
const lastButton = computed(() => {
  return buttonsName.value.filter((btn) => btn.id > 3);
});

const parseForecastDate = (value) => {
  const [year, month, day] = value.split("-").map(Number);
  return new Date(year, month - 1, day);
};

const capitalize = (value) => {
  if (!value) return "";
  return value[0].toUpperCase() + value.slice(1);
};

const formatTemperature = (value) => {
  if (value === null || value === undefined || Number.isNaN(Number(value))) {
    return "—";
  }

  const roundedValue = Math.round(Number(value));
  return `${roundedValue > 0 ? "+" : ""}${roundedValue}°`;
};

const formatDate = (value) => {
  return new Intl.DateTimeFormat("ru-RU", {
    day: "2-digit",
    month: "short",
  })
    .format(parseForecastDate(value))
    .replace(".", "");
};

const getDayOfWeek = (value, index) => {
  if (index === 0) return "Сегодня";
  if (index === 1) return "Завтра";

  const weekday = new Intl.DateTimeFormat("ru-RU", {
    weekday: "short",
  })
    .format(parseForecastDate(value))
    .replace(".", "");

  return capitalize(weekday);
};

const cardData = computed(() => {
  const daily = forecastStore.forecastData?.daily;
  if (!daily) return [];

  return daily.time.slice(0, selectedDays.value).map((day, index) => {
    const weather = getWeatherByCode(daily.weather_code[index]);

    return {
      id: day,
      dayOfWeek: getDayOfWeek(day, index),
      date: formatDate(day),
      url: weather.url,
      temperature: formatTemperature(daily.temperature_2m_max[index]),
      futureTemperature: formatTemperature(daily.temperature_2m_min[index]),
      weatherDescription: weather.title,
    };
  });
});

const changeBtnStatus = (id, days) => {
  selectedDays.value = days;
  buttonsName.value = buttonsName.value.map((btn) => ({
    ...btn,
    isActive: btn.id === id,
  }));
};

const statusBackToInitial = () => {
  selectedDays.value = 7;
  buttonsName.value = buttonsName.value.map((btn) => ({
    ...btn,
    isActive: btn.id === 1,
  }));
};
</script>
<template>
  <section class="weatherForecast">
    <div class="btnsBlock">
      <div class="firstBtnsBlock">
        <Button
          v-for="name in firstBtnsBlock"
          :key="name.id"
          :btnName="name.value"
          :isActive="name.isActive"
          @click="changeBtnStatus(name.id, name.days)"
        />
      </div>
      <div class="lastButton">
        <Button
          v-for="name in lastButton"
          :key="name.id"
          :btnName="name.value"
          :isActive="name.isActive"
          @click="statusBackToInitial"
        />
      </div>
    </div>
    <div class="forecastBlock">
      <Loader
        v-if="forecastStore.isForecastLoading"
        class="forecastLoader"
        label="Загрузка прогноза"
      />
      <p v-else-if="forecastStore.forecastError" class="forecastMessage">
        {{ forecastStore.forecastError }}
      </p>
      <p v-else-if="cardData.length === 0" class="forecastMessage">
        Нет данных для прогноза
      </p>
      <div v-else class="forecastCards">
        <ForecastCard
          v-for="data in cardData"
          :key="data.id"
          :dayOfWeek="data.dayOfWeek"
          :date="data.date"
          :url="data.url"
          :temperature="data.temperature"
          :futureTemperature="data.futureTemperature"
          :weatherDescription="data.weatherDescription"
        />
      </div>
    </div>
  </section>
</template>

<style lang="scss" scoped>
.btnsBlock {
  display: flex;
  align-items: center;
  justify-content: space-between;
  .firstBtnsBlock {
    display: flex;
    gap: 15px;
  }
}
.forecastBlock {
  padding: 20px 18px 20px 19px;
  width: 100%;
  min-height: 240px;
  background-color: var(--mainComponent-background-default);
  border-radius: 0px 0px 20px 20px;
  box-shadow: $shadow-color;
  margin-top: 7px;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
}
.forecastCards {
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
}
.forecastMessage {
  color: $color-light-grey;
  font-size: 18px;
}
</style>
