<template>
  <section class="main_con" :class="{ horse: ro_edit == 3 }">
    <div class="cabinet-main d-block d-md-none">
      <div class="user-image">
        <label for="file-input">
        
          <div class="circle2" v-if="!$store.state.ava" style="position:relative">
            <img src="@/assets/img/plus.png" class="plusIcon" alt="">
          </div>
                <div class="circle2" v-else  :style="'background-image:url('+$store.state.ava+');background-size:cover;background-position:center;'"></div>
              </label>

      
      </div>
      <h1
        style="
          margin-bottom: 0;
          padding-bottom: 0;
          line-height: 50px;
          font-size: 38px;
        "
        v-if="!error_msg"
      >
        {{ $store.state.fullname }}
      </h1>

      <h1
          style="
            margin-bottom: 0;
          padding-bottom: 0;
          font-size: 38px;
          min-height:0;
          "
          class="text-center d-block d-md-none"
          v-if="error_msg"
        >
          {{ error_msg }}
        </h1>


      <input type="text" placeholder="" v-model="email" class="phone_email" disabled="true" />
      <div v-if="ro_edit == 0">
        <h2>
          <router-link to="#" @click="ro_edit = 1"
            >РЕДАКТИРОВАТЬ ПРОФИЛЬ</router-link
          >
        </h2>
        <h2>
          <router-link to="#" @click="ro_edit = 2">ОБРАТНАЯ СВЯЗЬ</router-link>
        </h2>
        <h2>
          <router-link to="#" @click="ro_edit = 3">ДОСТИЖЕНИЯ</router-link>
        </h2>

        <h2>
          <router-link to="#" @click="logout()">Выйти</router-link>
        </h2>

      </div>
      <!--RED-->
      <div class="d-block d-md-none p90" v-if="ro_edit == 1">
       
        <div>
          <div class="log">
            <span>
              <input
                type="text"
                class="invis_input"
                v-model="email"
                placeholder="ПОЧТА"
              />
            </span>
          </div>
          <div class="log">
            <span>
              <input
                type="password"
                class="invis_input"
                v-model="oldpas"
                placeholder="СТАРЫЙ ПАРОЛЬ"
            /></span>
          </div>

          <div class="log">
            <span>
              <input
                type="password"
                class="invis_input"
                v-model="newpas"
                placeholder="НОВЫЙ ПАРОЛЬ"
            /></span>
          </div>

          <div>
            <img
              @click="changeinfo()"
              style="
                width: 130px;
                margin: 0 auto;
                margin-top: 30px;
                display: block;
                cursor: pointer;
              "
              src="@/assets/img/ok.png"
              alt=""
            />
            <img
              @click="ro_edit = 0"
              style="
                width: 130px;
                margin: 0 auto;
                margin-bottom: 70px;
                display: block;
                cursor: pointer;
              "
              src="@/assets/img/cancel.png"
              alt=""
            />
          </div>
        </div>
      </div>

      <!--RED-->

      <div class="d-block d-md-none p90" v-if="ro_edit == 2">
        <h1
          style="
            white-space: nowrap;
            text-overflow: ellipsis;
            overflow: hidden;
            margin-top: 70px;
            margin-bottom: 10px;
          "
          class="text-center d-none d-md-block"
          v-if="error_msg"
        >
          {{ error_msg }}
        </h1>
        <div>
          <div class="log">
            <span>
              <input
                type="text"
                autocomplete="chrome-off"
                class="invis_input"
                v-model="contact_1"
                placeholder="Ваше имя"
              />
            </span>
          </div>
          <div class="log">
            <span>
              <input
                type="text"
                autocomplete="chrome-off"
                class="invis_input"
                v-model="contact_2"
                placeholder="Введите вашу почту"
            /></span>
          </div>

          <div class="log">
            <span>
              <input
                type="text"
                autocomplete="chrome-off"
                class="invis_input"
                v-model="contact_3"
                placeholder="Текст"
            /></span>
          </div>

          <div>
            <img
              @click="send()"
              style="
                width: 130px;
                margin: 0 auto;
                margin-top: 30px;
                display: block;
                cursor: pointer;
              "
              src="@/assets/img/ok.png"
              alt=""
            />
            <img
              @click="ro_edit = 0"
              style="
                width: 130px;
                margin: 0 auto;
                margin-bottom: 70px;
                display: block;
                cursor: pointer;
              "
              src="@/assets/img/cancel.png"
              alt=""
            />
          </div>
        </div>
      </div>
      <div class="d-block d-md-none p90" v-if="ro_edit == 3">
        <div class="col-md-12">
          <div class="form-cabinet">
            <h1 v-if="data.length < 1">тут пока пусто...</h1>
            <div v-else class="row">
              <div class="col-md-4 prize_l dfxxx" v-bind:key="x.id" v-for="x in data">
                <div v-if="x.id !== activeLetter" @click="activeLetter = x.id" class="">
                  <h1>{{ x.letter }}</h1>
                  <h2>{{ x.for }}</h2>
                </div>
                <div v-else @click="activeLetter = 0">
                  <h2> БУКВА {{ x.letter }}</h2>
                  <h4 style="font-family: 'Am'">{{ x.title }}</h4>
                </div>
              </div>
            </div>
          </div>
        </div>
        <img
          @click="ro_edit = 0"
          style="
            width: 130px;
            margin: 10px auto;
            margin-bottom: 70px;
            display: block;
            cursor: pointer;
          "
          src="@/assets/img/cancel.png"
          alt=""
        />
      </div>
      <!--FORM-->
    </div>

    <div class="cabinet-main d-none d-md-block">
      <div class="container">
        <div class="row">
          <div class="col-md-3">
            <h1>
              <router-link to="/cabinet" class="cabinet_van_active">{{
                $store.state.fullname
              }}</router-link>
            </h1>
            <h2>
              <router-link to="/courses">МОИ КУРСЫ</router-link>
            </h2>
            <h2>
              <router-link to="/contact">ОБРАТНАЯ СВЯЗЬ</router-link>
            </h2>
            <h2>
              <router-link to="/prize">ДОСТИЖЕНИЯ</router-link>
            </h2>
            <br />
            <br />
            <h2><a @click="logout()">выйти</a></h2>
          </div>

          <div class="col-md-6">
            <div class="form-cabinet form-cabinet_main">
              <h1
                class="text-center"
                style="
                  white-space: nowrap;
                  text-overflow: ellipsis;
                  overflow: hidden;
                "
                v-if="!error_msg"
              >
                ПРИВЕТ,{{ $store.state.fullname }}
              </h1>
              <h1 class="text-center" v-if="error_msg">
                {{ error_msg }}
              </h1>
              <div class="user-image">
                <div id="xslUpload">
                  <label for="file-input">
                    <button class="btn importar" type="button"></button>
                  </label>
                  <input
                  accept="image/png,  image/jpeg"
                    @change="fileChanged($event)"
                    ref="fileInput"
                    class="file-input"
                    id="file-input"
                    type="file"
                  />
                </div>

                <div class="circle2" v-if="!$store.state.ava"></div>
                <div class="circle2" v-else  :style="'background-image:url('+$store.state.ava+');background-size:cover;background-position:center;'"></div>
              </div>

              <h1 class="relative" style="border-bottom: 2px solid white">
                <div class="row">
                  <div class="col-md-4 text_inp">ПОЧТА:</div>
                  <div class="col-md-8">
                    <input type="text" class="invis_input" v-model="email" />
                  </div>
                </div>
              </h1>
              <h1 class="relative" style="border-bottom: 2px solid white">
                <div class="row">
                  <div class="col-md-6 text_inp">ТЕЛЕФОН:</div>
                  <div class="col-md-6">
                    <input type="text" class="invis_input" v-model="phone" />
                  </div>
                </div>
              </h1>
              <span class="fonamer"
                >Включить смс-оповещения
                <input
                  style="
                    width: unset;
                    transform: translateY(3px);
                    background-color: rgba(0, 0, 0, 0);
                  "
                  type="checkbox"
                />
              </span>
              <br /><img
                @click="changeinfo()"
                style="
                  width: 130px;
                  margin: 10px auto;
                  display: block;
                  cursor: pointer;
                "
                src="@/assets/img/btn_1.svg"
                alt=""
              />
            </div>
          </div>

          <div class="col-md-3">
            <div class="form-cabinet" style="height: 212px">
              <img
                class="form-cabinet-img_open"
                v-if="!open_pass"
                @click="open_pass = true"
                style="width: 254px; display: block; cursor: pointer"
                src="@/assets/img/btn_2.svg"
                alt=""
              />
              <div v-if="open_pass" style="text-align: center">
                <input
                  class="gradient-input"
                  placeholder="Старый пароль..."
                  type="password"
                  v-model="oldpas"
                /><br /><br />
                <input
                  class="gradient-input"
                  placeholder="Новый пароль..."
                  type="password"
                  v-model="newpas"
                />
                <br />
                <br />
                <img
                  @click="changeinfoPass"
                  style="
                    width: 130px;
                    margin: 0 auto;
                    display: block;
                    cursor: pointer;
                  "
                  src="@/assets/img/btn_1.svg"
                  alt=""
                />
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
      activeLetter: 0,
      contact_1: "",
      contact_2: "",
      contact_3: "",
      ro_edit: 0,
      oldpas: "",
      newpas: "",
      username: "",
      password: "",
      login_error: false,
      button_disabled: false,
      error_msg: false,
      phone: "",
      email: "",
      open_pass: false,
      activeChangePass: false,
      data: false,
    };
  },
  mounted() {
   

    axios
      .post(
        "https://education-api.gnt-it.ru/v1/achievement/list",
        {},
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

    this.error_msg = false;
    this.phone = this.$store.state.phone;
    this.email = this.$store.state.email;
    //this.$store.state.isLogin = true;
  },
  methods: {
    fileChanged() {
      var data = new FormData();
      var file = this.$refs.fileInput.files[0];
      if(!file){
        return true;
      }
      data.append("ava", file);
      axios
        .post("https://education-api.gnt-it.ru/v1/user/update", data, {
          headers: {
            Authorization: `Bearer ${this.$store.state.token}`,
          },
        })
        .then((response) => {
          this.error_msg = "Сохранено!";
        if(response.data.data.ava){
          this.$store.state.ava = response.data.data.ava;
          localStorage.setItem("ava", response.data.data.ava);
        }
          

          setTimeout(() => {
            this.error_msg = false;
          }, 2000);
        })
        .catch((error) => {
          console.log(error)
          this.error_msg = "Проверьте данные, максимальный размер файла 1MB";
          setTimeout(() => {
            this.error_msg = false;
          }, 3000);
        });
    },
    changeinfo() {
      if(this.oldpas || this.newpas){
        if(this.newpas.length<6){
          this.error_msg = "Пароль должен состоять минимум из 6 символов";
            setTimeout(() => {
              this.error_msg = false;
            }, 2000);
            return true;  
        }
        axios
          .post(
            "https://education-api.gnt-it.ru/v1/user/update",
            {
              phone: this.phone,
              email: this.email,
              oldPassword: this.oldpas,
              newPassword: this.newpas,
            },
            {
              headers: {
                Authorization: `Bearer ${this.$store.state.token}`,
              },
            }
          )
          .then((response) => {
            this.$store.state.email = response.data.data.email;
            this.$store.state.fullname = response.data.data.fullname;

            this.error_msg = "Сохранено! Пароль изменен";
            setTimeout(() => {
              this.error_msg = false;
            }, 2000);
          })
          .catch((error) => {
            this.error_msg = "Проверьте данные";
            setTimeout(() => {
              this.error_msg = false;
            }, 4000);
          });
          return true;

      }
      this.activeChangePass = true;
      this.error_msg = false;
      if (this.validEmail(this.email)) {
        axios
          .post(
            "https://education-api.gnt-it.ru/v1/user/update",
            {
              email: this.email,
              phone: this.phone,
            },
            {
              headers: {
                Authorization: `Bearer ${this.$store.state.token}`,
              },
            }
          )
          .then((response) => {
            this.$store.state.email = response.data.data.email;
            this.$store.state.phone = response.data.data.phone;

            localStorage.setItem("email", response.data.data.email);
            localStorage.setItem("phone", response.data.data.phone);

            this.$store.state.fullname = response.data.data.fullname;

            this.error_msg = "Сохранено!";
            setTimeout(() => {
              this.error_msg = false;
            }, 2000);
          })
          .catch((error) => {
            this.error_msg = "Проверьте данные";
            setTimeout(() => {
              this.error_msg = false;
            }, 4000);
          });
      } else {
        this.error_msg = "Неверный формат почты";
        setTimeout(() => {
          this.error_msg = false;
        }, 2000);
      }
    },

    changeinfoPass() {
      this.activeChangePass = true;
      this.error_msg = false;
      if (this.validEmail(this.$store.state.email)) {
        axios
          .post(
            "https://education-api.gnt-it.ru/v1/user/update",
            {
              email: this.email,
              oldPassword: this.oldpas,
              newPassword: this.newpas,
            },
            {
              headers: {
                Authorization: `Bearer ${this.$store.state.token}`,
              },
            }
          )
          .then((response) => {
            this.$store.state.email = response.data.data.email;
            this.$store.state.fullname = response.data.data.fullname;

            this.error_msg = "Сохранено!";
            setTimeout(() => {
              this.error_msg = false;
            }, 2000);
          })
          .catch((error) => {
            this.error_msg = "Проверьте данные";
            setTimeout(() => {
              this.error_msg = false;
            }, 4000);
          });
      } else {
        this.error_msg = "Неверный формат почты";
        setTimeout(() => {
          this.error_msg = false;
        }, 2000);
      }
    },

    validEmail: function (email) {
      var re =
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
      return re.test(email);
    },
    logout() {
      localStorage.clear();
      this.$store.state.token = null;
      this.$store.state.username = null;
      this.$store.state.email = null;
      this.$router.push("/login");
    },
  },
};
</script>
<style scoped>
.log {
  padding-left: 23px;
  padding-right: 23px;
}
#xslUpload {
  padding-top: 47px;
  margin-bottom: 15px;
}
#xslUpload > label {
  position: absolute;
  z-index: 99;
  right: 50%;

  cursor: pointer;
}
#xslUpload > .file-input {
  display: none;
}

