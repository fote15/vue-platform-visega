<template>
  <section class="main_con" v-if="$store.state.cartData.length < 1">
    <div class="container">
      <div class="section p10">
        <div class="row">
          <div class="col-md-12 text-center fbcen">
            <div>
              <h1 style="font-family: 'Bertilion'; font-size: 67px">
                ВАША КОРЗИНА ПУСТАЯ <br />
                НО МЫ<span style="margin-left: 1px">,</span> КАЖЕТСЯ, ЗНАЕМ КАК
                ЭТО ИСПРАВИТЬ<span style="margin-left: 1px"></span>...
              </h1>
              <br />
              <div class="registration_headerTop_single">
                <a
                  style="
                    cursor: pointer;
                    text-decoration: underline;
                    display: inline;
                    border-bottom: 2px solid #bd9540;
                    font-size: 64px;
                  "
                  @click="scrollToCur()"
                  >ВЫБРАТЬ КУРС</a
                >
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>

  <section class="main__content" v-else>
    <div class="container d-none d-md-block">
      <div class="row">
        <div class="cart__wrap">
          <span class="cart__btn">вернуться назад</span>
          <h1 class="cart__course">ваш заказ</h1>
          <span class="cart__btn"></span>
        </div>
        <div class="col-xl-8 col-md-12" ref="animate">
          <p class="cart__clear">очистить корзину</p>
          <div class="cart__line"></div>

          <div
            class="card__wrapper"
            v-for="prod in $store.state.cartData"
            :key="prod.id"
          >
            <div class="row">
              <div class="col-md-5">
                <img :src="prod.photo" alt="" />
              </div>
              <div class="col-md-7">
                <span class="cart__card__wrap">
                  <div class="cart__card__about">
                    <h1 class="cart__he">{{ prod.title }}</h1>
                    <p class="cart__card__about">
                      {{ prod.description }}
                    </p>
                  </div>
                  <span class="cart__x" @click="removeItem(prod.id)">x</span>
                </span>
                <span class="cart__price">6999 Р</span>
              </div>
            </div>
          </div>
        </div>
        <div class="col-xl-4 col-md-12">
          <div class="total__wrap">
            <h1>итого:</h1>
            <div class="total__about__wrap">
              <span>Восток дело тонкое</span>
              <span>6999р</span>
            </div>
            <div class="total__about__wrap">
              <span>Восток дело тонкое</span>
              <span>6999р</span>
            </div>
            <div class="total__input__wrap">
              <span>Ваш промокод:</span>
              <input type="text" placeholder="AAAAA" />
              <img src="@/assets/img/apply.svg" alt="" />
            </div>
            <div class="total__t__wraper">
              <span>к оплате:</span>
              <span><strike>8499 р</strike></span>
            </div>
            <div class="total__strike__wrap">
              <span>8099 р</span>
            </div>
            <div class="total__submit">
              <img src="@/assets/img/pay.svg" alt="" />
            </div>
            <div class="confident__wrap">
              <p>
                Нажимая на кнопку, вы соглашаетесь с
                <span>Политикой обработки данных</span>
                и
                <span>Договором оферты</span>.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="container d-md-none d-sm-block">
      <div class="row">
        <h1 class="cart__mh">
          корзина
          <img class="cart__mi" src="@/assets/img/Vector.png" alt="" />
        </h1>
      </div>
      <div class="cart__mcs_wrap">
        <div class="col-sm-4 col-4 cart__mcsr">
          <img
            src="https://devtutor.ru/wp-content/uploads/2020/05/card-hover-870x400.jpg"
            alt=""
            class="cart__mimg"
          />
        </div>
        <div class="col-sm-7 col-7 cart__mca">
          <h1>восток дело тонкое</h1>
          <p>10 занятий</p>
          <span class="cart__mp">6500 р</span>
        </div>
        <div class="col-sm-1 col-1">
          <img src="@/assets/img/minus.png" alt="" class="cart__mcm" />
        </div>
      </div>
      <div class="cart__mcs_wrap">
        <div class="col-sm-4 col-4">
          <img
            src="https://devtutor.ru/wp-content/uploads/2020/05/card-hover-870x400.jpg"
            alt=""
            class="cart__mimg"
          />
        </div>
        <div class="col-sm-7 col-7 cart__mca">
          <h1>восток дело тонкое</h1>
          <p>10 занятий</p>
          <span class="cart__mp">6500 р</span>
        </div>
        <div class="col-sm-1 col-1">
          <img src="@/assets/img/minus.png" alt="" class="cart__mcm" />
        </div>
      </div>
      <div class="mcart__b__wrap">
        <div class="cart__in__wrap">
          <input type="text" placeholder="промокод" class="mcart__inb" />
          <div class="mcart__ss">
            <span>применить</span>
          </div>
        </div>
        <div class="mcart_total_wrap">
          <h1>итого:</h1>
          <span>19200 р</span>
        </div>
        <div class="mtotal__submit">
          <img src="@/assets/img/Group12374.png" alt="" />
        </div>
      </div>
    </div>
  </section>
