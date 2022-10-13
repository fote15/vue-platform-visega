<template>
  <section class="main__content">
    <div class="container">
      <div class="row">
        <p class="cart__wrap"><span class="cart__btn">вернуться назад</span></p>
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

  },
  mounted() {

  },
};
</script>
<style scoped>
.main__content {
  background-image: url("@/assets/img/texture.png");
  background-size: cover;
  background-repeat: no-repeat;
}
.cart__btn {
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>