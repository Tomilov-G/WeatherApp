<script setup>
import { useTheme } from "@/composables/useTheme";
import { useToggle } from "@/composables/useToggle";
import HeaderDropdownList from "./HeaderDropdownList/HeaderDropdownList.vue";
import { useCityOfWeatherStore } from "@/stores/useCityOfWeatherStore";

const { defaultTheme, toggleChangeTheme } = useTheme();
const { initialBooleanState, toggleBooleanState, resetBooleanState } = useToggle();

const store = useCityOfWeatherStore()

const switchCity = (city) => {
  store.setCity(city)
  resetBooleanState()
}

</script>

<template>
  <div class="headerDropdown">
    <img
      src="/assets/icons/HeaderIcons/ChangeColorIcon.svg"
      alt="Иконка"
      class="icon"
      @click="toggleChangeTheme"
    />

    <div class="customDropdown">
      <div class="dropdown" @click="toggleBooleanState">
        <span>{{ store.selectedCity?.city ?? "Загрузка..."  }}</span>
        <img
          v-if="defaultTheme === 'dark'"
          src="/assets/icons/HeaderIcons/ArrowDown.svg"
          alt="Иконка"
          class="arrowIcon"
          :class="{ dropdownOpen: initialBooleanState }"
        />
        <img
          v-else
          src="/assets/icons/HeaderIcons/ArrowDownDark.svg"
          alt="Иконка"
          class="arrowIcon"
          :class="{ dropdownOpen: initialBooleanState }"
        />
      </div>
      <HeaderDropdownList
        :open="initialBooleanState"
        @switch="switchCity"
      />
    </div>
  </div>
</template>

<style scoped lang="scss">
.headerDropdown {
  display: flex;
  align-items: center;
  .icon {
    margin-right: 20px;
    cursor: pointer;
  }

  .customDropdown {
    position: relative;
    min-width: 194px;
    .dropdown {
      padding: 10px 15px;
      display: flex;
      justify-content: center;
      align-items: center;
      background-color: var(--forecastCard-background-default);
      color: var(--color-text-default);
      border-radius: 10px;
      font-size: 16px;
      cursor: pointer;
    }

    .arrowIcon {
      width: 13px;
      height: 13px;
      pointer-events: none;
      margin-left: 12px;
      transition: transform 0.3s ease;
      color: var(--color-text-default);

      &.dropdownOpen {
        transform: rotate(180deg);
      }
    }
  }
}
</style>
