<script setup>
import MainBanner from "./MainBanner/MainBanner.vue";
import SecondaryBanner from "./SecondaryBanner/SecondaryBanner.vue";
</script>
<template>
  <section class="todayWeather">
    <MainBanner />
    <SecondaryBanner />
  </section>
</template>

<style scoped lang="scss">
.todayWeather {
  margin: 30px 0px 50px 0px;
  display: flex;
}
</style>
