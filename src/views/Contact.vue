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

            <h2><router-link to="/courses">МОИ КУРСЫ</router-link></h2>
            <h2>
              <router-link to="/contact" class="cabinet_van_active"
                >ОБРАТНАЯ СВЯЗЬ</router-link
              >
            </h2>

            <h2><router-link to="/prize">ДОСТИЖЕНИЯ</router-link></h2>
            <br />
            <br />
            <h2><a @click="logout()">выйти</a></h2>
          </div>
          <div class="col-md-8">
            <div class="form-cabinet">
              <input type="text" placeholder="Ваше имя" />
              <input type="text" placeholder="Введите вашу почту" />
              <textarea rows="4">Текст...</textarea>

              <img src="@/assets/img/btn_con.svg" alt="" />
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
      windowHeight: window.innerHeight
    };
  },
  mounted() {
    this.$nextTick(() => {
      window.addEventListener('resize', this.onResize);
    })
    this.onResize();
  },
  beforeDestroy() { 
    window.removeEventListener('resize', this.onResize); 
  },
  methods: {
    onResize() {
      this.windowHeight = window.innerWidth;
      if(this.windowHeight < 768){
        this.$router.push('/cabinet')
      }
    },
    logout(){
      localStorage.clear();
      this.$store.state.username = null;
      this.$router.push("/login");
    },
  },
};
</script>

<style scoped>

  input{
    padding:0  15px !important;
    font-family: "Am"!important;
  }
  textarea{
    padding:15px !important;
    font-family: "Am"!important;

  }

  input::placeholder{
    font-family: "Am"!important;
  }

a:hover {
  cursor: pointer;
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

.form-cabinet {
  background-color: #272727;
  width: 100%;

  background: #272727;
  border: 7px solid #a99060;
  box-shadow: 0px 7px 15px rgba(0, 0, 0, 0.55);
  border-radius: 30px;
  padding: 116px 140px;
}

.form-cabinet input {
  font-family: "Am"!important;

  padding: 0 8px;
  width: 100%;
  border: 2px solid #a99060;
  filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
  border-radius: 15px;
  background-color: rgba(0, 0, 0, 0);
  margin-bottom: 20px;
  color: white !important;
}

.form-cabinet textarea {
  height: 328px;
  padding: 0 8px;
  width: 100%;
  border: 2px solid #a99060;
  filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
  border-radius: 15px;
  background-color: rgba(0, 0, 0, 0);
  margin-bottom: 20px;
  color: white !important;
}

.form-cabinet img {
  width: 180px;
  height: 50px;
  cursor: pointer;
}

.form-cabinet input::placeholder,
.form-cabinet textarea {
  color: white !important;
  font-family: "American Typewriter";
  font-style: normal;
}
</style>