import axios from "axios";
import { ref, watch, unref, isRef } from "vue";

export function useFetch(url, options = {}) {
  const data = ref(null);
  const isLoading = ref(false);
  const error = ref(null);

  const fetchData = async () => {
    const resolvedUrl = unref(url);
    if (!resolvedUrl) return;

    isLoading.value = true;
    error.value = null;

    try {
      const response = await axios.get(resolvedUrl, {
        params: options.params ? unref(options.params) : undefined,
      });
      data.value = response.data;
    } catch (e) {
      error.value = e.message ?? "Error";
    } finally {
      isLoading.value = false;
    }
  };

  watch([() => unref(url), () => unref(options.params)], fetchData, {
    immediate: true,
  });

  return { data, isLoading, error, refetch: fetchData };
}
