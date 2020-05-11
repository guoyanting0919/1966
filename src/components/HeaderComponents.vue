<template>
  <div class="HeaderComponents">
    <header class="header">
      <div class="personalContainer">
        <div class="header-flex-container">
          <div class="logo" @click="toHome">
            <img src="../assets/img/logo-dark.png" alt />
          </div>

          <nav class="navbar">
            <ul>
              <li>
                <router-link :to="{ name: 'North' }" class="navRouter">北部地區</router-link>
              </li>
              <li>
                <router-link :to="{ name: 'Central' }" class="navRouter">中部地區</router-link>
              </li>
              <li>
                <router-link :to="{ name: 'South' }" class="navRouter">南部地區</router-link>
              </li>
              <li>
                <router-link :to="{ name: 'East' }" class="navRouter">東部地區</router-link>
              </li>
              <li>
                <a href="#" class="navRouter">回到1966</a>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  </div>
</template>

<script>
export default {
  name: "HeaderComponents",
  methods: {
    toHome() {
      let route = this.$route.name;
      if (route === "Home") {
        return false;
      } else {
        this.$router.push("/");
      }
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
</style>
