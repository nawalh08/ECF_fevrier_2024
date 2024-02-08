<script setup>
// import router from './router';
// import homeView from '../src/views/homeView.vue';
import { RouterView, RouterLink } from "vue-router";
import NavComponent from "./components/NavComponent.vue"
import FooterComponent from "./components/FooterComponent.vue";






</script>

<template>

<header>
  <NavComponent/>
</header>

  <RouterView />
  <PaginationComponent/>
  <footer>
    <FooterComponent/>
  </footer>
</template>

<style scoped>

</style>
