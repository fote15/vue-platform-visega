<template>
  <section class="main_con">
    <div class="container">
      <div v-if="login_error" id="err_not" class="error__notification">
        Что-то пошло нет так, попроуйбте еще раз
      </div>
      <div class="section p10">
        <div class="row">
          <div class="col-md-12">
            <div class="pay_wrap">
              <input type="text" placeholder="номер карты" class="input11 input1" />
              <input type="text" placeholder="28/02" class="input11 input2" />
              <input type="text" placeholder="CVC" class="input11 input3" />
              <a @click="buyy"> <button class="input11 input4"></button></a>
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
      username: "",
      password: "",
      login_error: false,
      button_disabled: false,
    };
  },
  mounted() { 
    if (!this.$store.state.token) {
      this.$router.push("/login");
      return true;
    }
  },
  methods: {
    buyy() {
      
      axios
        .post("https://education-api.gnt-it.ru/v1/purchased-webinar/add", {
          webinarId: this.$store.state.byuingCur
        }, {
          headers: {
            Authorization: `Bearer ${this.$store.state.token}`,
          },
        })
        .then((response) => {
          this.$router.push('/thankyou-web')
          
          return false;

          localStorage.setItem("token", response.data.user.token);

          this.$store.state.token = response.data.user.token;
          this.$router.push("/");
        })
        .catch((error) => {
          this.login_error = true;

        });



    }
  },
};
</script>

<style scoped>
@media only screen and (max-width: 768px) {
  .p10{
    padding: 10px!important;
}
}
 

.input4 {
  position: absolute;
  background-color: rgba(0, 0, 0, 0) !important;
  width: 100%;
  top: 280px;
  height: 50px;
  left: 0px;
}

.input11 {
  border: none;
  background-color: #f2f2f2;
  position: absolute;
  font-family: serif !important;
}

.input1 {
  top: 140px;
  left: 85px;
  width: 270px;
}

.input2 {
  top: 203px;
  left: 39px;
  width: 100px;
}

.input3 {
  top: 203px;
  left: 220px;
  width: 100px;
}

.pay_wrap {
  position: relative;
  margin: 0 auto;
  width: 402px;
  height: 329px;
  background-image: url("@/assets/img/frm.png");
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

 
}
.p10 {
    padding: 100px 100px;
  }
.main_con {
  min-height: 100vh;
  background-size: cover;
  background-image: url("@/assets/img/buy.png");
}
</style>