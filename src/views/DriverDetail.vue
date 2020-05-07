<template>
  <div class="driverDetail">
    <div class="infoContainer">
      <div class="personalContainer">
        <div class="row">
          <div class="mr-lg-3 col-md-12 col-lg-6 col-xl-5">
            <div :style="{backgroundImage:`url(${imageUrl})`}" class="driverImage"></div>
          </div>
          <div class="mt-5 mt-lg-0 col-md-12 col-lg-5 h-100">
            <div class="driverInfo">
              <p class="driverCompany">所屬車隊，例如太豐車行</p>
              <h4 class="driverName">
                陳鑽祥
                <span>福祉車</span>
              </h4>
              <hr style="background: #BBBBBB;" />
              <h4 class="carType">
                <i class="icon-car mr-1"></i>TOYOTA WISH
              </h4>
              <ul class="driverDetailInfoMenu">
                <h5 class="driverDetailInfo">司機資料</h5>
                <li>
                  <span class="menuTitle">性別</span>
                  <span class="menuDetail">男性</span>
                </li>
                <li>
                  <span class="menuTitle">服務地區</span>
                  <span class="menuDetail">新北市、桃園市</span>
                </li>
                <li>
                  <span class="menuTitle">擅長語言</span>
                  <span class="menuDetail">國語、台語</span>
                </li>
              </ul>

              <ul class="driverDetailInfoMenu mt-3">
                <h5 class="driverDetailInfo">其他服務</h5>
                <li>代駕</li>
                <li>寵物可上車</li>
                <li>可刷卡</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      imageUrl:
        "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60"
    };
  },
  computed: {
    id() {
      return this.$route.params.id;
    }
  }
};
</script>

<style>
</style>