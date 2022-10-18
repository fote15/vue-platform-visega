<template>
  <div>
    <div id="app">
      <Start v-if="six_sec"/>
      <HelloWorld />

      <router-view ref="childComponent" />

      <Footer />
    </div>
  </div>
</template>
<script>
import HelloWorld from "./components/HelloWorld.vue";
import Footer from "./components/Footer.vue";
import Alert from "./components/Alert.vue";
import Login from "./views/Login.vue";
import Start from "./components/StartAnim.vue";
import Vue from "vue";
import axios from "axios";



export default {
  name: "App",
  components: {
    HelloWorld,
    Footer,
    Login,
    Start,
    Alert,
  },
  methods: {},
  data() {
    return {
      six_sec: true,
    };
  },
  computed: {},
  watch: {
    $route(to, from) {
      this.$store.state.isLogin = false
    },
  },
  beforeMount() {
    setTimeout(()=>{
      this.six_sec = false
    },7000)
    if (localStorage.getItem("fullname")) {
      this.$store.state.fullname = localStorage.getItem("fullname");
    }

    if (localStorage.getItem("email")) {
      this.$store.state.email = localStorage.getItem("email");
    }


    if (localStorage.getItem("token")) {
      this.$store.state.token = localStorage.getItem("token");
    }
    if (localStorage.getItem("phone")) {
      this.$store.state.phone = localStorage.getItem("phone");
    }

    if (localStorage.getItem("ava")) {
      this.$store.state.ava = localStorage.getItem("ava");
    }
    if (localStorage.getItem("cartData")) {
      this.$store.state.cartData = JSON.parse( localStorage.getItem("cartData"));
    }




    /*this.$store.$state.isLogin = false;
    if (localStorage.getItem("token")) {
      this.$store.state.token = localStorage.getItem("token");
    }*/


  },
};
</script>

<style>
@media only screen and (max-width: 1200px)and (min-width: 992px) {
  .menu a{
    font-size: 35px;
  }
}

@media only screen and (max-width: 770px) {
 

}

@font-face {
  font-family: "Am";
  src: local("Am"),
    url("@/assets/am.ttf") format("truetype");
}

@font-face {
  font-family: "Amsterdam Deco One";
  src: local("Amsterdam Deco One"),
    url('@/assets/fonts/AmsterdamDecoOne.woff') format("truetype");
}

@import "./assets/css/bootstrap.min.css";
@import "./assets/css/style.css";
@import "./assets/css/magnific-popup.css";
@import "./assets/css/owl.carousel.min.css";
@import "./assets/css/owl.theme.default.min.css";
@import "./assets/css/responsive.css";

@import "./assets/css/slick.css";
@import "./assets/css/details.css";

.cabinet_van_active {
  color: #F7D188;
}


input:-webkit-autofill,
input:-webkit-autofill:hover, 
input:-webkit-autofill:focus, 
input:-webkit-autofill:active{
    -webkit-box-shadow: 0 0 0 1000px #272727 inset !important;
}
input:-webkit-autofill,
input:-webkit-autofill:hover,
input:-webkit-autofill:focus,
input:-webkit-autofill:active {
    transition: background-color 5000s ease-in-out 0s;
}


input:-webkit-autofill{
    -webkit-text-fill-color: white !important;
}


#app .cabinet-main a:hover {
  color: #F7D188;
}
.dfxxx{
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
