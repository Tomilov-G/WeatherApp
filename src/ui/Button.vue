<script setup>
defineProps(["btnName", "isActive"]);
</script>

<template>
  <button class="button" :class="{ active: isActive }">{{ btnName }}</button>
</template>

<style lang="scss" scoped>
.button {
  min-width: 142px;
  font-size: 18px;
  font-weight: 400;
  box-shadow: $shadow-color;
  height: 35px;
  background-color: var(--mainComponent-background-default);
  color: var(--text-color-default);
  border-radius: 5px;
  border: none;
  cursor: pointer;
  transition: 0.3s;

  &.active {
    background-color: $color-blue;
    color: $text-color-dark;
  }
}
</style>
