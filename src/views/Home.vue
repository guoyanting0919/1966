<template>
  <div class="home">
    <div class="homeImg">
      <div class="wrap">
        <div class="btnContainer">
          <div @click="toNorth" class="startBtn">開始預約</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import HeaderComponents from "@/components/HeaderComponents.vue";

export default {
  name: "Home",
  components: {
    HeaderComponents
  },
  methods: {
    toNorth() {
      this.$router.push({ name: "North" });
    }
  }
};
</script>
<style lang="scss" scoped>
</style>
