<template>
  <div class="container">
    <h2 v-if="empty">К сожалению, ничего не найдено</h2>

    <section class="main__content" v-if="data.length > 0">
      <router-link
        v-for="x in data"
        v-bind:key="x.id"
        @click="$store.state.byuingCur = x.id"
        :to="'/course/' + x.id"
      >
        <img class="banner" :src="x.photo" alt=""
      /></router-link>
    </section>
  </div>
</template>

<script>
// @ is an alias to /src
import axios from "axios";

export default {
  name: "Home",
  components: {},
  data() {
    return {
      empty: false,
      data: [],
    };
  },
  watch: {
    "$route.params.text": {
      handler: function (search) {
        axios
          .post(
            "https://education-api.gnt-it.ru/v1/course/search",
            {
              title: this.$route.params.text,
            },
            {
              headers: {
                Authorization: `Bearer ${this.$store.state.token}`,
              },
            }
          )
          .then((response) => {
            this.data = response.data.data;
            if (this.data.length < 1) {
              this.empty = true;
            }else{
              this.empty = false;
            }
          
            return true;
            this.$router.push("/");
          })
          .catch((error) => {
            this.nocur = true;
            this.data = [];
          });
      },
      deep: true,
      immediate: true,
    },
  },

  mounted() {
    axios
      .post(
        "https://education-api.gnt-it.ru/v1/course/search",
        {
          title: this.$route.params.text,
        },
        {
          headers: {
            Authorization: `Bearer ${this.$store.state.token}`,
          },
        }
      )
      .then((response) => {
        this.data = response.data.data;
        if (this.data.length < 1) {
          this.empty = true;
        }else{
              this.empty = false;
            }
        return true;
        this.$router.push("/");
      })
      .catch((error) => {
        this.nocur = true;
        this.data = [];
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