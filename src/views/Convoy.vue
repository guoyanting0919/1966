<template>
  <div class="convoy">
    <div class="personalContainer">
      <h2 class="mt-5 mb-4">交通服務</h2>
      <hr class="line" />

      <!-- select -->
      <div class="select d-flex">
        <ul class="d-flex mr-auto siteMenu">
          <li @click="activeList='所有地區'" :class="{'activeList':activeList==='所有地區'}">所有地區</li>
          <li @click="activeList='北部'" :class="{'activeList':activeList==='北部'}">北部</li>
          <li @click="activeList='中部'" :class="{'activeList':activeList==='中部'}">中部</li>
          <li @click="activeList='南部'" :class="{'activeList':activeList==='南部'}">南部</li>
          <li @click="activeList='東部'" :class="{'activeList':activeList==='東部'}">東部</li>
        </ul>
        <router-link class="linkClass" :to="{ name: 'Driver' }">找司機</router-link>
        <router-link class="linkClass" :to="{ name: 'Convoy' }">找車隊</router-link>
      </div>

      <hr style="margin-top: 0;" />

      <!-- convoyMain -->
      <div class="convoyMain">
        <h3>
          <i class="icon-pin"></i>各區醫療院所與社區交通接送服務
        </h3>
        <transition-group
          v-if="dataFilter"
          class="row driver-menu"
          name="list"
          tag="div"
          mode="out-in"
          appear
        >
          <!-- card -->
          <template v-for="(item,index) in dataFilter">
            <CommunicationCard :key="index" :card="item"></CommunicationCard>
          </template>
        </transition-group>
      </div>
    </div>
  </div>
</template>

<script>
import CommunicationCard from "@/components/CommunicationCard.vue";
export default {
  data() {
    return {
      activeList: "所有地區",
      data: [
        {
          title: "一粒麥子",
          category: "宜蘭市",
          info:
            "司機簡介，不超過 60個全形字元。新北市獲配發之流感疫苗全數配發至合約院所提供民眾接種，新北市獲配發之流感疫苗全數配內介。",
          imageUrl:
            "https://media.karousell.com/media/photos/products/2019/05/18/aso__1558186880_0d43ad16_progressive.jpg",
          site: "北部",
          id: 1
        },
        {
          title: "一粒麥子",
          category: "高雄市",
          info:
            "司機簡介，不超過 60個全形字元。新北市獲配發之流感疫苗全數配發至合約院所提供民眾接種，新北市獲配發之流感疫苗全數配內介。",
          imageUrl:
            "https://media.karousell.com/media/photos/products/2019/05/18/aso__1558186880_0d43ad16_progressive.jpg",
          site: "南部",
          id: 2
        },
        {
          title: "一粒麥子",
          category: "台中市",
          info:
            "司機簡介，不超過 60個全形字元。新北市獲配發之流感疫苗全數配發至合約院所提供民眾接種，新北市獲配發之流感疫苗全數配內介。",
          imageUrl:
            "https://media.karousell.com/media/photos/products/2019/05/18/aso__1558186880_0d43ad16_progressive.jpg",
          site: "中部",
          id: 3
        },
        {
          title: "一粒麥子",
          category: "新北市",
          info:
            "司機簡介，不超過 60個全形字元。新北市獲配發之流感疫苗全數配發至合約院所提供民眾接種，新北市獲配發之流感疫苗全數配內介。",
          imageUrl:
            "https://media.karousell.com/media/photos/products/2019/05/18/aso__1558186880_0d43ad16_progressive.jpg",
          site: "北部",
          id: 4
        },
        {
          title: "一粒麥子",
          category: "花蓮縣",
          info:
            "司機簡介，不超過 60個全形字元。新北市獲配發之流感疫苗全數配發至合約院所提供民眾接種，新北市獲配發之流感疫苗全數配內介。",
          imageUrl:
            "https://media.karousell.com/media/photos/products/2019/05/18/aso__1558186880_0d43ad16_progressive.jpg",
          site: "東部",
          id: 5
        }
      ]
    };
  },
  components: {
    CommunicationCard
  },
  computed: {
    dataFilter() {
      const vm = this;
      if (vm.activeList === "所有地區") {
        return vm.data;
      } else {
        let site = vm.activeList;
        let arr = vm.data.filter(item => {
          return item.site === site;
        });
        return arr;
      }
    }
  }
};
</script>

<style scoped>
.icon-pin {
  color: #efc94c;
}
</style>
