import { defineStore } from "pinia";
import { computed } from "vue";
import { useFetch } from "@/composables/useFetch";
import { useCityOfWeatherStore } from "@/stores/useCityOfWeatherStore";

export const useWeatherForecastByCity = defineStore("forecast", () => {
  const cityStore = useCityOfWeatherStore();

  const weatherUrl = computed(() => {
    const city = cityStore.selectedCity;
    if (!city) return null;

    return "https://api.open-meteo.com/v1/forecast";
  });

  const weatherParams = computed(() => {
    const city = cityStore.selectedCity;
    if (!city) return null;

    return {
      latitude: city.lat,
      longitude: city.lon,
      current:
        "temperature_2m,apparent_temperature,weather_code,pressure_msl,wind_speed_10m,wind_direction_10m",
      daily: "weather_code,temperature_2m_max,temperature_2m_min",
      forecast_days: 16,
      timezone: "auto",
      wind_speed_unit: "ms",
    };
  });

  const { data, isLoading, error } = useFetch(weatherUrl, {
    params: weatherParams,
  });

  return {
    weatherData: data,
    isLoading,
    error,
    forecastData: data,
    isForecastLoading: isLoading,
    forecastError: error,
  };
});
