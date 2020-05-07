<template>
  <div class="driver">
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

      <!-- driverMain -->
      <div class="driverMain">
        <h3>
          <i class="icon-pin"></i>1966認證司機
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
          id: 1,
          category: "宜蘭市",
          info:
            "司機簡介，不超過 60個全形字元。新北市獲配發之流感疫苗全數配發至合約院所提供民眾接種，新北市獲配發之流感疫苗全數配內介。",
          imageUrl:
            "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60",
          site: "北部"
        },
        {
          title: "一粒麥子",
          id: 2,
          category: "高雄市",
          info:
            "司機簡介，不超過 60個全形字元。新北市獲配發之流感疫苗全數配發至合約院所提供民眾接種，新北市獲配發之流感疫苗全數配內介。",
          imageUrl:
            "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
          site: "南部"
        },
        {
          title: "一粒麥子",
          id: 3,
          category: "台中市",
          info:
            "司機簡介，不超過 60個全形字元。新北市獲配發之流感疫苗全數配發至合約院所提供民眾接種，新北市獲配發之流感疫苗全數配內介。",
          imageUrl:
            "https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60",
          site: "中部"
        },
        {
          title: "一粒麥子",
          id: 4,
          category: "新北市",
          info:
            "司機簡介，不超過 60個全形字元。新北市獲配發之流感疫苗全數配發至合約院所提供民眾接種，新北市獲配發之流感疫苗全數配內介。",
          imageUrl:
            "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60",
          site: "北部"
        },
        {
          title: "一粒麥子",
          id: 5,
          category: "花蓮縣",
          info:
            "司機簡介，不超過 60個全形字元。新北市獲配發之流感疫苗全數配發至合約院所提供民眾接種，新北市獲配發之流感疫苗全數配內介。",
          imageUrl:
            "https://images.unsplash.com/photo-1463453091185-61582044d556?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60",
          site: "東部"
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
