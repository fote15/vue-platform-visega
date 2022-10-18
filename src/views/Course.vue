<template>
  <section class="main_con">
    <!-- Hero-area END -->
    <!-- introTwo-area STARTED -->

    <div class="d-block d-md-none" v-if="data.photo">
      <img :src="data.photo" :alt="data.photo" />
      <div class="container">
        <div class="df">
          <span v-if="data.lessons">{{ data.lessons.length }} занятий</span>
          <h1>6500 р</h1>
          <span>4 ч 25 м</span>
        </div>

        <img class="addcart__btn" src="@/assets/img/addcart.png" alt="" />

        <div class="row">
          <div class="col-12">
            <div class="auth__img" :style="{backgroundImage: 'url('+data.photo+')'}" :alt="data.photo"></div>
            <div class="iTwoVdo-wrp text-center">
              <h2>{{ data.author_id.fio }}</h2>
              <p>{{ data.author_id.description }}</p>
            </div>
          </div>

          <div class="col-12">
            <div class="iTwoVdo">
              <video
                width="100%"
                controls
                id="myvideo"
                autoplay
                poster="data.photo"
              >
                <source :src="data.trailer" type="video/mp4" />
                <source src="rain.ogg" type="video/ogg" />
                Your browser does not support the video tag.
              </video>
              <img
              style="display:none"
                @click="fullVid"
                src="@/assets/img/play.png"
                alt="play"
                class="play_icon"
              />
              <img @click="fullVid" src="@/assets/img/Preview.png" alt="" />
            </div>
          
          </div>
          
        </div>


      </div>
    </div>
    <div class="introTwo d-none d-md-block" v-if="data.photo">
      <div class="container">
        <div class="row">
          <div class="col-lg-5">
            <div class="iTwoVdo">
              <video
                width="100%"
                controls
                id="myvideo"
                autoplay
                poster="data.photo"
              >
                <source :src="data.trailer" type="video/mp4" />
                <source src="rain.ogg" type="video/ogg" />
                Your browser does not support the video tag.
              </video>
              <img
                @click="fullVid"
                src="@/assets/img/play.png"
                alt="play"
                class="play_icon"
              />
              <img @click="fullVid" :src="data.price_photo" alt="" />
            </div>
            <div class="price__buttons">
              <span style="color: #f7f6eb"> {{ data.price }} р</span>
              <span>В КОРЗИНУ</span>
            </div>
          </div>
          <div class="col-lg-7">
            <div class="iTwoVdo-wrp">
              <h2>{{ data.author_id.fio }}</h2>
              <p>{{ data.author_id.description }}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- introTwo-area END -->

    <!-- course-area STARTED -->
    <div class="course-area">
      <img src="@/assets/img/secondpage/statcue.png" alt="" class="statuce" />
      <div class="container">
        <div class="row">
          <div class="col-md-10">
            <div class="course-wrp">
              <h2>ИДЕЯ КУРСА</h2>
              <p>{{ data.description }}</p>
            </div>
          </div>
          <div class="col-lg-12">
            <h1 class="d-block d-md-none dttl">СОДЕРЖАНИЕ</h1>
            <div class="details">
              <div class="d-none d-md-block"></div>

              <div class="cr-content">
                <h1 class="d-none d-md-block">СОДЕРЖАНИЕ</h1>
                <div class="cr-content-in">
                  <ul>
                    <li v-for="(y, index) in data.lessons" v-bind:key="y.id">
                      <div v-if="index === 0" class="iconOf">
                        <img src="@/assets/img/secondpage/play.png" alt="" />
                      </div>
                      <div v-else class="iconOf">
                        <img src="@/assets/img/secondpage/lock.png" alt="" />
                      </div>
                      <div class="dltBLkWp">
                        <span>{{ index - 0 + 1 }} cерия</span>
                        <h4>{{ y.title }}</h4>
                        <p>{{ y.description }}</p>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- course-area END -->
  </section>
</template>

