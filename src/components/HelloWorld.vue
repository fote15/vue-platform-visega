<template>
  <div class="hello">
    <div class="header-area">
      <div class="header_wrap d-sm-none d-md-flex">
        <router-link to="/courses"> <span class="header_v">возрождение</span></router-link>
        <router-link to="/courses"><span class="header_vi">выбрать курс</span></router-link>
        <router-link to="/courses"><span class="header_vi">мероприятия</span></router-link>
        <router-link to="/courses"><span class="header_vi">корпоративное обучение</span></router-link>

        <div class="icon_wrap">
          <router-link to="/courses"><span><img src="@/assets/img/cart.png" alt="" class="header__img"></span></router-link>
          <router-link to="/courses"><span><img src="@/assets/img/telegram.png" alt="" class="header__img"></span></router-link>
          <router-link to="/courses"><span><img src="@/assets/img/person.png" alt="" class="header__img"></span></router-link>
        </div>
      </div>
      <div class="header__mwrap bar d-md-none d-sm-flex">
        <span><a @click="isActiveMob = true" class="bar-icon siteBar-btn">
            <span></span>
          </a></span>
        <span class="header__mstree">
          <router-link to="/courses"><img src="@/assets/img/tree.png" alt="" class="header__mtree"></router-link>
        </span>
        <span class="header__msava">
          <router-link to="/courses"><img src="@/assets/img/ava.png" alt="" class="header__mava"></router-link>
        </span>
      </div>
    </div>
    <!-- mobile-menu START -->
    <div class="mobile-menu" :class="{ siteBar: isActiveMob }">
      <a @click="isActiveMob = false" style="color: black; box-shadow: none" class="bars siteBar-btn">X</a>
      <div class="mnuCnt">
        <router-link to="/" @click="isActiveMob= false"><img width="250" style="opacity: 1; margin-bottom: 15px"
            src="@/assets/img/tree.png" alt="" /></router-link>
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
          <li>
            <router-link @click="isActiveMob= false" :to="'/courses'">МОИ КУРСЫ</router-link>
          </li>
          <li>
            <router-link @click="isActiveMob= false" :to="'/webinar'">ВЕБИНАРЫ</router-link>
          </li>
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
    serach() {
      if (!this.sea) {
        return true;
      }
      this.$router.push('/search/' + this.sea)

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
  width: 100%;
  height: 3px;
  background: #000;
  display: block;
  position: relative;
  top: 17px;
  border-radius: 30px;
  transition: .3s;
}

.bar a {
  width: 35px;
  height: 35px;
  float: right;
  position: relative;
}

@media only screen and (max-width: 768px) {
  .logo-area {
    transform: translateY(-4px);
  }
}

.header_wrap {
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: #1F1F1F;
}

.header_v {
  font-family: 'Bertilion';
  font-style: normal;
  font-weight: 400;
  font-size: 44px;
  line-height: 50px;
  text-align: center;
  letter-spacing: 0.3em;
  text-transform: uppercase;
  margin: 19px 31px 18px 61px;
}

.header_vi {
  font-family: 'Bertilion';
  font-style: normal;
  font-weight: 400;
  font-size: 36px;
  line-height: 62px;
  display: flex;
  align-items: center;
  text-transform: uppercase;
  margin-right: 31px;
  color: #FFFFFF;
}

.header__mwrap {
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: #FED076;
}

.siteBar-btn {
  margin: 13px 22px 15px 34px;
}

.header__mstree {
  margin: 13px 145px 15px 130px;
}

.header__mava {
  width: 30px;
  height: 30px;
}

.header__msava {
  margin-right: 22px;
}

.header__mtree {
  width: 39px;
  height: 49px;
}

.icon_wrap {
  display: flex;
  justify-content: center;
  align-items: center;
}

.icon_wrap img {
  margin: 24px 30px 27px 0;
}



.bar a span:before {
  left: 0;
  content: "";
  position: absolute;
  width: 100%;
  height: 100%;
  background: #000;
  bottom: 10px;
  border-radius: 30px;
  transition: .3s;
}

.bar a span:after {
  left: 0;
  content: "";
  position: absolute;
  width: 100%;
  height: 100%;
  background: #000;
  bottom: -10px;
  border-radius: 30px;
  transition: .3s;
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

@media (max-width: 1372px) {
  .header_v {
    font-size: 36px;
    margin: 19px 25px 18px 40px;
  }

  .header_vi {
    font-size: 27px;
    margin-right: 25px;
  }
  .header__mstree {
    margin: -3px 65px 15px 50px;
  }

}

@media (max-width: 1103px) {
  .header_v {
    font-size: 27px;
    margin: 15px 20px 15px 20px;
  }

  .header_vi {
    font-size: 22px;
    margin-right: 20px;
  }

  .header__img {
    height: 20px;
    width: 20px;
    margin: 21px 20px 21px 0px;
  }
  .header__mstree {
    margin: -3px 65px 15px 50px;
  }
}

@media (max-width: 868px) {
  .header_v {
    font-size: 24px;
    margin: 15px 20px 15px 20px;
  }
  .header__mstree {
    margin: -3px 65px 15px 50px;
  }

  .header_vi {
    font-size: 20px;
    margin-right: 18px;
  }

  .header__img {
    height: 20px;
    width: 20px;
    margin: 20px 18px 20px 0px;
  }
  .header__mstree {
    margin: -3px 65px 15px 50px;
  }

}

@media (max-width: 794px) {
  .header_v {
    font-size: 20px;
    margin: 15px 20px 15px 20px;
  }

  .header_vi {
    font-size: 16px;
    margin-right: 18px;
  }
}

@media (max-width: 456px) {
  .header__mstree {
    margin: -5px 65px 15px 50px;
  }
}
</style>
