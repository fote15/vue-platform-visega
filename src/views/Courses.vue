<template>
  <section class="main__content">
    <!-- body main area start  -->
    <section class="result_main_area">
      <div class="container">
        <div class="result_main_text" v-if="nocur">
          <div>
            <p >Купленных куpсов еще нет,<br> но мы, кажется, знаем как это испpавить....</p>
            <div class="registration_headerTop_single">
              <a style="cursor: pointer" @click="scrollToCur()"> Узнать</a>
            </div>
          </div>
        </div>
        <div v-if="data.length>0">
          <carousel :items-to-show="1">
            <slide v-bind:key="x.id" v-for="x in data" class="single_item_area">
              <div class="calll">
                <h3 style="display:block">{{ x.course_id.title }}. {{ x.course_id.author_id.fio }}. <span class="">{{ x.course_id.passed_count }}/{{ x.course_id.count }}</span></h3> <br>
                <div @click="openCourse(x.course_id.id)">
                  <img :src="x.course_id.photo" alt="photos" />
                </div>
              </div>
            </slide>

            <template #addons>
              <pagination />
            </template>
          </carousel>
        </div>
      </div>
    </section>
    <!-- body main area End  -->
  </section>
</template>

<script>
// @ is an alias to /src
import axios from "axios";

import carousel from "vue-owl-carousel";


import 'vue3-carousel/dist/carousel.css';
import { Carousel, Slide, Pagination, Navigation } from 'vue3-carousel';

export default {
  name: "Home",
  components: {
    Carousel,
    Slide,
    Pagination,
    Navigation,


  },
  methods: {
    openCourse(e) {
      this.$router.push("/course-view/" + e + '/1');
    },
    initialized() { },
    logout() {
      localStorage.clear();
      this.$store.state.username = null;
      this.$router.push("/login");
    },
    scrollToCur() {
      this.$router.push("/");
      this.$store.state.scrolerCur = true;
      document.getElementById("courses").scrollIntoView();
    },
  },
  data() {
    return {
      nocur: false,
      data:[],
    };
  },
  mounted() {
    axios
      .post(
        "https://education-api.gnt-it.ru/v1/purchased-course/list",
        {
          id: this.$route.params.id,
        },
        {
          headers: {
            Authorization: `Bearer ${this.$store.state.token}`,
          },
        }
      )
      .then((response) => {
        console.log(this.data)
        console.log(response.data.data)
        this.data = response.data.data;
        console.log(this.data)
        console.log(this.data)
        
        if(this.data.length<1){
          this.nocur = true;
        }
        return false;
        localStorage.setItem("token", response.data.user.token);
        this.$store.state.token = response.data.user.token;
        this.$router.push("/");
      })
      .catch((error) => {
        this.nocur = true;  
        this.data = []
      });

    /* this.$router.push('/login')
    if(!this.$store.state.token){
      this.$router.push('/login')
    }*/
  },
};
</script>
<style>
.result_main_text {
  min-height: 70vh;
}

.result_main_text {
  display: flex;
  justify-content: center;
  align-items: center;
}

.carousel__pagination-button--active {
  background-color: white !important;
}

.carousel__pagination-button {
  background-color: rgb(167, 167, 167);
}
</style>
<style scoped>
  p{
    font-size: 24px;
  }
@font-face {
  font-family: "Amsterdam Deco One";
  src: local("Amsterdam Deco One"),
    url('@/assets/fonts/AmsterdamDecoOne.woff') format("truetype");
}


.calll span {
  float: right;
  font-size: 72px;
  font-family: 'Amsterdam Deco One';
}

.calll h3 {
  text-align: left;
  font-size: 44px;


  font-family: 'Bertilion';
  font-style: normal;
  font-weight: 400;
  font-size: 44px;
  line-height: 62px;
  /* or 141% */

  text-transform: uppercase;

}

.single_item_area img {
  cursor: pointer;
}

.result_main_area {
  padding: 80px 0 !important;
}
</style>