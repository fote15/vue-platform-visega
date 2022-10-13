<template>
  <section class="main__content">
    <!-- Hero-area STARTED -->
    <div class="hero-area">
      <img src="@/assets/img/hshape.png" alt="" class="hero-shape" />
      <img src="" alt="" class="hero-img" />
      <div class="container">
        <div class="row">
          <div class="col-md-5">
            <div class="hero-wrp">
              <img src="" alt="" />
              <div class="buttons_wrap">
                <a @click="roCur('courses')"><img src="@/assets/img/btn.png" alt="" /></a>
              </div>
              <div class="buttons_wrap2">
                <a @click="roCur('about')"><img src="@/assets/img/btn2.png" alt="" /></a>
              </div>
            </div>
          </div>
          <div class="col-md-7"></div>
        </div>
      </div>

      <div class="moble_main">
        <li class="">
          <router-link to="/" @click="roCur('courses')" href="#">КУРСЫ</router-link>
        </li>
        <li>
          <router-link :to="'/webinar'" @click="isActiveMob = false" href="#">ОНЛАЙН-МЕРОПРИЯТИЯ</router-link>
        </li>
        <li>
          <router-link :to="'/'" @click="roCur('about')" href="#">О НАС</router-link>
        </li>
      </div>
    </div>
    <!-- Hero-area END -->
    <!-- kursy-area STARTED -->
    <div class="kursy-area">
      <div class="container">
        <div class="kursy-wrp">
          <img src="@/assets/img/shape.png" class="shape" alt="" />
          <img src="@/assets/img/shape.png" class="shape shape13" alt="" />
          <img src="@/assets/img/shape2.png" class="shape2" alt="" />
          <img src="@/assets/img/shape2.png" class="shape2 shape13" alt="" />
          <div class="row">
            <div class="col-md-8 offset-md-2">
              <div class="kursy-content" id="courses">
                <h1 class="title">КУРСЫ</h1>
                <div class="kurcy-banners">
                  <div class="row">
                    <div v-bind:key="x.id" v-for="x in courses" class="col-md-6">
                      <div class="course_card">
                        <img :src="x.photo" alt="" class="course__image">
                        <div class="course__item__wrap">
                          <span>{{x.lessons.length}} занятий</span>
                          <img src="@/assets/img/Course__line.png" alt="" class="course__image__line d-none d-lg-block">
                          <span>{{x.price}} Р</span>
                        </div>
                        <p class="Course__about">{{x.description}}</p>
                        <div class="course__btn__wrap d-none d-md-flex">
                          <a class="course__btn_mr">
                            <div class="course__btn">в корзину</div>
                          </a>
                          <a>
                            <div class="course__btn">подробнее</div>
                          </a>
                        </div>
                        <div class="course__btn__mob course__btn d-md-none">В корзину</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="container">
        <h1 class="title d-none d-md-block" style="max-width: 856px; margin: 0 auto" id="about">
          О НАС
        </h1>
      </div>
    </div>
    <!-- kursy-area END -->

    <!-- Intro-area STARTED -->
    <div class="intro-area">
      <div class="intro_top">
        <div class="container">
          <div class="row">
            <div class="col-md-8 offset-md-2"></div>
          </div>
        </div>
      </div>
      <div class="intro-vdo d-none d-md-block">
        <video autoplay muted playsinline loop style="width: 100%" height="570"
          poster="https://media.sproutsocial.com/uploads/2017/02/10x-featured-social-media-image-size.png">
          <source src="https://education-st.gnt-it.ru//video//e/8/9/d/4/6335a43b1bc93.mp4"
            type='video/mp4; codecs="avc1.42E01E, mp4a.40.2"' />
          Тег video не поддерживается вашим браузером.
          <a href="http://techslides.com/demos/sample-videos/small.mp4">Скачайте видео</a>.
        </video>


      </div>

      <div class="d-block d-md-none mob_about">
        <div class="container">
          <h1 class="title d" style="max-width: 856px; margin: 0 auto; margin-bottom: 60px" id="about">
            О НАС
          </h1>

          <div class="mob_vid" @click="fullVid">
            <img class="rama" src="@/assets/img/rama.png" alt="" />
            <img src="@/assets/img/vid_about.png" alt="" />
          </div>
        </div>
      </div>
    </div>
    <!-- Intro-area END -->
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
      chartsEnabled: false,
      allData: [],
      date_now: null,
      vidosOpen: false,
      fields: [
        {
          key: "id",
          sortable: true,
          label: "#ID",
        },
        {
          key: "id",
          sortable: true,
          label: "#ID",
        },
        {
          key: "out_system_id",
          sortable: true,
          label: "# Заказа",
        },
        {
          key: "name",
          sortable: false,
          label: "Заказчик",
        },
        {
          key: "address",
          sortable: true,
          label: "Адрес",
        },
        {
          key: "delivery_time",
          sortable: true,
          label: "Время доставки",
        },
        {
          key: "created_at",
          sortable: false,
          label: "Дата создания",
        },
        {
          key: "delivery_fact_time",
          sortable: false,
          label: "Точное время доставки",
        },
        {
          key: "phone",
          sortable: false,
          label: "Телефон",
        },
        {
          key: "name",
          sortable: false,
          label: "Товар( в АПИ нет)",
        },
        {
          key: "status",
          sortable: true,
          label: "Статус",
        },
      ],
      courses: [],
      items: [],
    };
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
    roCur(e) {
      document.getElementById(e).scrollIntoView();
    },
  },
  mounted() {
    window.addEventListener("load", videoScroll);
    window.addEventListener("scroll", videoScroll);

    function videoScroll() {
      if (document.querySelectorAll("video[autoplay]").length > 0) {
        var windowHeight = window.innerHeight,
          videoEl = document.querySelectorAll("video[autoplay]");

        for (var i = 0; i < videoEl.length; i++) {
          var thisVideoEl = videoEl[i],
            videoHeight = thisVideoEl.clientHeight,
            videoClientRect = thisVideoEl.getBoundingClientRect().top;

          if (
            videoClientRect <= windowHeight - videoHeight * 0.5 &&
            videoClientRect >= 0 - videoHeight * 0.5
          ) {
            thisVideoEl.play();
          } else {
            thisVideoEl.pause();
          }
        }
      }
    }




    const element = document.getElementById("courses");
    const offset = 0;
    const bodyRect = document.body.getBoundingClientRect().top;
    const elementRect = element.getBoundingClientRect().top;
    const elementPosition = elementRect;
    const offsetPosition = elementPosition - offset;

    if (this.$store.state.scrolerCur === true) {
      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
      this.$store.state.scrolerCur = false;
    }

    var today = new Date();
    this.date_now =
      today.getDate() +
      "." +
      (today.getMonth() + 1) +
      "." +
      today.getFullYear();

    axios
      .get("https://education-api.gnt-it.ru/v1/course/list", {
        headers: {
          Authorization: `Bearer ${this.$store.state.token}`,
        },
      })
      .then((response) => {
        console.log(response);
        this.courses = response.data.data;
        return false;

        localStorage.setItem("token", response.data.user.token);

        this.$store.state.token = response.data.user.token;
        this.$router.push("/");
      })
      .catch((error) => {
        this.login_error = true;
      });
  },
};
</script>
<style scoped>
.course_card {
  background-color: rgba(0, 0, 0, 0.4);
  border-radius: 29px;
  padding: 55px 30px 25px 30px;
  margin-bottom: 23px;
}

