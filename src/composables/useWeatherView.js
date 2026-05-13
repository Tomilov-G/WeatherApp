import { computed } from "vue";
import { useWeatherForecastByCity } from "@/stores/useWeatherForecastByCity";
import { doRound } from "@/helpers/doRound";
import { doFormatTime } from "@/helpers/doFormatTime";
import { getWindDirection, getWindStrength } from "@/helpers/windDescription";
import { getPrecipitation } from "@/helpers/getPrecipitation";
import {
  convertPressureToMmHg,
  getPressureDescription,
} from "@/helpers/convertPressure";

export const useWeatherView = () => {
  const weatherForecastStore = useWeatherForecastByCity();
  const currentWeather = computed(() => {
    return weatherForecastStore.weatherData?.current;
  });

  const temperature = computed(() => {
    return doRound(currentWeather.value?.temperature_2m);
  });
  const time = computed(() => {
    return doFormatTime(weatherForecastStore.weatherData?.utc_offset_seconds);
  });
  const feelsLikeTemperature = computed(() => {
    return doRound(currentWeather.value?.apparent_temperature);
  });
  const windSpeed = computed(() => {
    return doRound(currentWeather.value?.wind_speed_10m);
  });
  const windDirection = computed(() => {
    return getWindDirection(currentWeather.value?.wind_direction_10m);
  });
  const windStrength = computed(() => {
    return getWindStrength(windSpeed.value);
  });
  const descriptionOfPrecipitation = computed(() => {
    return getPrecipitation(currentWeather.value);
  });
  const pressure = computed(() => {
    return convertPressureToMmHg(currentWeather.value?.pressure_msl);
  });
  const pressureDescription = computed(() => {
    return getPressureDescription(pressure.value);
  });
  return {
    temperature,
    time,
    feelsLikeTemperature,
    windSpeed,
    windStrength,
    windDirection,
    descriptionOfPrecipitation,
    pressure,
    pressureDescription,
  };
};
