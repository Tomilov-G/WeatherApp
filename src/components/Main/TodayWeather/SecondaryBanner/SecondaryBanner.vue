<script setup>
import { computed } from "vue";
import DescriptionOfWeatherItem from "./DescriptionOfWeatherItem/DescriptionOfWeatherItem.vue";
import { useWeatherView } from "@/composables/useWeatherView";
import { getPublicAssetUrl } from "@/helpers/getPublicAssetUrl";

const {
  temperature,
  feelsLikeTemperature,
  pressure,
  pressureDescription,
  descriptionOfPrecipitation,
  windSpeed,
  windDirection,
  windStrength,
} = useWeatherView();

const hasValue = (value) => {
  return value !== null && value !== undefined && value !== "";
};

const formatTemperatureDescription = () => {
  if (!hasValue(temperature.value) || !hasValue(feelsLikeTemperature.value)) {
    return "Измеряем температуру...";
  }

  return `${temperature.value}° ощущается как ${feelsLikeTemperature.value}°`;
};

const formatPressureDescription = () => {
  if (!hasValue(pressure.value)) {
    return "Измеряем давление...";
  }

  return `${pressure.value} мм ртутного столба - ${pressureDescription.value}`;
};

const formatPrecipitationDescription = () => {
  return descriptionOfPrecipitation.value?.title ?? "Определяем осадки...";
};

const formatWindDescription = () => {
  if (!hasValue(windSpeed.value)) {
    return "Измеряем ветер...";
  }

  return `${windSpeed.value} м/с ${windDirection.value} - ${windStrength.value}`;
};

const itemsOfWeather = computed(() => [
  {
    id: 1,
    url: getPublicAssetUrl("assets/icons/MainIcons/ThermometerIcon.svg"),
    view: "Температура",
    description: formatTemperatureDescription(),
  },
  {
    id: 2,
    url: getPublicAssetUrl("assets/icons/MainIcons/PressureIcon.svg"),
    view: "Давление",
    description: formatPressureDescription(),
  },
  {
    id: 3,
    url: getPublicAssetUrl("assets/icons/MainIcons/PrecipitationIcon.svg"),
    view: "Осадки",
    description: formatPrecipitationDescription(),
  },
  {
    id: 4,
    url: getPublicAssetUrl("assets/icons/MainIcons/WindIcon.svg"),
    view: "Ветер",
    description: formatWindDescription(),
  },
]);
</script>
<template>
  <div class="secondaryBanner">
    <div>
      <DescriptionOfWeatherItem
        v-for="item in itemsOfWeather"
        :key="item.id"
        :url="item.url"
        :view="item.view"
        :description="item.description"
      />
    </div>
    <img
      :src="getPublicAssetUrl('assets/images/Cloud.png')"
      alt="Изображение"
      class="cloudImage"
    />
  </div>
</template>

<style lang="scss" scoped>
.secondaryBanner {
  background-color: var(--mainComponent-background-default);
  box-shadow: $shadow-color;
  width: 100%;
  height: 300px;
  border-radius: 20px;
  display: flex;
  padding: 42px 0px 41px 31px;
  position: relative;
  top: 0%;
  overflow: hidden;
  .cloudImage {
    position: absolute;
    top: 0%;
    right: 0%;
  }
}
</style>
