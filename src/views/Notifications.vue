<template>
  <section class="main_con">
    <div class="cabinet-main">
      <div class="container">
        <div class="row">
          <div class="col-md-4">
            <h1>
              <router-link to="/cabinet">{{
              $store.state.fullname
              }}</router-link>
            </h1>

            <h3>новичок</h3>

            <h2>
              <router-link to="/courses">МОИ КУРСЫ</router-link>
            </h2>
            <h2>
              <router-link to="/contact">ОБРАТНАЯ СВЯЗЬ</router-link>
            </h2>

            <h2>
              <router-link to="/prize" >ДОСТИЖЕНИЯ</router-link>
            </h2>
            <h2>
              <router-link to="/notifications" class="cabinet_van_active" >УВЕДОМЛЕНИЯ</router-link>
            </h2>
            <br />
            <br />
            <h2><a @click="logout()">выйти</a></h2>
          </div>
          <div class="col-md-4">
            <div class="form-cabinet">
              <div class="form__wrapper">
                <div class="not__img__w">
                  <img src="@/assets/img/notifications_p.png" alt="">
                </div>
                <div class="border_wrap">
                  <div class="not__wrap">
                    <h1>новое достижение!</h1>
                    <p>Поздравляем Вас, вы получили asd asdd</p>
                  </div>
                  <div class="not__wrap2">
                    <span>25.12</span>
                    <img src="@/assets/img/notification_ellipse.png" alt="">
                  </div>
                </div>
              </div>
              <div class="form__wrapper">
                <div class="not__img__w">
                  <img src="@/assets/img/notifications_p.png" alt="">
                </div>
                <div class="border_wrap">
                  <div class="not__wrap">
                    <h1>новое достижение!</h1>
                    <p>Поздравляем Вас, вы получили asd asdd</p>
                  </div>
                  <div class="not__wrap2">
                    <span>25.12</span>
                    <img src="@/assets/img/notification_ellipse.png" alt="">
                  </div>
                </div>
              </div>
              <div class="form__wrapper">
                <div class="not__img__w">
                  <img src="@/assets/img/notifications_p.png" alt="">
                </div>
                <div class="border_wrap">
                  <div class="not__wrap">
                    <h1>новое достижение!</h1>
                    <p>Поздравляем Вас, вы получили asd asdd</p>
                  </div>
                  <div class="not__wrap2">
                    <span>25.12</span>
                    <img src="@/assets/img/notification_ellipse.png" alt="">
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="col-md-4">
            <div class="form__2__wrap">
              <div class="form-cabinet__2">
                <div class="fc2_wrap">
                  <img src="@/assets/img/notifications_p.png" alt="">
                  <h1>новое достижение!</h1>
                </div>


              </div>
            </div>
            <div class="form-cabinet__3">
              <div class="n__text__wrap">
                <p>The agile world of software development demands the delivery of new features at lightning speed. To
                  achieve this, teams need an inclusive on-premise mobile device lab that enables developers and QAs to
                  test their APK files across the latest and legacy Android devices.</p>
                <p>It is not feasible for all organizations to have such a comprehensive device lab set up as it demands
                  enormous investment and maintenance efforts.</p>
                <p>This article addresses this challenge by demonstrating an intuitive method that will help developers
                  and QAs run APK files online directly through a web browser.</p>
                <p>С уважением,</p>
                <p>Школа Своободной Общественной Мысли
                  “Возрождение”</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
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
      data: false,
      activeLetter: 0,
    };
  },
  beforeDestroy() {
    window.removeEventListener('resize', this.onResize);
  },
  mounted() {

    this.$nextTick(() => {
      window.addEventListener('resize', this.onResize);
    })
    this.onResize();

    axios
      .post(
        "https://education-api.gnt-it.ru/v1/achievement/list",
        {

        },
        {
          headers: {
            Authorization: `Bearer ${this.$store.state.token}`,
          },
        }
      )
      .then((response) => {
        this.data = response.data.data;
      })
      .catch((error) => {
        this.data = [];
      });
  },
  methods: {
    onResize() {
      this.windowHeight = window.innerWidth;
      if (this.windowHeight < 768) {
        this.$router.push('/cabinet')
      }
    },
    logout() {
      localStorage.clear();
      this.$store.state.username = null;
      this.$router.push("/login");
    },
  },
};
</script>

<style scoped>
@media only screen and (max-width: 768px) {
  .form-cabinet {
    padding: 0 !important;
    border: none !important;
    background-color: rgba(0, 0, 0, 0) !important;
    box-shadow: none !important;
  }
}

.prize_l h1 {
  text-align: center;
  font-size: 144px !important;
}