<script>
// @ is an alias to /src
import axios from "axios";
export default {
  name: "Home",
  components: {},
  data() {
    return {
      data: [],
    };
  },

  mounted() {
    if (this.$route.params.id) {
      if (this.$store.state.token) {
        axios
          .post(
            "https://education-api.gnt-it.ru/v1/course/view",
            {
              id: this.$route.params.id,
            },
            {
              headers: {
                Authorization: `Bearer ${this.$store.state.token}`,
              },
            }
          )
          .then((response) => {
            this.data = response.data.data;

            return false;

            localStorage.setItem("token", response.data.user.token);

            this.$store.state.token = response.data.user.token;
            this.$router.push("/");
          })
          .catch((error) => {
            this.login_error = true;
          });
      } else {
        axios
          .post("https://education-api.gnt-it.ru/v1/course/view", {
            id: this.$route.params.id,
          })
          .then((response) => {
            this.data = response.data.data;
            return false;

            localStorage.setItem("token", response.data.user.token);

            this.$store.state.token = response.data.user.token;
            this.$router.push("/");
          })
          .catch((error) => {
            this.login_error = true;
          });
      }
    }

    window.scrollTo({
      top: 0,
      behavior: "instant",
    });
  },
  methods: {
    fullVid() {
      var elem = document.getElementById("myvideo");
      if (elem.requestFullscreen) {
        elem.requestFullscreen();
      } else if (elem.webkitRequestFullscreen) {
        /* Safari */
        elem.webkitRequestFullscreen();
      } else if (elem.msRequestFullscreen) {
        /* IE11 */
        elem.msRequestFullscreen();
      }
      document.getElementById("myvideo").play();
    },
    buy() {
      console.log(this.$store.state.token);
      if (!this.$store.state.token) {
        this.$router.push("/login");
        return true;
      }
      this.$store.state.byuingCur = this.$route.params.id;
      this.$router.push("/buy-course");
    },
  },
};
</script>

<style scoped>
.auth__img{
  background-size: cover;
  background-position: center;
  width: 150px;
  display: block;
  border-radius: 100%;
  height: 150px;
  margin: 20px auto ;
}
.addcart__btn {
  margin: 0 auto;
  display: block;
}
.course__btn_mr {
  cursor: pointer;
  margin-right: 14px;
}

.course__btn {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 120px;
  height: 45px;
  border-radius: 50px;
  border: 2px solid #f1d693;
  border-width: 2px;
  background-color: transparent;
  font-family: "Amsterdam Deco One";
  font-size: 25px;
}

.df {
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-family: "Amsterdam Deco One";
  margin-top: 10px;
}
.df span {
  text-decoration: underline;
  font-size: 24px;
}
.df h1 {
  font-family: "Amsterdam Deco One";
  color: #fed076;
  font-size: 44px;
}

.iTwoVdo {
  position: relative;
}
.play_icon {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}
.price__buttons {
  position: relative;
  border: 2px solid #d4b07c;
  border-radius: 20px;
  display: flex;
  justify-content: space-around;
  padding: 20px;
  background-color: rgba(0, 0, 0, 0.3);
  margin-top: 16px;
}

