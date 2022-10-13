<template>
  <section class="main_con" style="position: relative">
    <div class="login__global__form" v-if="!is_reg">
      <img src="@/assets/img/logline.png" alt="" style="margin-top: 10px" />

      <div class="d-block d-md-none p90">
        <h1
          class="text-center"
          style="
            white-space: nowrap;
            text-overflow: ellipsis;
            overflow: hidden;
            margin-top: 70px;
            margin-bottom: 10px;
          "
          v-if="!error_msg"
        >
          ВХОД
        </h1>
        <h3
          style="
            white-space: nowrap;
            text-overflow: ellipsis;
            overflow: hidden;
            margin-top: 70px;
            margin-bottom: 10px;
          "
          class="text-center"
          v-if="error_msg"
        >
          {{ error_msg }}
        </h3>
        <div>
          <div class="log">
            <span>
              <input
                type="text"
                class="invis_input"
                v-model="username"
                placeholder="ПОЧТА"
              />
            </span>
          </div>
          <div class="log">
            <span>
              <input
                type="password"
                class="invis_input"
                v-model="password"
                placeholder="ПАРОЛЬ"
            /></span>
          </div>
          <h1
            style="
              border-bottom: 1px solid white;
              display: inline-block;
              line-height: 36px;
            "
          >
            Забыли пароль?
          </h1>
          <br />
          <span class="fonamer"
            >Подтверждаю, что мне исполнилось 18 лет
            <label
              class="container2"
              style="
                float: right;
                width: unset;
                transform: translateY(3px);
                background-color: rgba(0, 0, 0, 0);
              "
            >
              <input type="checkbox" v-model="checkedAge" />
              <span class="checkmark"></span>
            </label>
          </span>
          <div>
            <img
              @click="login()"
              style="
                width: 130px;
                margin: 0 auto;
                margin-top: 50px;
                margin-bottom: 10px;
                display: block;
                cursor: pointer;
              "
              src="@/assets/img/log_in_btn.png"
              alt=""
            />
            <img
              @click="is_reg = true"
              style="
                width: 130px;
                margin: 0 auto;
                margin-bottom: 70px;
                display: block;
                cursor: pointer;
              "
              src="@/assets/img/reg.svg"
              alt=""
            />
          </div>
        </div>
      </div>

      <div class="login__global__form_p d-none d-md-block log p90">
        <div class="form-cabinet form-cabinet_main">
          <h1
            class="text-center"
            style="
              white-space: nowrap;
              text-overflow: ellipsis;
              overflow: hidden;
              margin-top: 70px;
              margin-bottom: 10px;
            "
            v-if="!error_msg"
          >
            ВХОД
          </h1>
          <h1 class="text-center" v-if="error_msg">
            {{ error_msg }}
          </h1>
          <h1
            class="relative"
            style="border-bottom: 2px solid white; padding-bottom: 10px"
          >
            <div class="row">
              <div class="col-md-4">ПОЧТА:</div>
              <div class="col-md-8">
                <input type="text" class="invis_input" v-model="username" />
              </div>
            </div>
          </h1>
          <h1
            class="relative"
            style="
              border-bottom: 2px solid white;
              padding-bottom: 10px;
              margin-bottom: 30px;
            "
          >
            <div class="row">
              <div class="col-md-4">ПАРОЛЬ:</div>
              <div class="col-md-8">
                <input type="password" class="invis_input" v-model="password" />
              </div>
            </div>
          </h1>
          <h1
            style="
              border-bottom: 1px solid white;
              display: inline-block;
              line-height: 36px;
            "
          >
            Забыли пароль?
          </h1>
          <br />
          <span class="fonamer"
            >Подтверждаю, что мне исполнилось 18 лет
            <label
              class="container2"
              style="
                float: right;
                width: unset;
                transform: translateY(3px);
                background-color: rgba(0, 0, 0, 0);
              "
            >
              <input type="checkbox" v-model="checkedAge" />
              <span class="checkmark"></span>
            </label>
          </span>
          <br /><img
            @click="login()"
            style="
              width: 130px;
              margin: 0 auto;
              margin-top: 50px;
              margin-bottom: 10px;
              display: block;
              cursor: pointer;
            "
            src="@/assets/img/log_in_btn.png"
            alt=""
          />

          <img
            @click="is_reg = true"
            style="
              width: 130px;
              margin: 0 auto;
              margin-bottom: 70px;
              display: block;
              cursor: pointer;
            "
            src="@/assets/img/reg.svg"
            alt=""
          />
        </div>
      </div>
    </div>

    <div class="login__global__form" v-if="is_reg">
      <img src="@/assets/img/logline.png" alt="" style="margin-top: 10px" />
      <div class="login__global__form_p">
        <div class="form-cabinet form-cabinet_main">
          <h1
            class="text-center"
            style="
              white-space: nowrap;
              text-overflow: ellipsis;
              overflow: hidden;
              margin-top: 10px;
            "
            v-if="!error_msg"
          >
            Регистрация
          </h1>
          <h1 class="text-center" v-if="error_msg">
            {{ error_msg }}
          </h1>

          <h1
            class="relative"
            style="border-bottom: 2px solid white; padding-bottom: 10px"
          >
            <div class="row">
              <div class="col-md-4">ПОЧТА:</div>
              <div class="col-md-8">
                <input type="text" class="invis_input" v-model="email" />
              </div>
            </div>
          </h1>
          <h1
            class="relative"
            style="
              border-bottom: 2px solid white;
              padding-bottom: 10px;
              margin-bottom: 30px;
            "
          >
            <div class="row">
              <div class="col-md-4">ПАРОЛЬ:</div>
              <div class="col-md-8">
                <input
                  type="password"
                  class="invis_input"
                  v-model="password_reg"
                />
              </div>
            </div>
          </h1>

          <h1
            class="relative"
            style="
              border-bottom: 2px solid white;
              padding-bottom: 10px;
              margin-bottom: 30px;
            "
          >
            <div class="row">
              <div class="col-md-4">ИМЯ:</div>
              <div class="col-md-8">
                <input type="text" class="invis_input" v-model="fullname" />
              </div>
            </div>
          </h1>

          <h1
            class="relative"
            style="
              border-bottom: 2px solid white;
              padding-bottom: 10px;
              margin-bottom: 30px;
            "
          >
            <div class="row">
              <div class="col-md-4">ТЕЛЕФОН:</div>
              <div class="col-md-8">
                <input type="text" class="invis_input" v-model="phone" />
              </div>
            </div>
          </h1>

          <br />
          <span class="fonamer"
            >Подтверждаю, что мне исполнилось 18 лет
            <label
              class="container2"
              style="
                float: right;
                width: unset;
                transform: translateY(3px);
                background-color: rgba(0, 0, 0, 0);
              "
            >
              <input type="checkbox" v-model="checkedAge2" />
              <span class="checkmark"></span>
            </label> </span
          ><br />
          <img
            @click="reg()"
            style="
              width: 130px;
              margin: 0 auto;
              margin-top: 50px;
              margin-bottom: 10px;
              display: block;
              cursor: pointer;
            "
            src="@/assets/img/reg.svg"
            alt=""
          />
          <img
            @click="is_reg = false"
            style="
              width: 130px;
              margin: 0 auto;
              margin-bottom: 70px;
              display: block;
              cursor: pointer;
            "
            src="@/assets/img/log_in_btn.png"
            alt=""
          />
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
      username: "",
      password: "",
      login_error: false,
      button_disabled: false,
      error_msg: false,
      is_reg: false,
      fullname: "",
      password_reg: "",
      checkedAge: false,
      checkedAge2: false,

      s_msg: false,
    };
  },
  mounted() {
    if (this.$store.state.token) {
      this.$router.push("/cabinet");
    }
    this.$store.state.isLogin = true;
  },
  methods: {
    validEmail: function (email) {
      var re =
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
      return re.test(email);
    },
    login(e) {
      this.error_msg = false;
      if (!this.validEmail(this.username)) {
        this.error_msg = "Неверный формат почты";
        setTimeout(() => {
          this.error_msg = false;
        }, 3000);
        return false;
      }

      if (!this.checkedAge) {
        this.error_msg = "Подтвердите возраст";
        if (window.innerWidth < 1000) {
              window.scrollTo(0, 0);
            }
        setTimeout(() => {
          this.error_msg = false;
        }, 3000);
        return true;
      }

      //localStorage.setItem('username',this.username)
      // this.$store.state.username = this.username;
      // this.$router.push('/cabinet');
      axios
        .post("https://education-api.gnt-it.ru/v1/auth/sign-in", {
          login: window.btoa(unescape(encodeURIComponent(this.username))),
          password: window.btoa(unescape(encodeURIComponent(this.password))),
        })
        .then((response) => {
          if (response.data.token) {
            localStorage.setItem("token", response.data.token);
            localStorage.setItem("email", response.data.user.email);
            localStorage.setItem("fullname", response.data.user.fullname);
            localStorage.setItem("phone", response.data.user.phone);
            localStorage.setItem("ava", response.data.user.ava);

            this.$store.state.token = response.data.token;
            this.$store.state.email = response.data.user.email;
            this.$store.state.fullname = response.data.user.fullname;
            this.$store.state.phone = response.data.user.phone;
            this.$store.state.ava = response.data.user.ava;

            this.$router.push("/cabinet");
          } else {
            this.error_msg = "Неверный логин или пароль";
            if (window.innerWidth < 1000) {
              window.scrollTo(0, 0);
            }

            setTimeout(() => {
              this.error_msg = false;
            }, 3000);
          }
        })
        .catch((error) => {
          this.error_msg = "Неверный логин или пароль";
          if (window.innerWidth < 1000) {
            window.scrollTo(0, 0);
          }
          setTimeout(() => {
            this.error_msg = false;
          }, 3000);
        });
    },
    reg() {
      this.error_msg = false;
      if (
        !this.email ||
        !this.password_reg ||
        !this.fullname ||
        !this.phone ||
        !this.checkedAge2
      ) {
        this.error_msg = "Заполните все поля";
        if (window.innerWidth < 1000) {
              window.scrollTo(0, 0);
            }
        setTimeout(() => {
          this.error_msg = false;
        }, 3000);
        return true;
      }

      if (!this.validEmail(this.email)) {
        this.error_msg = "Неверный формат почты";
        if (window.innerWidth < 1000) {
              window.scrollTo(0, 0);
            }
        setTimeout(() => {
          this.error_msg = false;
        }, 3000);
        return false;
      }
      axios
        .post("https://education-api.gnt-it.ru/v1/auth/registration", {
          fullname: this.fullname,
          email: this.email,
          password: this.password_reg,
          phone: this.phone,
          ref: this.ref,
        })
        .then((response) => {
          console.log(response.data);

          this.s_msg = "Пожалуйста проверьте вашу почту для подтверждения!";
          if (window.innerWidth < 1000) {
              window.scrollTo(0, 0);
            }

          setTimeout(() => {
            this.s_msg = false;
          }, 3000);
          this.is_reg = false;

          return false;
          localStorage.setItem("token", response.data.user.token);

          this.$store.state.token = response.data.user.token;
          this.$router.push("/");
        })
        .catch((error) => {
          if (error.response.data.message === "NOT_UNIQUE_EMAIL_OR_PHONE") {
            this.error_msg = "Почта или телефон уже используются";
            if (window.innerWidth < 1000) {
              window.scrollTo(0, 0);
            }
            setTimeout(() => {
              this.error_msg = false;
            }, 3000);
          }

          this.login_error = "Что-то пошло не так, попробуйте еще раз";
          if (window.innerWidth < 1000) {
              window.scrollTo(0, 0);
            }

          setTimeout(() => {
            this.login_error = false;
          }, 3000);
        });
    },
  },
};
</script>

<style scoped>
@media only screen and (max-width: 768px) {
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
  min-height: 120vh;
  background-size: cover;
  background-image: url("@/assets/img/loginb.png");
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
    background-color: #222 !important;
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
}
</style>