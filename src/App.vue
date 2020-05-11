<template>
  <div id="app">
    <HeaderComponents />
    <router-view />
  </div>
</template>


<script>
// @ is an alias to /src
import HeaderComponents from "@/components/HeaderComponents.vue";

export default {
  name: "Home",
  components: {
    HeaderComponents
  }
};
</script>

<style lang="scss">
@import "assets/fontello.css";
// @import "./assets/all.scss";
</style>