</template>

<script>
// @ is an alias to /src
import axios from "axios";
import autoAnimate from "@formkit/auto-animate"

export default {
  name: "Home",
  components: {},
  data() {
    return {};
  },
  methods: {
    scrollToCur() {
      this.$router.push("/");
      this.$store.state.scrolerCur = true;
    },
    removeItem(id) {
      this.$store.state.cartData = this.$store.state.cartData.filter((e)=>{
        return e.id !== id;
      })
      localStorage.setItem('cartData',JSON.stringify(this.$store.state.cartData))
    },
  },
  mounted() {
    window.scrollTo({
        top: 0,
        behavior: "instant",
      });
    autoAnimate(this.$refs.animate)
  },
};
</script>
<style scoped>
.pay_btn {
  box-sizing: border-box;

  position: absolute;
  width: 180px;
  height: 50px;
  left: 1386px;
  top: 778px;

  filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
  border-radius: 30px;
}
.main__content {
  min-height: 80vh;
  background-image: url("@/assets/img/symb.svg"),
    url("@/assets/img/texture.png");
  background-position: right top, left top;
  background-repeat: repeat, repeat;
  background-size: auto, 100% auto;
}

.cart__wrap {
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 24px;
  line-height: 27.5px;
  margin-top: 54px;
}
.cart__course {
  font-size: 72px;
  line-height: 79px;
  font-family: "Amsterdam Deco One";
}

.cart__clear {
  font-size: 32px;
  line-height: 35px;
  font-family: "Amsterdam Deco One";
  color: #f1d693;
}

.cart__line {
  margin-top: 10px;
  border: 1px solid #f1d693;
}

.cart__he {
  font-size: 42px;
  font-family: "Amsterdam Deco One";
}

.cart__card__wrap {
  position: relative;
  display: flex;
  justify-content: space-between;
}

.cart__x {
  cursor: pointer;
  font-size: 48px;
  font-family: "Bertilion";
  line-height: 55px;
  font-weight: 400;
  position: absolute;
  right: 10px;
  top: 10px;
}

.cart__card__about {
  font-family: "CMU Typewriter Text";
  font-style: normal;
  font-weight: 500;
  font-size: 18px;
  line-height: 23px;
  margin-right: 70px;
}

.cart__price {
  font-family: "Amsterdam Deco One";
  font-style: normal;
  font-weight: 400;
  font-size: 42px;
  line-height: 46px;
  text-transform: lowercase;
  color: #f1d693;
}

.card__wrapper {
  display: flex;
  justify-content: center;
  padding: 39px 0 75px 0;
  border-top: 1px solid #f1d693;
  margin-bottom: 10px;
}

.total__wrap {
  background: #272727;
  border: 5px solid #a99060;
  box-shadow: 0px 7px 15px rgba(0, 0, 0, 0.55);
  border-radius: 30px;
  padding: 34px;
}

.total__wrap h1 {
  font-family: "Amsterdam Deco One";
  font-style: normal;
  font-weight: 400;
  font-size: 42px;
  line-height: 46px;
  text-align: center;
  text-decoration-line: underline;
  text-transform: lowercase;
  margin-bottom: 30px;
}

.total__about__wrap {
  margin-bottom: 10px;
  display: flex;
  justify-content: space-between;
}

.total__about__wrap span {
  font-family: "Am";
  font-style: normal;
  font-weight: 500;
  font-size: 18px;
  line-height: 23px;
}

.total__input__wrap {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-bottom: 10px;
  border-bottom: 2px solid #f1d693;
}

.total__input__wrap span {
  font-family: "Am";
  font-style: normal;
  font-weight: 500;
  font-size: 18px;
  line-height: 23px;
}

.total__input__wrap input {
  font-family: "Am";
  font-style: normal;
  font-weight: 500;
  font-size: 18px;
  color: white;
  line-height: 23px;
  width: 100px;
  height: 33px;
  background-color: transparent;
  border: none;
}

.total__input__wrap img {
}

