<template>
  <div>
    <section class="result_main_area" v-if="$store.state.currentAnsPercent > 50">
      <div class="container">
        <div class="result_main_text">
          <h1>ВАШ PЕЗУЛЬТАТ:</h1>
          <h2 v-if="$store.state.percent">{{ $store.state.percent }}/100</h2>
          <p>Поздравляем с успешным прохождением теста!</p>
        </div>
      </div>
    </section>

    <section v-else  :class="{ horse: $store.state.percent==100 }" class="farme_main_area">
      <div class="container">
        <div class="farme_main_text text-center">
          <span>ВАШ PЕЗУЛЬТАТ:</span>
          <h1 :class="{ green: $store.state.percent==100 }">{{ $store.state.percent }}/100</h1>
          
          <a class="circle" v-if="$store.state.percent<100" style="cursor:pointer" @click="$router.go(-1)">ЗАНОВО</a>
          
            <h1 class="green" style="font-family: 'Amsterdam Deco One';font-size: 72px" v-if="$store.state.percent==100">Поздравляем с успешным прохождением теста! </h1>
            <a class="" v-if="$store.state.percent==100" style="cursor:pointer" @click="$router.push('/courses')"><div
                  @click="next_q"
                  style="cursor: pointer"
                  class="
                    registration_headerTop_single
                    registration_headerTop_single_left
                  "
                >
                  <a>Следующее занятие ! </a>
                </div>
              
              </a>
        </div>
      </div>
    </section>
  </div>
</template>
<script>
// @ is an alias to /src
import axios from "axios";
export default {
  name: "Home",
  components: {},
  data() {
    return {
      username: "",
      password: "",
      login_error: false,
      button_disabled: false,
    };
  },
  mounted() {
    this.$store.state.percent =100;
  },
  methods: {},
};
</script>

<style scoped>
  .horse{
    background-image: url('@/assets/img/loginb.png');
    background-size: cover!important;;
  }
  .green{
    color: white!important
  }
h1 {
  font-family: "Bertilion";
  font-style: normal;
  font-weight: 400;
  font-size: 96px;
  line-height: 98px;
}
.hund100 {
  margin: 10px 0;
  padding: 0px 10px;
}

.hund100 {
  width: 100%;
  height: 50px;
}

.hund50 {
  margin: 10px 0;
  font-weight: 400;
  width: 100%;
  height: 50px;
  color: black;
  font-size: 32px;
}
@media only screen and (min-width: 1000px) {
  .hund50 {
    width: 50% !important;
    height: 50px;
  }
  .p10 {
    padding: 100px 0;
  }
}

.main_con {
  min-height: 100vh;
  background-size: cover;
  background-image: url("@/assets/img/login.png");
}
</style>