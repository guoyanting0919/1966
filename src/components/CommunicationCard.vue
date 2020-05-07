<template>
  <div class="col-12 col-sm-6 col-lg-3 mb-jg-5 mb-4 CommunicationCard">
    <div @click="toDriverDetail(card.id)" class="card communication">
      <div :style="{backgroundImage:`url(${card.imageUrl})`}" class="cardDriverImage"></div>

      <div class="card__content">
        <span class="category category--communication">{{card.category}}</span>
        <h4 class="title">{{card.title}}</h4>
        <p class="info">{{card.info}}</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "CommunicationCard",
  props: {
    card: {
      type: Object
      //   required: true
    }
  },
  methods: {
    toDriverDetail(id) {
      let route = this.$route.name;
      // console.log(this.router);
      if (route === "Driver") {
        this.$router.push({ name: "DriverDetail", params: { id } });
      } else if (route === "Convoy") {
        this.$router.push({ name: "ConvoyDetail", params: { id } });
      }
    }
  }
};
</script>

<style>
</style>