.total__t__wraper {
  display: flex;
  justify-content: space-between;
  margin-top: 18px;
}

.total__t__wraper span {
  font-family: "Amsterdam Deco One";
  font-style: normal;
  font-weight: 400;
  font-size: 37px;
  line-height: 46px;
  text-transform: lowercase;
}

.total__strike__wrap {
  display: flex;
  justify-content: end;
}

.total__strike__wrap span {
  font-family: "Amsterdam Deco One";
  font-style: normal;
  font-weight: 400;
  font-size: 37px;
  line-height: 46px;
  text-align: right;
  text-transform: lowercase;
}

.total__submit {
  display: flex;
  justify-content: center;
  margin-top: 8px;
  height: 40px;
}

.confident__wrap {
  margin-top: 20px;
  font-family: "Am";
  font-style: normal;
  font-weight: 500;
  font-size: 15px;
  line-height: 19px;
  text-align: center;
}

.cart__mh {
  text-align: center;
  position: relative;
  font-family: "Bertilion";
  font-style: normal;
  font-weight: 400;
  font-size: 36px;
  line-height: 72px;
}

.cart__mi {
  position: absolute;
  top: 20px;
  right: 10px;
}

.cart__mcs_wrap {
  display: flex;
  justify-content: space-between;
  background: rgba(33, 41, 49, 0.71);
  border-radius: 20px;
  margin-bottom: 19px;
  padding: 14px;
}

.cart__mimg {
  border-radius: 4px;
}

.cart__mcs_wrap h1 {
  font-family: "Bertilion";
  font-style: normal;
  font-weight: 400;
  font-size: 21px;
  line-height: 24px;
}

.mcart__ss {
  padding: 5px 10px;
  background: #212931;
  border-radius: 10px;
}

.cart__mcs_wrap p {
  font-family: "Amsterdam Deco One";
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 18px;
  color: rgba(255, 255, 255, 0.5);
  margin-top: 5px;
  margin-bottom: 0px;
}

.cart__mp {
  font-family: "Amsterdam Deco One";
  font-style: normal;
  font-weight: 400;
  font-size: 42px;
  line-height: 46px;
  text-transform: lowercase;
  color: #f8be2a;
}

.cart__mcm {
  margin: 55px 32px 55px 0;
}

.cart__mca {
  padding-left: 23px;
}

.mcart__b__wrap {
  padding: 42px 30px 38px 42px;
  background: #23282e;
  border-radius: 36px;
}

.cart__in__wrap {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 5px;
  background: #ffffff;
  border-radius: 12px;
}

.mcart__ss span {
  display: flex;
  align-items: center;
  justify-content: center;
  font-family: "Amsterdam Deco One";
  font-style: normal;
  font-weight: 400;
  font-size: 24px;
  line-height: 26px;
  display: flex;
  align-items: center;
  text-align: center;
  letter-spacing: 0.0264em;
}

.mcart__inb {
  border: none;
  font-family: "Am";
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 16px;
  letter-spacing: 0.0264em;
  color: #777777;
}

.mcart_total_wrap {
  display: flex;
  justify-content: space-between;
  margin-top: 10px;
}

.mcart_total_wrap h1 {
  font-family: "Amsterdam Deco One";
  font-style: normal;
  font-weight: 400;
  font-size: 42px;
  line-height: 46px;
  display: flex;
  align-items: center;
  text-transform: lowercase;
  color: #ffffff;
}

.mcart_total_wrap span {
  font-family: "Amsterdam Deco One";
  font-style: normal;
  font-weight: 400;
  font-size: 42px;
  line-height: 46px;
  text-transform: lowercase;
  color: #f8be2a;
}

.mtotal__submit {
  display: flex;
  justify-content: center;
  margin-top: 18px;
}

.mtotal__submit img {
  width: 127px;
  height: 40px;
}

@media (max-width: 1199px) {
  .card__wrapper {
    margin-bottom: 10px;
  }
}

.main_con {

  background-image: url('@/assets/img/symb.svg'),url("@/assets/img/texture.png");
  background-position: right bottom, left top;
  background-repeat: repeat,no-repeat ;
  background-size: auto,cover;

  min-height: 100vh;
}

.main_con h2 {
  font-family: "Am";
}

.main_con h1 {
  font-family: "Bertilion";
  font-style: normal;
  font-weight: 400;
  font-size: 96px;
  line-height: 98px;
}
.fbcen {
  min-height: 80vh;
  display: flex;
  align-items: center;
  justify-content: center;
}
</style>