.course__image {
  width: 100%;

}

.course__item__wrap {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-top: 19px;

}

.course__item__wrap span {
  font-size: 32px;
  font-family: 'Amsterdam Deco One';
}

@media (max-width: 1400px) and (min-width: 990px) {
  .course__item__wrap span {
    font-size: 25px;
  }
}

@media (max-width: 1200px) and (min-width: 990px) {
  .course__item__wrap span {
    font-size: 16px;
  }

  div.course__btn {
    width: 95px;
    height: 35px;
    font-size: 17px;
  }

  .Course__about {
    font-size: 22px !important;
  }
}

@media (max-width: 990px) and (min-width: 767px) {
  div.course__btn {
    width: 80px;
    height: 30px;
    font-size: 12px;
  }

  .Course__about {
    font-size: 21px !important;
  }

  .course__item__wrap span {
    font-size: 21px;
  }
}

@media (max-width: 767px) {
  .kursy-wrp {
    background-image: none;
  }

}



.course__image__line {
  transform: translateY(-4px);
  width: 140px;
  height: 20px;
}

.Course__about {
  display: -webkit-box;
  max-width: 400px;
  height: 75px;
  text-align: center;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-overflow: ellipsis;
  line-height: 39px;
  color: #D4B07C;
  font-size: 36px;
  font-family: 'Amsterdam Deco One';
}

.course__btn_mr {
  margin-right: 14px;
}


.course__btn {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 120px;
  height: 45px;
  border-radius: 50px;
  border: 2px solid #F1D693;
  border-width: 2px;
  background-color: transparent;
  font-family: 'Amsterdam Deco One';
  font-size: 25px;

}

.course__btn__wrap {
  display: flex;
  justify-content: center;
}
.course__btn__mob{
  margin: 0 auto;
}


.mob_about {
  background-image: url("@/assets/img/bg_a.png");
  background-size: cover;
  padding: 80px 0;
  padding-bottom: 120px;
}

.mob_vid {
  height: 215px;
  position: relative;
  margin: 0 auto;
}

.mob_vid img {
  position: absolute;
  width: 100%;
}

.rama {
  z-index: 99;
  transform: scale(1.1);
}

.main__line {
  position: absolute;
  top: 2300px;
  z-index: -1;
}

.intro-vdo {
  background-color: #779365;
}

.shape13 {
  top: 2103px !important;
}

.kursy-wrp {
  overflow: hidden;
  background-repeat: no-repeat !important;
}

.buttons_wrap {
  cursor: pointer;
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  left: 200px;
}

.buttons_wrap2 {
  cursor: pointer;

  position: absolute;
  top: 50%;
  transform: translateY(130px);
  left: 200px;
}

.intro_top {
  padding-top: 0 !important;
}

.hero-area {
  position: relative;
  min-height: 100vh;
  background-image: url("@/assets/img/bg_img.png");
}

.moble_main {
  display: none;
  font-size: 36px;
  color: #dfd6c6;
}

@media only screen and (max-width: 768px) {
  .moble_main {
    display: block;
    margin: 40px 30px;
  }

  .hero-area {
    background-image: url("@/assets/img/phone_main.png") !important;
    width: 100%;
    background-size: cover;
  }
}
</style>