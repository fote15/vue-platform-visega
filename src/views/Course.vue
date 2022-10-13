<template>
  <section class="main_con">
    <div class="hero-area border-none pd-0" v-if="data.photo">
      <a style="cursor: pointer" @click="buy()" v-if="!data.buyed">
        <img :src="data.price_photo" alt="" class="hero-b_img" /></a>
      <a style="cursor: pointer" @click="$router.push('/course-view/' + data.id)" v-if="data.buyed">
        <img :src="data.photo" alt="" class="hero-b_img" /></a>
    </div>
    <!-- Hero-area END -->
    <!-- introTwo-area STARTED -->
    <div class="introTwo" v-if="data.photo">
      <div class="container">
        <div class="row">
          <div class="col-lg-5">
            <div class="iTwoVdo">
              <video width="100%" controls id="myvideo">
                <source :src="data.trailer" type="video/mp4" />
                <source src="rain.ogg" type="video/ogg" />
                Your browser does not support the video tag.
              </video>

              <img @click="fullVid" src="@/assets/img/Preview.png" alt="" />
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
              <div class="d-none d-md-block">
               
              </div>





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




@media only screen and  (max-width: 768px) {
  
  .cr-content-in{
    max-height: 310px;
  }
  .cr-content{
    padding: 49px 30px!important;
    max-height: 400px;
  }
.details {
    background-image: url('@/assets/img/rama00.svg');
    background-size: contain;
    background-repeat: no-repeat;
  }

}

@media only screen and  (max-width: 430px) {
  .cr-content-in{
    max-height: 250px!important;
  }
  .cr-content{
    max-height: 350px!important;
  }
}

@media only screen and  (max-width: 344px) {
  div.cr-content-in{
    max-height: 150px!important;
  }
  div.cr-content{
    max-height: 250px!important;
  }
}


@media only screen and  (max-width: 991px) {

  .iconOf {
    width: 125px;
    height: 125px;
    display: none;
    margin-right: 30px;
}
}

@media only screen and (max-width: 978px) and (max-width: 978px) {
  

}



@media only screen and (min-width: 767px){
  .cr-content{
    padding: 200px!important;
  }
}
@media only screen and (min-width: 767px) and (max-width: 1000px) {
  div.cr-content {
    padding-right: 50px !important;
  }

  
  .details {
    background-image: url('@/assets/img/rama4.svg');
    background-size: contain;
    background-repeat: no-repeat;
  }
}

@media only screen and (min-width: 1000px) and (max-width: 1200px) {
  .details {
    background-image: url('@/assets/img/rama2.svg');
    background-size: contain;
    background-repeat: no-repeat;
  }
}

@media only screen and  (min-width: 1200px)and (max-width: 1400px) {
  .details {
    background-image: url('@/assets/img/rama11.svg');
    background-size: contain;
    background-repeat: no-repeat;
  }
}

