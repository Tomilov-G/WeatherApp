import { defineStore } from "pinia";
import { ref, watch } from "vue";
import { useFetch } from "@/composables/useFetch";
import { getCityNameByIp } from "@/helpers/getCityNameByIp";

export const useCityOfWeatherStore = defineStore("cities", () => {
  const url = ref("/data.json");
  const { data, isLoading, error } = useFetch(url);

  const cities = ref([]);
  const selectedCity = ref(null);

  const setCityByIp = async () => {
    try {
      const ipCity = await getCityNameByIp();
      if (!ipCity) return;

      const found = cities.value.find(
        (c) => c.city.toLowerCase() === ipCity.city.toLowerCase()
      );

      if (found) {
        selectedCity.value = found;
      } else {
        const newId =
          (cities.value.reduce((max, c) => Math.max(max, c.id ?? 0), 0) || 0) +
          1;

        const cityObj = { id: newId, ...ipCity };
        cities.value.unshift(cityObj);
        selectedCity.value = cityObj;
      }
    } catch (e) {
      console.error("Не удалось определить город по IP:", e);
    }
  };

  watch(
    data,
    (val) => {
      if (Array.isArray(val)) {
        cities.value = val;
        cities.value.sort((a, b) => a.city.localeCompare(b.city));
        setCityByIp();
      } else {
        cities.value = [];
      }
    },
    { immediate: true }
  );

  const setCity = (city) => {
    selectedCity.value = city;
  };

  return {
    cities,
    selectedCity,
    isLoading,
    error,
    setCity,
  };
});
