<script setup>
import Header from "./components/Header/Header.vue";
import Main from "./components/Main/Main.vue";
import Footer from "./components/Footer/Footer.vue";
</script>

<template>
  <div class="container">
    <Header />
    <Main />
    <Footer />
  </div>
</template>

<style scoped>
.container {
  min-height: 100vh;
  display: flex;
  flex-direction: column;

  padding-inline: 145px;
}
</style>
