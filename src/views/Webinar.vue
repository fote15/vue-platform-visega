<template>
  <section class="main__content" v-if="data.length > 0">
    <div class="container">
      <router-link
        v-for="x in data"
        v-bind:key="x.id"
        @click="$store.state.byuingCur = x.id"
        to="/buy-web"
      >
        <img class="banner" :src="x.course_id.photo" alt=""
      /></router-link>
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
      data: [],
    };
  },
  mounted() {
    axios
      .get("https://education-api.gnt-it.ru/v1/webinar/list", {
        lessonId: this.$route.params.id,
      })
      .then((response) => {
        this.data = response.data.data;
      })
      .catch((error) => {
        this.login_error = true;
      });

    /* this.$router.push('/login')
     if(!this.$store.state.token){
       this.$router.push('/login')
     }*/
  },
};
</script>
<style scoped>
.banner {
  display: block;
  width: 100%;
}
</style>