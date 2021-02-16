<template>
  <div id="app">
    <Navigation></Navigation>
    <router-view></router-view>
  </div>
</template>

<script>
/* eslint-disable */
import Navigation from "./components/Navigation/Navigation.vue";
export default {
  name: "App",
  components: {
    Navigation
  }
};
</script>

<style lang="scss" src='./App.scss'></style>
