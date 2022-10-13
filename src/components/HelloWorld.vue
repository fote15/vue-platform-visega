<template>
  <div class="hello">
    <div class="header-area">
      <div class="header-top">
        <div class="container">
          <div class="row align-items-center">
            <div class="col-lg-12">
              <div class="header-top-wrp">
                <div class="logo-area">
                  <router-link class="olyMob" :to="'/'">
                    <img
                      src="@/assets/img/tree.png"
                      style="
                        width: 30px;
                        height: 40px;
                        transform: translateY(-12px);
                      "
                      alt=""
                  /></router-link>
                  <router-link :to="'/'" class="ibmob">
                    ВОЗРОЖДЕНИЕ</router-link
                  >
                </div>
                <router-link :to="'#'" @click="scrollToCur()" class="mdlLgo"
                  ><img src="@/assets/img/mdlLogo.png" alt=""
                /></router-link>
                <div class="srcCont">
                  <form >
                    <input type="text" v-model="sea" name="" placeholder="Поиск..." id="" />
                    <button @click="serach">
                      <img src="@/assets/img/search.png" alt="" />
                    </button>
                  </form>
                  <a @click="serach" class="contactBtn"
                    ><img src="@/assets/img/teli.png" alt=""
                  /></a>
                </div>
                <div class="bar d-block d-md-none">
                  <a @click="isActiveMob = true" class="bar-icon siteBar-btn">
                    <span></span>
                  </a>
                  <router-link to="/cabinet">
                    <img
                      style="
                        width: 29px;
                        height: 29px;
                        margin-right: 15px;
                        transform: translateY(1px);
                      "
                      src="@/assets/img/ava.svg"
                      alt=""
                  /></router-link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="header-bottom" v-if="!$store.state.isLogin">
        <div class="container">
          <div class="row">
            <div class="col-lg-12">
              <ul class="menu" style="padding: 0 !important">
                <li>
                  <router-link :to="'/corp'"
                    >КОРПОРАТИВНОЕ ОБУЧЕНИЕ</router-link
                  >
                </li>
                <li><router-link :to="'/webinar'">ВЕБИНАРЫ</router-link></li>
                <li><router-link :to="'/courses'">МОИ КУРСЫ</router-link></li>
                <li>
                  <router-link :to="'/login'">Личный Кабинет</router-link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <img
        class="d-block d-md-none"
        style="width: 100%"
        src="assets/img/shape_horizontal.png"
        alt=""
      />
    </div>
    <!-- mobile-menu START -->
    <div class="mobile-menu" :class="{ siteBar: isActiveMob }">
      <a
        @click="isActiveMob = false"
        style="color: black; box-shadow: none"
        class="bars siteBar-btn"
        >X</a
      >
      <div class="mnuCnt">
        <router-link to="/" @click="isActiveMob= false" 
          ><img
            width="250"
            style="opacity: 1; margin-bottom: 15px"
            src="@/assets/img/tree.png"
            alt=""
        /></router-link>
        <ul>
          <li>
            <router-link @click="isActiveMob= false" :to="'/corp'">КОРПОРАТИВНОЕ ОБУЧЕНИЕ</router-link>
          </li>

          <li>
            <router-link @click="isActiveMob= false" :to="'/cabinet'">ЛИЧНЫЙ КАБИНЕТ</router-link>
          </li>
          <li>
            <router-link @click="isActiveMob= false" :to="'#'">TELEGRAM-КАНАЛ</router-link>
          </li>
          <li><router-link @click="isActiveMob= false" :to="'/courses'">МОИ КУРСЫ</router-link></li>
          <li><router-link @click="isActiveMob= false" :to="'/webinar'">ВЕБИНАРЫ</router-link></li>
        </ul>
      </div>
    </div>

    <!-- header-area END -->
  </div>
</template>

<script>
  import axios from 'axios'
export default {
  name: "HelloWorld",
  props: {
    msg: String,
  },
  methods: {
    serach(){
      if(!this.sea){
        return true;
      }
      this.$router.push('/search/'+this.sea)

    },
    scrollToCur() {
      this.$router.push("/");
      this.$store.state.scrolerCur = true;
      document.getElementById("courses").scrollIntoView();
    },
    logout() {
      window.localStorage.clear();
      this.$store.state.token = "";
      this.$router.push("/login");
    },
  },
  data() {
    return {
      sea: '',
      isActiveMob: false,
    };
  },
};
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.bar a span {
  background: #000 !important;
}
@media only screen and (max-width: 768px) {
  .logo-area {
    transform: translateY(-4px);
  }
}

.bar a span:before {
  background: #000 !important;
}

.bar a span:after {
  background: #000 !important;
}

.mobile-menu a {
  color: #000000;
}
.mobile-menu {
  background-color: #fed076 !important;
}
.olyMob {
  display: none;
}
.logo-area {
  font-size: 64px;
}
@media only screen and (max-width: 768px) {
  .ibmob {
    display: inline-block !important;
    margin-left: 10px;
  }
  .olyMob {
    display: inline-block !important;
  }
  .olyMob a {
    display: inline-block !important;
  }
  .olyMob img {
    display: inline-block !important;
  }

  .header-top {
    padding: 15px 0 !important;
    background-color: #fed076 !important;
  }
  .logo-area a {
    font-size: 45px;
    color: #000;
  }
}

@media only screen and (max-width: 350px) {
  .logo-area aa {
    font-size: 37px !important;
  }
}
</style>