#xslUpload .importar {
  z-index: 9999;
  position: relative;
  width: 150px;
  pointer-events: none;
  background: url("@/assets/img/Group1.svg");
  background-repeat: no-repeat;
  background-size: cover;
  height: 50px;
  padding-left: 45px;
  color: #fff;
  border-radius: 0;
  padding-top: 10px;
  font-weight: 700;
  padding-bottom: 10px;
}

#xslUpload > label:hover > .importar {
}

.iput_des_file {
  background-image: url("@/assets/img/Group1.svg");
}
.d-block {
  min-height: 90vh;
}
.phone_email {
  background-color: rgba(0, 0, 0, 0) !important;
  font-size: 14px !important;
  border: none;
  color: #ababab !important;
  margin-bottom: 20px;
  text-align: center;
  min-width: 350px;
}

@media only screen and (max-width: 1400px) {
  .text_inp{
    font-size: 60px;
  }
}

@media only screen and (max-width: 1200px)and (min-width: 992px) {
  .text_inp{
    font-size: 40px!important;
    transform: translateY(30px);
  }
}

@media only screen and (max-width: 992px) {
  .text_inp{
    font-size: 20px!important;
    transform: translateY(60px) !important;
  }
}

@media only screen and (max-width: 768px) {
  .main_con {
    background-image: none !important;
    background-color: #272727 !important;
  }
  input {
    background-color: #272727 !important;
  }
  .cabinet-main {
    background-image: none !important;
    background-color: #272727 !important;
  }

  .login__global__form_p {
    padding: 0 15px !important;
  }
  .login__global__form {
    margin: 0 auto !important;
    border: 0px solid black !important;
    background-color: rgba(0, 0, 0, 0) !important;
    position: relative !important;
    top: 0 !important;
    left: 0 !important;
    transform: none !important;
  }

  input {
    font-family: "Am" !important;
  }
  .container2 {
    display: block;
    position: relative;
    padding-left: 35px;
    margin-bottom: 12px;
    cursor: pointer;
    font-size: 22px;
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
  }

  /* Hide the browser's default checkbox */
  .container2 input {
    position: absolute;
    opacity: 0;
    cursor: pointer;
    height: 0;
    width: 0;
  }

  /* Create a custom checkbox */
  .checkmark {
    border-radius: 0% !important;
    position: absolute;
    top: 0;
    left: 0;
    height: 20px;
    width: 20px;
    background-color: rgba(0, 0, 0, 0);
    border: 2px white solid;
  }

  /* On mouse-over, add a grey background color */
  .container2:hover input ~ .checkmark {
    background-color: #ccc;
  }

  /* When the checkbox is checked, add a blue background */
  .container2 input:checked ~ .checkmark {
    background-color: rgba(0, 0, 0, 0);
  }

  /* Create the checkmark/indicator (hidden when not checked) */
  .checkmark:after {
    content: "";
    position: absolute;
    display: none;
  }

  /* Show the checkmark when checked */
  .container2 input:checked ~ .checkmark:after {
    display: block;
  }

  /* Style the checkmark/indicator */
  .container2 .checkmark:after {
    left: 6px;
    top: 3px;
    width: 5px;
    height: 8px;
    border: solid white;
    border-width: 0 2px 2px 0;
    -webkit-transform: rotate(35deg);
    -ms-transform: rotate(35deg);
    transform: rotate(35deg);
  }

  .checker_in {
    border: 2px solid #d9d9d9;
    accent-color: rgba(0, 0, 0, 0);
  }

  .invis_input {
    font-size: 30px;
    font-weight: 300 !important;
    width: 100% !important;
    background-color: rgba(0, 0, 0, 0) !important;
    color: white;
    border: none;
  }

  .login__global__form {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    background-color: #272727;
    max-width: 500px;
    margin: 0 auto;
    border: 5px solid #a99060;
    border-radius: 25px;
  }

  .login__global__form_p {
    padding: 0 74px;
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

  .circle2 {
    width: 72px !important;
    height: 72px !important;
  }
  .cabinet-main {
    padding-top: 25px !important;
  }
}

.gradient-input {
  width: 100% !important;
  background-color: rgba(0, 0, 0, 0) !important;
  border: 2px solid #a99060;
  border-radius: 5px;
}
.gradient-input {
  font-size: 20px !important;
}
.hiddenBl {
  display: none !important;
}

.line_under_input {
  transform: translateY(-30px);
}

.form-cabinet-img {
  position: relative;
}
input {
  font-family: "Am" !important;
  color: white !important;
  font-size: 32px !important;
}
.horse {
  background-image: url(@/assets/img/horse.png) !important;
  background-color: none !important;
}
.horse .cabinet-main {
  background-color: rgba(0, 0, 0, 0) !important;
}

.form-cabinet-img input {
  background-color: rgba(0, 0, 0, 0);
  border-radius: 10px;
  filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
  border: 1px solid;

  border-image-source: linear-gradient(180deg, #f7f6eb 0%, #bd9540 51.04%);

  width: 294px;
  height: 48px;
}

.gradient-box {
  display: flex;
  align-items: center;
  width: 90%;
  margin: auto;
  max-width: 22em;
  position: relative;
  box-sizing: border-box;
  color: #fff;
  background: #000;
  background-clip: padding-box;
  /* !importanté */
  border: solid 2px transparent;
  /* !importanté */
  border-radius: 1em;
}
.gradient-box {
}
.gradient-box:before {
  content: "";
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: -1;
  margin: -2px;
  /* !importanté */
  border-radius: inherit;
  /* !importanté */

  background: linear-gradient(180deg, #f7f6eb 0%, #bd9540 51.04%),
    linear-gradient(0deg, rgba(217, 217, 217, 0), rgba(217, 217, 217, 0));
}

.form-cabinet-img_open {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}

.invis_input {
  width: 100% !important;
  background-color: rgba(0, 0, 0, 0);
  color: white;
  border: none;
}

.form-cabinet {
  filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
  border: 5px solid #a99060;
  border-radius: 30px;
  background-color: #272727;
  padding: 35px;
}

.form-cabinet_main {
  padding: 35px 74px !important;
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

.user-image {
  position: relative;
  min-height: 270px;
}
.d-block .user-image {
  position: relative;
  min-height: 90px;
}
.d-block a {
  font-family: "Amsterdam Deco One";
  font-weight: 400;
}
.d-block {
  text-align: center;
}

.user-image img {
  z-index: 3;
  top: 45px;
  left: 30%;
  position: absolute;
  transform: translateX(-50%);
}

.circle2 {
  top: 0;
  z-index: 1;
  left: 50%;
  transform: translateX(-50%);
  height: 150px;
  width: 150px;
  position: absolute;
  border-radius: 100%;
  background-color: #d18b4b;
}

a:hover {
  cursor: pointer;
}

@media only screen and (max-width: 768px) {
  .main_con {
    background-image: url("@/assets/img/mob_tree.png");
    background-position: center !important;
    background-size: cover !important;
  }
}

@media only screen and (max-width: 768px) {
  .log .main__content {
    background-image: url("@/assets/img/mob_tree.png") !important;
  }
  .log input,
  .log textarea {
    background-color: #272727 !important;
  }
  .log input {
    transform: scale(0.94);
    padding: 0 !important;
  }
  .log span {
    position: relative;
    height: 54px !important;
    display: block;
    z-index: 0;
    margin-bottom: 10px;
  }
  .log input {
    z-index: 9;
    position: relative;
    width: 100%;
    background-color: rgba(0, 0, 0, 0);
    border-radius: 10px;
    color: white;
    border: none;
  }
  .log span::before {
    content: "";
    position: absolute;
    inset: 0;
    border-radius: 10px;
    padding: 1px;
    background: linear-gradient(180deg, #f7f6eb, #bd9540);
    -webkit-mask: linear-gradient(#fff 0 0) content-box,
      linear-gradient(#fff 0 0);
    -webkit-mask-composite: xor;
    mask-composite: exclude;
  }

  .imgbtn {
    display: block;
    margin: 0 auto;
  }
  .log input {
    font-size: 13px !important;
    height: 54px !important;
    padding: 18px 13px;
  }
  textarea {
    padding: 18px 13px;
  }
  .borders10 {
    border: none !important;
  }
  .p90 {
    padding: 10px !important;
  }
  .title_ccorp {
    font-size: 40px !important;
    display: inline-block;
    line-height: 30px !important;
    margin-right: 10px;
  }
  .title_ccorp2 {
    display: inline-block;
    line-height: 30px !important;
    font-size: 40px !important;
    margin: 34px 34px !important;
  }

  .borders10 {
    border: 5px solid white;
  }
  .log input {
    text-align: center;
  }
  .log input::placeholder {
    color: white;
  }

  .log input {
    border-radius: 10px;
    padding: 5px;
    margin: 0px 0;
    width: 100%;
    color: white;
    background-color: rgba(0, 0, 0, 0);
  }


  .prize_l {
    margin: 0 auto;
  width: 266px;
  height: 266px;

  padding: 20px;
  background: #272727;
  border: 5px solid #a99060;
  box-shadow: 0px 7px 15px rgba(0, 0, 0, 0.55);
  border-radius: 30px;
}

.form-cabinet {
    padding: 0!important;
    border:none!important;
    background-color: rgba(0,0,0,0)!important;
    box-shadow: none!important;
  }

}

.plusIcon{
  position: absolute;
  width: 13px;
  height: 13px;
  left: 50%!important;
  top: 50%!important;
  transform: translate(-50%,-50%)!important ;
  
}
</style>