@media only screen and  (min-width: 1400px) {
  .details {
    background-image: url('@/assets/img/rama0.svg');
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
  width: 20px;
}

::-webkit-scrollbar-track {
  background-color: #d9d9d92f;
  border: 60px solid transparent;
}

::-webkit-scrollbar-thumb {
  background-color: #d6dee1;
}

::-webkit-scrollbar-thumb {
  background-color: #d6dee1;
  border-radius: 20px;
}


::-webkit-scrollbar-thumb {
  background-color: #d6dee1;
  border-radius: 20px;
  border: 6px solid transparent;
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
  background-color: #FED076;
}

.top_12 {
  position: absolute;
  top: 24px;
  transform: translateY(0.5);
  left: 199px;
  width: calc(50% - 348px);
  /* height: 50px; */
  height: 7px;
  background-color: #FED076;
}

.top_13 {
  position: absolute;
  top: 42px;
  left: 199px;
  width: calc(50% - 348px);
  /* height: 50px; */
  height: 9px;
  background-color: #FED076;
}

.top_14 {
  position: absolute;
  top: 60px;
  left: 199px;
  width: calc(50% - 348px);
  /* height: 50px; */
  height: 8px;
  background-color: #FED076;
}


.top_2 {
  position: absolute;
  top: 0px;
  left: calc(50% + 149px);
  width: calc(50% - 348px);
  /* height: 50px; */
  height: 9px;
  background-color: #FED076;
}

.top_22 {
  position: absolute;
  top: 25px;
  left: calc(50% + 149px);

  width: calc(50% - 348px);
  /* height: 50px; */
  height: 10px;
  background-color: #FED076;
}

.top_23 {
  position: absolute;
  top: 45px;
  left: calc(50% + 149px);

  width: calc(50% - 348px);
  /* height: 50px; */
  height: 10px;
  background-color: #FED076;
}

.top_24 {
  position: absolute;
  top: 63px;
  left: calc(50% + 149px);
  width: calc(50% - 348px);
  /* height: 50px; */
  height: 10px;
  background-color: #FED076;
}


.top_42 {
  position: absolute;
  bottom: 0px;
  left: calc(50% + 149px);
  width: calc(50% - 348px);
  /* height: 50px; */
  height: 9px;
  background-color: #FED076;
}

.top_422 {
  position: absolute;
  bottom: 25px;
  left: calc(50% + 149px);

  width: calc(50% - 348px);
  /* height: 50px; */
  height: 10px;
  background-color: #FED076;
}

.top_423 {
  position: absolute;
  bottom: 45px;
  left: calc(50% + 149px);

  width: calc(50% - 348px);
  /* height: 50px; */
  height: 10px;
  background-color: #FED076;
}

.top_424 {
  position: absolute;
  bottom: 63px;
  left: calc(50% + 149px);
  width: calc(50% - 348px);
  /* height: 50px; */
  height: 10px;
  background-color: #FED076;
}












.top_31 {
  position: absolute;
  bottom: 0px;
  left: 199px;
  width: calc(50% - 348px);
  /* height: 50px; */
  height: 8px;
  background-color: #FED076;
}

.top_312 {
  position: absolute;
  bottom: 24px;
  transform: translateY(0.5);
  left: 199px;
  width: calc(50% - 348px);
  /* height: 50px; */
  height: 7px;
  background-color: #FED076;
}

.top_313 {
  position: absolute;
  bottom: 42px;
  left: 199px;
  width: calc(50% - 348px);
  /* height: 50px; */
  height: 9px;
  background-color: #FED076;
}

.top_314 {
  position: absolute;
  bottom: 60px;
  left: 199px;
  width: calc(50% - 348px);
  /* height: 50px; */
  height: 8px;
  background-color: #FED076;
}







.top_left {
  position: absolute;
  top: 210px;
  left: 0;
  width: 9px;
  height: 1000px;
  background-color: #FED076;
}

.top_left2 {
  position: absolute;
  top: 210px;
  left: 24px;
  width: 9px;
  height: 1000px;
  background-color: #FED076;
}

.top_left3 {
  position: absolute;
  top: 210px;
  left: 45px;
  width: 8px;
  height: 1000px;
  background-color: #FED076;
}

.top_left4 {
  position: absolute;
  top: 210px;
  left: 63px;
  width: 7px;
  height: 1000px;
  background-color: #FED076;
}

.top_right {
  position: absolute;
  top: 210px;
  right: 0;
  width: 9px;
  height: 1000px;
  background-color: #FED076;
}

.top_right2 {
  position: absolute;
  top: 210px;
  right: 24px;
  width: 9px;
  height: 1000px;
  background-color: #FED076;
}

.top_right3 {
  position: absolute;
  top: 210px;
  right: 45px;
  width: 8px;
  height: 1000px;
  background-color: #FED076;
}

.top_right4 {
  position: absolute;
  top: 210px;
  right: 63px;
  width: 7px;
  height: 1000px;
  background-color: #FED076;
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
    padding-top: 45px !important;
  }
}
</style>