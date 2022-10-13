<template>
  <section class="main__content">
    <div class="container borders10">
      <div class="row">
        <div class="col-md-7 main__content1"></div>

        <div class="col-md-5 p90">
          <h1 style="" class="title_ccorp">КОРПОPАТИВНОЕ</h1>
          <h1 style="" class="title_ccorp2">ОБУЧЕНИЕ</h1>
          <div>
            <div>
              <span>
                <input type="text" placeholder="Электронная почта"
              /></span>
            </div>
            <div>
              <span>
                <input type="text" placeholder="Как к вам обращаться?"
              /></span>
            </div>
            <div>
              <textarea
                name=""
                placeholder="Расскажите о себе..."
                id=""
                cols="30"
                rows="10"
              ></textarea>
            </div>
            <div>
              <img
                @click="click"
                class="imgbtn"
                src="@/assets/img/Group12374.png"
                alt=""
              />
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
    return {};
  },
  methods: {
    click() {
      alert("Спасибо! Обращение принято");
    },
  },
  mounted() {
    /* this.$router.push('/login')
    if(!this.$store.state.token){
      this.$router.push('/login')
    }*/
  },
};
</script>
<style scoped>
.borders10 {
  border: 5px solid white;
}

.p90 {
  padding: 90px;
  padding-left: 0;
  padding-bottom: 120px;
}
.title_ccorp {
  font-size: 88px;
  margin: 0;
}

.title_ccorp2 {
  font-size: 146px;
  margin: 0;
  line-height: 100px !important;
  margin-bottom: 10px;
}
@media only screen and (max-width: 1400px) and (min-width: 1200px) {
  .title_ccorp {
    font-size: 73px !important;
    line-height: 60px !important;
  }
  .title_ccorp2 {
    font-size: 122px !important;
  }
}

@media only screen and (max-width: 1200px) and (min-width: 992px) {
  .p90 {
    padding: 50px !important;
  }
  .title_ccorp {
    font-size: 57px !important;
    line-height: 60px !important;
  }
  .title_ccorp2 {
    font-size: 95px !important;
  }
}
@media only screen and (max-width: 992px) and (min-width: 768px) {
  .p90 {
    padding: 50px !important;
  }

  .title_ccorp {
    font-size: 37px !important;
    line-height: 10px !important;
    margin-bottom: 0px !important;
  }
  .title_ccorp2 {
    margin-bottom: 0px !important;
    font-size: 62px !important;
  }
}

@media only screen and (max-width: 768px) {
  .main__content {
    background-image: url("@/assets/img/mob_tree.png")!important;
  }
  input, textarea{
    background-color: #222!important;
  }
  input{
    transform: scale(0.94);
    padding: 0!important;
  }
  span {
    position: relative;
    height: 54px !important;
    display: block;
    z-index: 0;
    margin-bottom: 10px;
  }
  input {
    z-index: 9;
    position: relative;
    width: 100%;
    background-color: rgba(0, 0, 0, 0);
    border-radius: 10px;
    color: white;
    border: none;
  }
  span::before {
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
  input {
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
    margin: 34px 0!important;
  }
}
input {
  font-family: "Am" !important;
}
textarea {
  font-family: "Am" !important;
}

.main__content {
  background-image: url("@/assets/img/texture.png");
  background-size: cover;
  background-repeat: no-repeat;
}
.img_corp {
  border-radius: 100%;
}
.imgbtn {
  cursor: pointer;
}
.main__content {
  padding: 20px;
}
.main__content1 {
  background-size: contain;
  background-repeat: no-repeat;
  background-image: url("@/assets/img/corp.png");
}
.main__content h1 {
}
@media only screen and (min-width: 768px) {
  input {
    border-radius: 10px;
    padding: 5px;
    margin: 9px 0;
    width: 100%;
    color: white;
    border: 1px solid #f1d693;
    background-color: rgba(0, 0, 0, 0);
  }
}
textarea {
  border-radius: 10px;
}
@media only screen and (min-width: 768px) {
  input {
    padding: 5px;
    margin: 9px 0;
    width: 100%;
    color: white;
    border: 1px solid #f1d693;
    background-color: rgba(0, 0, 0, 0);
  }
}
input::placeholder {
  color: rgb(187, 187, 187);
}
textarea {
  color: white;
  margin: 9px 0;
  width: 100%;
  border: 1px solid #f1d693;
  background-color: rgba(0, 0, 0, 0);
}
</style>