.price__buttons::after {
  content: "";
  position: absolute;
  top: 10%;
  left: 50%;
  transform: translateX(-50%);
  width: 2px;
  height: 80%;
  background-color: #d4b07c;
}
.price__buttons span:nth-child(1) {
  font-size: 50px;
  font-family: "Amsterdam Deco One";
  color: #bd9540 !important;
  font-style: normal;
  font-weight: 900;
  font-size: 50px;
  line-height: 79px;
}
.price__buttons span:nth-child(2) {
  font-family: "Amsterdam Deco One";

  font-style: normal;
  font-weight: 900;
  font-size: 50px;
  line-height: 79px;
  display: flex;
  align-items: center;
  text-align: center;
  text-transform: lowercase;

  background: linear-gradient(180deg, #ffffff 30%, #ecbb52 70%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  text-fill-color: transparent;

  text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
}

@media only screen and (max-width: 768px) {
  .cr-content-in {
    max-height: 310px;
  }
  .cr-content {
    padding: 49px 30px !important;
    max-height: 400px;
  }
  .details {
    background-image: url("@/assets/img/rama00.svg");
    background-size: contain;
    background-repeat: no-repeat;
    margin-top: 10px;
    margin: 0 auto;
    background-position: center;
  }
}

@media only screen and (max-width: 430px) {
  .cr-content-in {
    max-height: 250px !important;
  }
  .cr-content {
    max-height: 350px !important;
  }
}

@media only screen and (max-width: 344px) {
  div.cr-content-in {
    max-height: 150px !important;
  }
  div.cr-content {
    max-height: 250px !important;
  }
}

@media only screen and (max-width: 991px) {
  .iconOf {
    width: 125px;
    height: 125px;
    display: none;
    margin-right: 30px;
  }
}

@media only screen and (max-width: 978px) and (max-width: 978px) {
}

@media only screen and (min-width: 767px) {
  .cr-content {
    padding: 200px !important;
  }
}
@media only screen and (min-width: 767px) and (max-width: 1000px) {
  div.cr-content {
    padding-right: 50px !important;
  }

  .details {
    background-image: url("@/assets/img/rama4.svg");
    background-size: contain;
    background-repeat: no-repeat;
  }
}

@media only screen and (min-width: 1000px) and (max-width: 1200px) {
  .details {
    background-image: url("@/assets/img/rama2.svg");
    background-size: contain;
    background-repeat: no-repeat;
  }
}

@media only screen and (min-width: 1200px) and (max-width: 1400px) {
  .details {
    background-image: url("@/assets/img/rama11.svg");
    background-size: contain;
    background-repeat: no-repeat;
  }
}

@media only screen and (min-width: 1400px) {
  .details {
    background-image: url("@/assets/img/rama0.svg");
    background-size: contain;
    background-repeat: no-repeat;
  }
}

.sv_l {
  position: absolute;
  left: 0;
  top: 0;
  height: 600px;
}

.sv_r {
  position: absolute;
  left: 0;
  top: 0;
  height: 600px;
}

.sv_left {
  left: 0;
  top: 0;
  height: 800px;
}

::-webkit-scrollbar {
  width: 5px;
}

::-webkit-scrollbar-track {
  
  background-color: #d9d9d92f;
  border: 60px solid transparent;
}
::-webkit-scrollbar-thumb {
  background-color: #d8d8d8;
  border-radius: 20px;
  background-clip: content-box;
}
.sv_c {
  transform: translateX(-50%);
  position: absolute;
  top: 0;
  left: 50%;
}

.sv_11 {
  position: absolute;
  top: 0;
  left: 0;
  width: 200px;
  height: 210px;
}

.sv_11_b {
  position: absolute;
  bottom: 0;
  left: 0;
  transform: scale(1, -1);

  width: 200px;
}

.top_1 {
  position: absolute;
  top: 0px;
  left: 199px;
  width: calc(50% - 348px);
  /* height: 50px; */
  height: 8px;
  background-color: #fed076;
}

.top_12 {
  position: absolute;
  top: 24px;
  transform: translateY(0.5);
  left: 199px;
  width: calc(50% - 348px);
  /* height: 50px; */
  height: 7px;
  background-color: #fed076;
}

.top_13 {
  position: absolute;
  top: 42px;
  left: 199px;
  width: calc(50% - 348px);
  /* height: 50px; */
  height: 9px;
  background-color: #fed076;
}

.top_14 {
  position: absolute;
  top: 60px;
  left: 199px;
  width: calc(50% - 348px);
  /* height: 50px; */
  height: 8px;
  background-color: #fed076;
}

.top_2 {
  position: absolute;
  top: 0px;
  left: calc(50% + 149px);
  width: calc(50% - 348px);
  /* height: 50px; */
  height: 9px;
  background-color: #fed076;
}

.top_22 {
  position: absolute;
  top: 25px;
  left: calc(50% + 149px);

  width: calc(50% - 348px);
  /* height: 50px; */
  height: 10px;
  background-color: #fed076;
}

.top_23 {
  position: absolute;
  top: 45px;
  left: calc(50% + 149px);

  width: calc(50% - 348px);
  /* height: 50px; */
  height: 10px;
  background-color: #fed076;
}

.top_24 {
  position: absolute;
  top: 63px;
  left: calc(50% + 149px);
  width: calc(50% - 348px);
  /* height: 50px; */
  height: 10px;
  background-color: #fed076;
}

.top_42 {
  position: absolute;
  bottom: 0px;
  left: calc(50% + 149px);
  width: calc(50% - 348px);
  /* height: 50px; */
  height: 9px;
  background-color: #fed076;
}

.top_422 {
  position: absolute;
  bottom: 25px;
  left: calc(50% + 149px);

  width: calc(50% - 348px);
  /* height: 50px; */
  height: 10px;
  background-color: #fed076;
}

.top_423 {
  position: absolute;
  bottom: 45px;
  left: calc(50% + 149px);

  width: calc(50% - 348px);
  /* height: 50px; */
  height: 10px;
  background-color: #fed076;
}

.top_424 {
  position: absolute;
  bottom: 63px;
  left: calc(50% + 149px);
  width: calc(50% - 348px);
  /* height: 50px; */
  height: 10px;
  background-color: #fed076;
}

.top_31 {
  position: absolute;
  bottom: 0px;
  left: 199px;
  width: calc(50% - 348px);
  /* height: 50px; */
  height: 8px;
  background-color: #fed076;
}

.top_312 {
  position: absolute;
  bottom: 24px;
  transform: translateY(0.5);
  left: 199px;
  width: calc(50% - 348px);
  /* height: 50px; */
  height: 7px;
  background-color: #fed076;
}

.top_313 {
  position: absolute;
  bottom: 42px;
  left: 199px;
  width: calc(50% - 348px);
  /* height: 50px; */
  height: 9px;
  background-color: #fed076;
}

.top_314 {
  position: absolute;
  bottom: 60px;
  left: 199px;
  width: calc(50% - 348px);
  /* height: 50px; */
  height: 8px;
  background-color: #fed076;
}

.top_left {
  position: absolute;
  top: 210px;
  left: 0;
  width: 9px;
  height: 1000px;
  background-color: #fed076;
}

.top_left2 {
  position: absolute;
  top: 210px;
  left: 24px;
  width: 9px;
  height: 1000px;
  background-color: #fed076;
}

.top_left3 {
  position: absolute;
  top: 210px;
  left: 45px;
  width: 8px;
  height: 1000px;
  background-color: #fed076;
}

.top_left4 {
  position: absolute;
  top: 210px;
  left: 63px;
  width: 7px;
  height: 1000px;
  background-color: #fed076;
}

.top_right {
  position: absolute;
  top: 210px;
  right: 0;
  width: 9px;
  height: 1000px;
  background-color: #fed076;
}

.top_right2 {
  position: absolute;
  top: 210px;
  right: 24px;
  width: 9px;
  height: 1000px;
  background-color: #fed076;
}

.top_right3 {
  position: absolute;
  top: 210px;
  right: 45px;
  width: 8px;
  height: 1000px;
  background-color: #fed076;
}

.top_right4 {
  position: absolute;
  top: 210px;
  right: 63px;
  width: 7px;
  height: 1000px;
  background-color: #fed076;
}

.sv_12 {
  position: absolute;
  top: -12px;
  left: 200px;
  width: calc(50% - 350px);
  /* height: 50px; */
  transform: scaleY(0.78);
}

.sv_14 {
  position: absolute;
  top: -12px;
  left: calc(50% + 150px);
  width: calc(50% - 300px);
  /* height: 50px; */
  transform: scaleY(0.78);
}

.sv_13 {
  position: absolute;
  top: 0;
  left: 50%;
  transform: translateX(-50%);
  width: 300px;
}

.sv_213 {
  position: absolute;
  bottom: 0;
  left: 50%;
  transform: scale(1, -1) translateX(-50%);

  width: 300px;
}

.sv_15 {
  position: absolute;
  top: 0;
  right: 0px;
  width: 200px;
}

.sv_15_b {
  position: absolute;
  bottom: 0;
  right: 0px;
  width: 200px;

  transform: scale(1, -1);
}

@media only screen and (max-width: 1000px) {
  .cr-content li {
    display: block !important;
  }

  ul {
    display: block !important;
    margin: 0 auto !important;
  }

  .cr-content {
    padding-right: 30px !important;
  }

  .cr-content-in {
    margin-right: 20px;
    margin-left: 20px;
    overflow: auto;
  }
}

.cr-content {
  height: 1409px;
  padding-right: 90px;
  overflow: hidden;
}

.cr-content-in {
  height: 809px;
  overflow: auto;
}

.dltBLkWp p {
  font-family: "Am";
}

.iconOf {
  background-color: #f1d693 !important;
}

@media only screen and (max-width: 1000px) {
  .main_con {
    min-height: 100vh;
    background-size: cover;
    background-image: url("@/assets/img/bg_c_mob.png");
  }

  .introTwo {
    background-image: none !important;
  }

  .course-area {
    background-image: none !important;
  }

  .hero-area {
  }
}
</style>