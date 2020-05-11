<template>
  <div class="selectCity">
    <div class="select d-flex">
      <ul class="d-flex mr-auto siteMenu">
        <li @click="activeList='所有地區'" :class="{'activeList':activeList==='所有地區'}">所有車種</li>
        <li @click="activeList='北部'" :class="{'activeList':activeList==='北部'}">福祉車</li>
        <li @click="activeList='中部'" :class="{'activeList':activeList==='中部'}">一般車</li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      activeList: "所有地區"
    };
  }
};
</script>

<style>
</style>