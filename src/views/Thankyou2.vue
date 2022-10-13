<template>
  <section class="main_con">
    <div class="container">
      <div class="section p10">
        <div class="row">
          <div class="col-md-12 text-center fbcen">
            <div>
              <h1>БЛАГОДАРИМ ЗА ПОКУПКУ!</h1>
              <br>
              <h2>Учитесь! <br>
                Победа любит подготовку!</h2><br>
             <h2>Спасибо за купленный вебинар, ссылка будет отправлена вам на почту</h2>
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
  mounted() { },
  methods: {
    gotoCur(){
      this.$router.push('/course-view/'+this.$store.state.byuingCur+'/1')
    }
  },
};
</script>

<style scoped>
.main_con{
  background-image: url('@/assets/img/horse.png')!important;
}
@media only screen and (max-width: 768px) {
  h1{
    font-size: 36px!important;
  }
  h2{
    font-size: 13px;
  }
}


@font-face {
  font-family: "Amsterdam Deco One";
  src: local("Amsterdam Deco One"),
    url("@/assets/fonts/AmsterdamDecoOne.woff") format("truetype");
}

@font-face {
  font-family: "Am";
  src: local("Am"),
    url("@/assets/am.ttf") format("truetype");
}

img{
  cursor: pointer;
}
.fbcen {
  min-height: 80vh;
  display: flex;
  align-items: center;
  justify-content: center;
}

h2 {
  font-family: 'Am';
}

h1 {
  font-family: 'Bertilion';
  font-style: normal;
  font-weight: 400;
  font-size: 96px;
  line-height: 98px;
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
  min-height: 100vh;
  background-size: cover;
  background-image: url("@/assets/img/2.png");
}
</style>