.prize_l h2 {
  text-align: center;
  font-size: 24px !important;
}

.prize_l {
  width: 266px;
  height: 266px;

  padding: 20px;
  background: #272727;
  border: 5px solid #a99060;
  box-shadow: 0px 7px 15px rgba(0, 0, 0, 0.55);
  border-radius: 30px;
}

.cabinet-main a:hover {
  color: #f7d188;
}

.cabinet-main a:hover {
  color: #f7d188;
}

.cabinet-main a:hover {
  color: #f7d188;
}

.cabinet-main h1 {
  font-size: 67px;
}

.cabinet-main h3 a {
  font-family: "American Typewriter";
  border-bottom: 2px solid #fff;
  padding-bottom: 2px;
}

.cabinet-main h3 {
  margin-bottom: 20px;
}

.cabinet-main {
  background-image: url(@/assets/img/texture.png);
  background-size: cover;
  padding: 100px 0;
}

.form__wrapper {
  display: flex;
  margin-bottom: -50px;
}

.form-cabinet {
  justify-content: center;
  background-color: #272727;
  width: 100%;
  background: #272727;
  border: 7px solid #a99060;
  box-shadow: 0px 7px 15px rgba(0, 0, 0, 0.55);
  border-radius: 30px;
  padding: 10px !important;
  min-height: 666px;
}

.not__img__w {
  margin-left: 13px;
  padding-top: 77px;
  width: 50px;
}

.not__img__w img {
  border: 1px solid #FFFFFF;
  border-radius: 30px;
}

.not__wrap {
  margin-left: 14px;
  padding-top: 77px;

}

.not__wrap h1 {
  font-family: 'Amsterdam Deco One';
  font-style: normal;
  font-weight: 400;
  font-size: 16.3117px;
  line-height: 18px;
  letter-spacing: 0.02em;
}

.border_wrap {
  display: flex;
  border-bottom: 1px solid rgba(255, 255, 255, 0.25);
}

.not__wrap p {
  font-family: 'CMU Typewriter Text';
  font-style: normal;
  font-weight: 700;
  font-size: 14.2728px;
  line-height: 19px;
  text-overflow: ellipsis;
  width: 190px;
  overflow: hidden;
  white-space: nowrap;
}

.not__wrap2 {
  display: flex;
  flex-direction: column;
  padding-top: 77px;
  margin-right: 17px;
}

.not__wrap2 span {
  font-family: 'CMU Typewriter Text';
  font-style: normal;
  font-weight: 700;
  font-size: 14.2728px;
  line-height: 19px;
  letter-spacing: 0.02em;
  color: #C7C7C7;
}

.not__wrap2 img {
  margin: 7px 0 0 5px;

  width: 20px;
  height: 20px;
}

.form-cabinet__2 {
  background-color: #272727;
  width: 100%;
  height: 10% !important;
  background: #272727;
  border: 7px solid #a99060;
  box-shadow: 0px 7px 15px rgba(0, 0, 0, 0.55);
  border-radius: 30px;
}

.fc2_wrap {
  display: flex;
  justify-content: start;
  align-items: center;
  margin: 12px 54px 12px 25px;

}

.fc2_wrap img {
  width: 50px;
  border: 1px solid #FFFFFF;
  border-radius: 30px;
}

.fc2_wrap h1 {
  font-family: 'Amsterdam Deco One';
  font-style: normal;
  font-weight: 400;
  font-size: 16.3117px;
  line-height: 18px;
  letter-spacing: 0.02em;
  margin-left: 12px;
  margin-top: 3px;
}

.form__2__wrap {
  margin-bottom: 39px;
}

.form-cabinet__3 {

  background-color: #272727;
  width: 100%;
  background: rgba(223, 223, 223, 0.1);
  border: 7px solid #a99060;
  box-shadow: 0px 7px 15px rgba(0, 0, 0, 0.55);
  border-radius: 30px;
  min-height: 537px;
  padding: 45px 36px 67px 24px;
}

.form-cabinet__3 p {
  font-family: 'CMU Typewriter Text';
  font-style: normal;
  font-weight: 200;
  font-size: 14.2728px;
  line-height: 17px;
  letter-spacing: 0.02em;
  color: #FFFFFF;
}





.form-cabinet input::placeholder,
.form-cabinet textarea {
  color: white !important;
  font-family: "American Typewriter";
  font-style: normal;
}
@media (max-width: 991px) {
  .not__wrap p {
    width: 122px;
  }
}
@media (max-width: 1199px) {
  .not__wrap p {
    width: 122px;
  }
  .form-cabinet__3 {
    min-height: 539px;
    padding-bottom: 43px;
  }
}
</style>