<script setup>
import HeaderDropdownListItem from "./HeaderDropdownListItem.vue/HeaderDropdownListItem.vue";
import { useCityOfWeatherStore } from "@/stores/useCityOfWeatherStore";

const store = useCityOfWeatherStore();
defineProps(["open"]);
const emit = defineEmits(["switch"]);
</script>

<template>
  <div class="dropdownListWrapper" v-if="open">
    <ul v-if="store.cities.length !== 0" class="dropdownList">
      <HeaderDropdownListItem
        v-for="city in store.cities"
        :key="city.id"
        :city="city"
        @switch="emit('switch', city)"
      />
    </ul>
    <div v-if="store.isLoading">Загрузка...</div>
    <div v-if="store.error">{{ store.error }}</div>
  </div>
</template>

<style scoped lang="scss">
.dropdownList {
  max-height: 200px;
  padding-inline: 0;
  text-align: center;
  position: absolute;
  top: 130%;
  width: 100%;
  z-index: 10;
  list-style: none;
  background-color: var(--forecastCard-background-default);
  border-radius: 0px 0px 10px 10px;
  overflow: scroll;
}
</style>
