<template>
  <div class="home">
    <!-- <HeaderComponents /> -->
    <router-view></router-view>
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
