<script setup>
import HeaderDropdown from "./HeaderDropdown/HeaderDropdown.vue";
import HeaderTitle from "./HeaderTitle/HeaderTitle.vue";
</script>

<template>
  <header class="header">
    <HeaderTitle />
    <HeaderDropdown />
  </header>
</template>

<style scoped>
.header {
  user-select: none;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-top: 20px;
}
</style>
